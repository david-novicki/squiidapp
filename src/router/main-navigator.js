import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../home/home';
import Invoice from '../invoice/invoice';
import Profile from '../profile/profile';
import Recent from '../recent/recent';
import Pay from '../pay/pay';
import QRReader from '../qr-reader/qr-reader';
import Complete from '../complete/complete';

const StackNav = StackNavigator({
    // Home: {
    //     screen: Home,
    // },
    Invoice: {
        screen: Invoice
    },
    Profile: {
        screen: Profile
    },
    Recent: {
        screen: Recent
    },
    Complete: {
        screen: Complete
    },
    Pay: {
        screen: Pay
    },
    Reader: {
        screen: QRReader,
    }
});
export default StackNav;