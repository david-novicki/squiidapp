import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Hr from 'react-native-hr';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.cameraPress = this.cameraPress.bind(this);
        this.profilePress = this.profilePress.bind(this);
        this.recentPress = this.recentPress.bind(this);
    }
    onChangeText(value) {
        console.log('changed', value)
    }
    cameraPress() {
        this.props.navigation.navigate('Reader');
    }
    profilePress() {
        this.props.navigation.navigate('Profile');
    }
    recentPress() {
        this.props.navigation.navigate('Recent');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <TouchableHighlight onPress={this.profilePress}>
                        <Icon name="account-circle" size={30} color="white"></Icon>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.recentPress}>
                        <Icon name="access-time" size={30} color="white"></Icon>
                    </TouchableHighlight>
                </View>
                <View style={styles.body}>
                    <TouchableHighlight onPress={this.cameraPress}>
                        <Icon name="camera-alt" size={60} color="white"></Icon>
                    </TouchableHighlight>
                    <Hr lineColor='white' text='OR' textColor='white' />
                    <TextInput onChangeText={this.onChangeText}
                        style={styles.input}
                        value={this.state.code}
                        autoCapitalize='characters'
                        placeholder='#'
                        placeholderTextColor='white'
                        clearTextOnFocus={true} />
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
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 40
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 150
    },
    input: {
        height: 60,
        color: 'white',
        textAlign: 'center',
        fontSize: 50
    }
})
export default Home;