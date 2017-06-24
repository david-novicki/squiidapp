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
export default {
    getToken,
    saveToken,
    removeToken
}