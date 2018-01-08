import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const FeedItem = ({ data, invert }) => {
    let side = (invert ? styles.right : styles.right);
    return (
        <View style={[styles.container, side]}>
            <Image style={{width: 25, height: 25, borderRadius: 13}} source={{ uri: data.thumbnail }} />
            <Text style={styles.text}>{` ${data.username} paid $${data.amount} `}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
		paddingTop: 15,
		width: '40%'
    },
    right: {
		justifyContent: 'center',
		alignItems: 'center',
		//flexDirection: 'row-reverse'
    },
    left: {
		justifyContent: 'flex-start',
		alignItems: 'center'
    },
    text: {
        paddingLeft:0,
        color: 'white'
    }
})
export default FeedItem;