import fetch from '../../services/fetch';
import config from '../../config';

const getInvoice = (token) => {
    console.log(`${config._API}/invoice/${token}`);
    return fetch(`${config._API}/invoice/${token}`)
}

export default {
    getInvoice
}