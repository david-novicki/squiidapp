import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Hr from 'react-native-hr';

const NumberPad = ({ value, onAddValue }) => {
    const buildItem = (number) => {
        return (
            <TouchableOpacity onPress={() => onAddValue(number)}>
                <View style={styles.button}>
                    <Text style={styles.text}>{number}</Text>
                    <Hr lineColor='white' />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {buildItem('1')}
                {buildItem('2')}
                {buildItem('3')}
            </View>
            <View style={styles.row}>
                {buildItem('4')}
                {buildItem('5')}
                {buildItem('6')}
            </View>
            <View style={styles.row}>
                {buildItem('7')}
                {buildItem('8')}
                {buildItem('9')}
            </View>
            <View style={styles.row}>
                {buildItem('.')}
                {buildItem('0')}
                {buildItem('<')}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        height: 80,
        width: 100
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        paddingBottom: 10
    }
})
export default NumberPad;