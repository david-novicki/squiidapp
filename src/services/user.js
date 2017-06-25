import {
    AsyncStorage
} from 'react-native';

const getToken = () => {
    return AsyncStorage.getItem('token');
}
const saveToken = (token) => {
    return AsyncStorage.setItem('token', token);
}
const removeToken = () => {
    return AsyncStorage.removeItem('token');
}
saveToken('3c16b14ccc0c0214d0d5c57e08429630e65affd40d2db7f1b8566cb7f34dc65d6ec9a58125c8a25f70486d6afa66a7fd003c0df973508892').then(data => console.log(data));
//saveToken('3c16b14ccc0c0142d0d5c57e08429630e65affd40d2db7f6b8566cb7f34dc65d6ec9a58125c8a25f70486d6afa66a7fd003c0df973508892').then(data => console.log(data));
export default {
    getToken,
    saveToken,
    removeToken
}