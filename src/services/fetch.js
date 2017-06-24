import userService from './user';

export default async function(url, options) {
    let token = await userService.getToken();
    if(options) {
        options.headers = {...options.headers, authorization: token}
    } else {
        options = {
            method:'get',
            headers: {
                authorization: token
            }
        }
    }
    return fetch(url, options);
}