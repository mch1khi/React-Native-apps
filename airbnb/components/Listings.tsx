import { View, Text, StyleSheet, ListRenderItem, TouchableOpacity, FlatList } from 'react-native';
import { defaultStyles } from '@/constants/styles';
import { Link } from 'expo-router';
import { useEffect, useRef, useState } from 'react';


interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log('reload', listings.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200)
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`@/listing/${item.id}`} > Go there</Link>
  );


  return (
    <View style={defaultStyles.container}>

      <FlatList
        renderItem={renderRow} ref={listRef}
        data={loading ? {} : items}
      />
    </View>
  )
}

export default Listings