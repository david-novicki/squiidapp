import fetch from '../../services/fetch';
import config from '../../config';

const makePayment = ({invoiceID, amount}) => (
    fetch(`${config._API}/contribution`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: amount,
            invoiceID: invoiceID
        })
    })
)
export default {
    makePayment
}