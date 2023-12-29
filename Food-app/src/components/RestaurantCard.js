import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native'
import IconLabel from './IconLabel';


const RestaurantCard = ({ info }) => {
    const { name, categories, deliveryTime, distance, image } = info;

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={image} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.categoryStyle}>{categories}</Text>
                    <View style={styles.IconLabelStyle}>
                        <IconLabel name="hourglass-start" label={deliveryTime} color={iconcolor} />
                        <IconLabel name="map-pin" label={distance} color={iconcolor} />
                    </View>
                </View>
            </View>
        </View>
    );
};



const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const offset = 40;
const iconcolor = '#6c5ce7';


const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 12.5,
        marginBottom: 12.5,
    },
    cardContainer: {

        width: deviceWidth - offset,
        backgroundColor: '#a29bfe',
        height: 200,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    IconLabelStyle: {
        flexDirection: 'row',
        marginTop: 6,
    }
})


export default RestaurantCard;
