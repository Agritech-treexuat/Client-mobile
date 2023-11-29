// components/FarmListScreen.js
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SearchBar, Card, Image, Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const FarmListScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  // Fake data for farms
  const farms = [
    {
      id: 1,
      name: 'Farm A',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffarm.html&psig=AOvVaw1By_ig6QVs__5TTBK4dKdz&ust=1700752839810000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCr95j014IDFQAAAAAdAAAAABAJ',
      address: '123 Main St, City',
      distance: '5 km',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Farm B',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffarm.html&psig=AOvVaw1By_ig6QVs__5TTBK4dKdz&ust=1700752839810000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCr95j014IDFQAAAAAdAAAAABAJ',
      address: '1023 Main St, City',
      distance: '6 km',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      name: 'Farm A1',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffarm.html&psig=AOvVaw1By_ig6QVs__5TTBK4dKdz&ust=1700752839810000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCr95j014IDFQAAAAAdAAAAABAJ',
      address: '12333 Main St, City',
      distance: '7 km',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      name: 'Farm A2',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffarm.html&psig=AOvVaw1By_ig6QVs__5TTBK4dKdz&ust=1700752839810000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCr95j014IDFQAAAAAdAAAAABAJ',
      address: '123455 Main St, City',
      distance: '5 km',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      name: 'Farm A3',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffarm.html&psig=AOvVaw1By_ig6QVs__5TTBK4dKdz&ust=1700752839810000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCr95j014IDFQAAAAAdAAAAABAJ',
      address: '1235 Main St, City',
      distance: '1 km',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      name: 'Farm A4',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffarm.html&psig=AOvVaw1By_ig6QVs__5TTBK4dKdz&ust=1700752839810000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCr95j014IDFQAAAAAdAAAAABAJ',
      address: '1234 Main St, City',
      distance: '2 km',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
    // Add more farms as needed
  ];

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Search by name"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <ScrollView>
        {farms
          .filter((farm) => farm.name.toLowerCase().includes(searchText.toLowerCase()))
          .map((farm) => (
            <Card key={farm.id} containerStyle={styles.cardContainer}>
              <Image source={{uri: farm.image}} style={styles.cardImage} />
              <Text h4 style={styles.cardTitle}>
                {farm.name}
              </Text>
              <Text style={styles.cardSubtitle}>{farm.address}</Text>
              <Text style={styles.cardSubtitle}>{farm.distance}</Text>
              <Text style={styles.cardDescription}>{farm.description}</Text>
              <Button
                title="View Details"
                onPress={() => navigation.navigate('FarmDetailScreen', { farmId: farm.id })}
              />
            </Card>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    marginTop: 10,
    marginBottom: 5,
  },
  cardSubtitle: {
    color: 'gray',
  },
  cardDescription: {
    marginVertical: 10,
  },
});

export default FarmListScreen;
