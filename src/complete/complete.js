import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import Hr from 'react-native-hr';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from './api/payments';
import BackButton from '../shared/back-button/back-button';
import Iconn from 'react-native-vector-icons/MaterialIcons'

class Complete extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        headerLeft: (<BackButton onPress={() => navigation.goBack()} />),
    })
    constructor(props) {
        super(props);
        this.state = {
            amount: props.navigation.state.params.amount,
            invoiceID: props.navigation.state.params.invoiceID
        }
        this.onCompletePress = this.onCompletePress.bind(this);
    }
    async onCompletePress() {
        try {
            await API.makePayment(this.state);
            this.props.navigation.navigate('Invoice', {
                invoiceID: this.state.invoiceID
            });
        } catch (error) {
            console.log('error');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.item}>
                        <Text style={styles.amount}>${this.state.amount}</Text>
                    </View>
                    <View style={styles.cc}>
                        <Image source={require('../public/images/visa.png')} />
                        <Text>  David's Visa </Text>
                        <Iconn name='keyboard-arrow-down' color='gray' size={25} />
                    </View>
                    <Hr lineColor='#03A9F4' text='OR' textColor='black' />
                    <View style={styles.item}>
                        <Icon.Button name="apple" backgroundColor="black" borderRadius={10}>
                            <Text style={styles.payButton}>Apple Pay</Text>
                        </Icon.Button>
                    </View>
                </View>
                <View style={styles.bottomBar}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onCompletePress}>
                        <Text style={styles.textB}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    payButton: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: 'white',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 5,
        paddingBottom: 5
    },
    cc: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    item: {
        paddingTop: 40
    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    amount: {
        textAlign: 'center',
        fontSize: 70,
        color: '#03A9F4',
        paddingBottom: 10
    },
    header: {

    },
    textB: {
        fontSize: 20,
        paddingTop: 20,
        color: 'white'
    },
    button: {
        backgroundColor: '#03A9F4',
        height: 60,
    },
    bottomBar: {
        // flexDirection: 'row',
        marginTop: 100,
        alignItems: 'center',
        backgroundColor: '#03A9F4',
    }
})
export default Complete;