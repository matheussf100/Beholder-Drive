export function doLogin(email, password){
    return new Promise((response, reject) => {
        if (email === 'Jooj@hotmail.com'
        && password === '123456') {
           response(true);
        }
        reject(`Invalid user and/or password!`);
    })
}

export function doLogout(){

}