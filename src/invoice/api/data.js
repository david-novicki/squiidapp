import fetch from '../../services/fetch';
import config from '../../config';

const getInvoice = (token) => (
    fetch(`${config._API}/invoice/${token}`)
)
const makePayment = (amount) => (
    fetch(`${config._API}/contribution`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: amount
        })
    })
)

export default {
    getInvoice
}