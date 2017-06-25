import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import NumberPad from './components/numberpad/numberpad';

class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '0',
            invoiceID: props.navigation.params.invoiceID
        }
        this.onAdd = this.onAdd.bind(this);
        this.onCompletePress = this.onCompletePress.bind(this);
    }
    onAdd(value) {
        let amount = this.state.amount;
        if (amount.length == 1 && amount == '0')
            this.setState({ amount: value });
        else if (value == '<') {
            if (amount.length == 1)
                this.setState({ amount: '0' });
            else
                this.setState({ amount: amount.slice(0, -1) });
        } else
            this.setState({ amount: this.state.amount + value });
    }
    onCompletePress() {
        console.log('complete');
        this.props.navigation.navigate('Complete', {
            amount: this.state.amount,
            invoiceID: this.state.invoiceID
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.row, styles.padding]}>
                    <Text style={styles.text}>$</Text>
                    <Text style={styles.text}>{this.state.amount}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <NumberPad
                        value={this.state.amount}
                        onAddValue={this.onAdd} />
                </View>
                <View style={styles.bottomBar}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onCompletePress}>
                        <Text style={styles.textB}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03A9F4'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    padding: {
        paddingBottom: 40,
        paddingTop: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 90,
        color: 'white',
        paddingBottom: 10
    },
    textB: {
        fontSize: 20,
        paddingTop: 20,
        color: '#03A9F4'
    },
    button: {
        backgroundColor: 'white',
        height: 60,
        color: '#03A9F4'
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})
export default Pay;