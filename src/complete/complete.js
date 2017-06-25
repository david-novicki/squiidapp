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

class Complete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: props.navigation.state.params.amount
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
                        <Image source={require('../public/images/visa.png')}/>
                    </View>
                    {/*<Hr lineColor='#03A9F4' text='OR' textColor='#03A9F4' />*/}
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