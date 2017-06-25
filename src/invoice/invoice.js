import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import API from './api/data';
import FeedItem from './components/feed-item/feed-item';

class Invoice extends Component {
    constructor(props) {
        super(props);
        let navState = props.navigation.state;
        this.state = {
            token: '594ee5de15a7233aec88a17c',//navState.params.token || null,
            data: null
        }
        this.onPayPress = this.onPayPress.bind(this);
        this.onInfoPress = this.onInfoPress.bind(this);
    }
    async componentWillMount() {
        try {
            console.log('token', this.state.token);
            let response = await API.getInvoice(this.state.token);//594ee5de15a7233aec88a17c
            let resJson = await response.json();
            console.log(resJson);
        } catch (error) {
            console.log(error);
        }
    }
    onPayPress() {
        console.log('pay');
        this.props.navigation.navigate('Pay');
    }
    onInfoPress() {
        console.log('info');
    }
    renderContributions(contributions) {
        if (contributions)
            return contributions.map(item => {
                return (
                    <FeedItem data={item} />
                )
            })
    }
    render() {
        let invoice = (this.state.data ? this.state.data.invoice : {});
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    {/*<Text>Invoice Page {this.state.data ? this.state.data : null}</Text>*/}
                    <Text>{invoice.total}</Text>
                    {this.renderContributions(invoice.contributions)}
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