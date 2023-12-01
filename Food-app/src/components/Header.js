import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const Header = (props) => {
    return (<View style={styles.container}>
        <Text style={styles.labelStyle}> {props.label}</Text>
    </View>)
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 90,
        backgroundColor: '#a29bfe',
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 20,
    },
    labelStyle: {
        fontSize: 24,
        fontWeight: "700",
    }
})

export default Header;