import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import API from './api/data';
import config from '../config';
import SocketIOClient from 'socket.io-client';
import FeedItem from './components/feed-item/feed-item';
import userService from '../services/user';
import BackButton from '../shared/back-button/back-button';

class Invoice extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        headerLeft: (<BackButton onPress={() => navigation.goBack()} />),
    })
    constructor(props) {
        super(props);
        let navState = props.navigation.state;
        console.log(navState);
        this.state = {
            invoiceID: '594ff50d1360df3af02dcd4b',//navState.params.invoiceID,
            data: {},
        }
        this.onConnected = this.onConnected.bind(this);
        this.onError = this.onError.bind(this);
        this.onPayPress = this.onPayPress.bind(this);
        this.onInfoPress = this.onInfoPress.bind(this);
        this.onReceivedContribution = this.onReceivedContribution.bind(this);
        this.onComplete = this.onComplete.bind(this);

        this.socket = SocketIOClient(config._API);
        userService.getToken()
            .then(userToken => {
                this.socket.emit('join', { userToken: userToken, invoiceID: '594ff50d1360df3af02dcd4b' })
            });
        this.socket.on("connect_error", (error) => console.log('ce', error));
        this.socket.on("connect_failed", (error) => console.log('cf', error))
        this.socket.on('connected', this.onConnected)
        this.socket.on('contribution', this.onReceivedContribution);
        this.socket.on('complete', this.onComplete);
        this.socket.on('err', this.onError);
    }
    onConnected(data) {
        console.log('connected', data);
        this.setState({ data: data });
    }
    onError(message) {
        console.log('err', message);
    }
    onReceivedContribution(data) {
        console.log('on contributions', data);
        this.setState({ data: { ...this.state.data, contributions: data.contributions } });
    }
    onComplete() {
        console.log('oncomplete');
    }
    onPayPress() {
        console.log('pay', this.state.data.invoice._id);
        this.props.navigation.navigate('Pay', {
            invoiceID: this.state.data.invoice._id
        });
    }
    onInfoPress() {
        console.log('info');
    }
    calculateLeft(amount, contributions) {
        let amountPaid = 0;
        contributions.forEach(item => {
            amountPaid += item.amount;
        })
        return amount - amountPaid;
    }
    amountPaid(contributions) {
        let amountPaid = 0;
        console.log(contributions);
        contributions.forEach(item => {
            amountPaid += item.amount;
        })
        console.log(amountPaid);
        return amountPaid;
    }
    renderbody(data) {
        return (
            <View>
                {/*<Text>{data.invoice.total}</Text>*/}
                <View style={[styles.row, styles.padding]}>
                    <Text style={styles.text}>$</Text>
                    <Text style={styles.text}>{data.invoice.total}</Text>
                </View>
                <View style={[styles.row]}>
                    <Text style={styles.text2}>Total Paid: $</Text>
                    <Text style={styles.text2}>{this.amountPaid(data.contributions)}</Text>
                </View>
                <View style={[styles.row]}>
                    <Text style={styles.text2}>Total Left: $</Text>
                    <Text style={styles.text2}>{this.calculateLeft(data.invoice.total, data.contributions)}</Text>
                </View>
                {this.renderContributions(data.contributions)}
            </View>
        )
    }
    renderContributions(contributions) {
        if (contributions) {
            let invert = true;
            return contributions.map(item => {
                invert = !invert;
                return (
                    <FeedItem
                        key={Math.random() + 'contrib_'}
                        data={item}
                        invert={invert} />
                )
            })
        }
    }
    render() {
        let data = this.state.data;
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    {data && data.invoice ?
                        this.renderbody(data) : null}
                </View>
                <View style={styles.bottomBar}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onInfoPress}>
                        <Text style={styles.textB}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPayPress}>
                        <Text style={styles.textB}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03A9F4',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    padding: {
        paddingBottom: 40,
        paddingTop: 30
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 150
    },
    textB: {
        fontSize: 20,
        paddingTop: 20,
        color: '#03A9F4'
    },
    text: {
        textAlign: 'center',
        fontSize: 90,
        color: 'white',
        paddingBottom: 10
    },
    text2: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        paddingBottom: 5
    },
    button: {
        backgroundColor: 'white',
        height: 60,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})
export default Invoice;