import React, { Component } from 'react';
import QRScanner from 'react-native-qrcode-scanner';

class QRReader extends Component {
    constructor(props) {
        super(props);
        this.onRead = this.onRead.bind(this);
    }
    onRead(e) {
        console.log('read');
        let token = 'test';
        this.props.navigation.navigate('Invoice', {
            token: e.data
        });
    }
    render() {
        return (
            <QRScanner onRead={this.onRead}/>
        )
    }
}
export default QRReader;