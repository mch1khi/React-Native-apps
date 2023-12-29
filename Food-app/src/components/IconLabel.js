import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const IconLabel = ({ name, label, color }) => {
    return (
        <View style={styles.container}>
            <Icon
                name={name}
                size={13}
                color={color}
                style={styles.iconStyle}
            />
            <Text style={styles.labelStye}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    labelStye: {
        fontSize: 12,
    },
    container: {
        flexDirection: 'row',
        marginRight: 10,
    },
    iconStyle: {
        marginRight: 2
    },
});

export default IconLabel;