import { NextResponse } from 'next/server'

export default async function validateLoggedIn(request){

    const sessionID = request.cookies.get('SessionID')?.value;

    if(!sessionID){
        console.log('routing to login page');
        return NextResponse.redirect(new URL('/account/login','http://localhost:3000'))
    }

    //access the DB to verify the session is actually valid
    try{

        const response = await fetch(
          "http://localhost:3001/api/retreiveSession",
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

export const config = {
    matcher: [
        '/',
        '/((?!account))'
    ]
}

