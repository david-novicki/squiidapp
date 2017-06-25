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

class Invoice extends Component {
    constructor(props) {
        super(props);
        let navState = props.navigation.state;
        this.state = {
            token: '594ee5de15a7233aec88a17c',//navState.params.token || null,
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
            .then(token => {
                this.socket.emit('join', { userToken: token, invoiceID: this.state.token })
            });
        this.socket.on('connected', this.onConnected)
        this.socket.on('contribution', this.onReceivedContribution);
        this.socket.on('complete', this.onComplete);
        this.socket.on('err', this.onError);
    }
    // async componentWillMount() {
    //     try {
    //         let response = await API.getInvoice(this.state.token);//594ee5de15a7233aec88a17c
    //         let resJson = await response.json();
    //         //console.log('resjson', resJson);
    //         this.setState({ data: resJson });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    onConnected(data) {
        console.log('connected', data);
        this.setState({ data: data });
        // console.log('contribute');
        // this.socket.emit('contribute', 30);
    }
    onError(message) {
        console.log('err', message);
    }
    onReceivedContribution(data) {
        console.log('on contributions',contributions);
        this.setState({data: {...this.state.data, contributions: data.contributions}});
    }
    onComplete() {
        console.log('oncomplete');
    }
    onPayPress() {
        console.log('pay');
        this.props.navigation.navigate('Pay');
    }
    onInfoPress() {
        console.log('info');
    }
    renderbody(data) {
        return (
            <View>
                <Text>{data.invoice.total}</Text>
                {this.renderContributions(data.contributions)}
            </View>
        )
    }
    renderContributions(contributions) {
        if (contributions)
            return contributions.map(item => {
                return (
                    <FeedItem
                        key={Math.random() + 'contrib_'}
                        data={item} />
                )
            })
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
                        <Text style={styles.text}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPayPress}>
                        <Text style={styles.text}>Pay</Text>
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
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 150
    },
    text: {
        fontSize: 20,
        paddingTop: 20,
        color: '#03A9F4'
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