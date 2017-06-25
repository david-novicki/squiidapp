import React, { Component } from 'react';
import QRScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackButton from '../shared/back-button/back-button';

class QRReader extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        headerLeft: (<BackButton onPress={() => navigation.goBack()} />),
    })
    constructor(props) {
        super(props);
        this.onRead = this.onRead.bind(this);
    }
    onRead(e) {
        this.props.navigation.navigate('Invoice', {
            token: e.data
        });
    }
    render() {
        return (
            <QRScanner onRead={this.onRead} />
        )
    }
}
export default QRReader;