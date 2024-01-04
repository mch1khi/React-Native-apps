import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View,  StyleSheet,  Dimensions, Text } from 'react-native';
import listingsData from '@/assets/data/airbnb-listings.json';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  const listing = (listingsData as any[]).find((item) => item.id === id);
 
  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: IMG_HEIGHT,
    width: width,
  }
});

export default DetailsPage;