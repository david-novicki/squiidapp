import React from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BackButton = ({ color, onPress }) => {
    let bColor = color || '#03A9F4';
    return (
        <TouchableOpacity onPress={onPress} >
            <Icon name='arrow-back' color={bColor} size={25} />
        </TouchableOpacity >
    )
}
export default BackButton;