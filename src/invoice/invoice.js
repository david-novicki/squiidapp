import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';    

class Invoice extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            token: null
        }
    }
    render() {
        return (
            <View>
                <Text>Invoice Page {this.props.navigation.state.params.token}</Text>
            </View>
        )
    }
}
export default Invoice;