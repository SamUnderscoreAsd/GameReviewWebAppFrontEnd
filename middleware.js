import { NextResponse } from 'next/server'

export default async function validateLoggedIn(request){

    const sessionID = request.cookies.get('SessionID')?.value;

    if(!sessionID){
        console.log('routing to login page');
        return NextResponse.redirect(new URL('/account/login', process.env.NEXT_PUBLIC_FRONTEND_URL))
    }

    //access the DB to verify the session is actually valid
    const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/retreiveSession` 

    try{

        const response = await fetch(
          url,
          {
            method: "POST",
            headers: {
              "Content-type": "application/JSON",
            },
            body: JSON.stringify({
              sessionID: sessionID,
            }),
          }
        )

        const data = await response.json();

        if(data.expires < Date.now()){
            console.log('sending the user back to login page')
            return NextResponse.redirect(new URL('/accounts/login', request.url));
        }
        else{
            console.log('Session token for user is valid, continuing');
            return NextResponse.next();
        }

    }catch(err){
        console.error(err);
    }

};

//TODO: LEARN REGEX
export const config = {
    matcher: [
        '/game/:path*',
        '/((?!account|_next|api|favicon.ico).+)'
    ]
}

