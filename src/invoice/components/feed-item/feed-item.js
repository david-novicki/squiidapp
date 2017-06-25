import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const FeedItem = ({data}) => {
        return (
            <View style={styles.container}>
                <Image source={{uri: data.thumbnail}}/>
                <Text>{data.amount}</Text>
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default FeedItem;