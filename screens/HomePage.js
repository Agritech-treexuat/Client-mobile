import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  // Fake data
  const userData = {
    username: 'John Doe',
    hasGarden: true,
  };

  const farms = [
    { id: 1, name: 'Farm 1' },
    { id: 2, name: 'Farm 2' },
    // Add more farms as needed
  ];

  const purchaseHistory = [
    { id: 1, itemName: 'Carrot', date: '2023-01-01' },
    { id: 2, itemName: 'Lettuce', date: '2023-02-01' },
    // Add more purchase history items as needed
  ];

  const harvestHistory = [
    { id: 1, itemName: 'Tomato', date: '2023-03-01' },
    { id: 2, itemName: 'Cucumber', date: '2023-04-01' },
    // Add more harvest history items as needed
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'gray' }} className="my-10">
      <View className="p-4">
        {/* Greeting */}
        <Text className="text-4xl mb-3">Hello, {userData.username}!</Text>

        {/* Banner based on garden */}
        {userData.hasGarden ? (
          <Button
            mode="contained"
            onPress={() => console.log('Go to Manage Field')}
            className="mb-3"
          >
            Hãy đến xem mảnh vườn của bạn nào
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={() => console.log('Go to Plant Request')}
            className="mb-3"
          >
            Cùng khám phá chức năng trồng rau theo yêu cầu
          </Button>
        )}

        {/* Farms */}
        <Title className="mb-3">Farms</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-3">
          {farms.map((farm) => (
            <Card key={farm.id} className="mr-3">
              <Card.Content>
                <Title>{farm.name}</Title>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => console.log('View Farm')}>Xem thêm</Button>
              </Card.Actions>
            </Card>
          ))}
        </ScrollView>
        <Button onPress={() => console.log('View More Farm')}>
          Xem thêm farm
        </Button>

        {/* Purchase History */}
        <Title className="mb-2">Lịch sử mua rau</Title>
        {purchaseHistory.map((item) => (
          <Card key={item.id} className="mb-2">
            <Card.Content>
              <Paragraph>{item.itemName}</Paragraph>
              <Paragraph>Date: {item.date}</Paragraph>
            </Card.Content>
          </Card>
        ))}
        <Button onPress={() => console.log('View More Purchase History')}>
          Xem thêm lịch sử mua rau
        </Button>

        {/* Harvest History */}
        <Title className="mb-2">Lịch sử nhận rau</Title>
        {harvestHistory.map((item) => (
          <Card key={item.id} className="mb-2">
            <Card.Content>
              <Paragraph>{item.itemName}</Paragraph>
              <Paragraph>Date: {item.date}</Paragraph>
            </Card.Content>
          </Card>
        ))}
        <Button onPress={() => console.log('View More Harvest History')}>
          Xem thêm lịch sử nhận rau
        </Button>
      </View>
    </ScrollView>
  );
};

export default HomePage
