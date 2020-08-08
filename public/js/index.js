
// async function statusChangeCallback(response) {

//     console.log(response);
//     const { userID, accessToken } = response.authResponse;
//     const result = await fetch(`https://graph.facebook.com/v8.0/${userID}?field=picture,id,name&access_token=${accessToken}`, 
//     { method: "get" });
//     const data = await result.json();
//     const form = new FormData();
//     form.append("username",data.id)
//     form.append("email",`${data.id}@facebokk.com`)
//     form.append("password",`facebook:${data.id}`)
//     console.log(data);

//     await fetch("/api/register",{ method:"POST",body: form })       
// }

// function checkLoginState() {
//     FB.getLoginStatus(statusChangeCallback)
//     // statusChangeCallback(response);
// }