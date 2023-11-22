import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FarmDetailScreen = ({ route }) => {
  const { farmId } = route.params;

  // Fake data for farm details
  const farmDetails = {
    id: farmId,
    name: 'Farm A',
    address: '123 Main St, City',
    images: [require('../assets/farm1.jpg'), require('../assets/farm1.jpg'), require('../assets/farm1.jpg'), require('../assets/farm1.jpg'), require('../assets/farm1.jpg'), require('../assets/farm1.jpg'), require('../assets/farm1.jpg')],
    crops: [
      { id: 1, name: 'Carrot', image: require('../assets/farm1.jpg') },
      { id: 2, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 3, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 4, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 5, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 6, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 7, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 8, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 9, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 10, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      { id: 11, name: 'Lettuce', image: require('../assets/farm1.jpg') },
      // Add more crops as needed
    ],
    projects: [
      { id: 1, startTime: '2023-01-01', customerAddress: '456 Side St, Another City', kgDelivered: 50, crops: ['Carrot', 'Lettuce'] },
      { id: 2, startTime: '2023-01-01', customerAddress: '456 Side St, Another City', kgDelivered: 50, crops: ['Carrot', 'Lettuce'] },
      { id: 3, startTime: '2023-01-01', customerAddress: '456 Side St, Another City', kgDelivered: 50, crops: ['Carrot', 'Lettuce'] },
      { id: 4, startTime: '2023-01-01', customerAddress: '456 Side St, Another City', kgDelivered: 50, crops: ['Carrot', 'Lettuce'] },
      // Add more projects as needed
    ],
    nppProjects: [
      { id: 1, startTime: '2023-01-01', nppName: 'Supplier X', kgDelivered: 100, cropName: 'Carrot' },
      { id: 2, startTime: '2023-01-01', nppName: 'Supplier X', kgDelivered: 100, cropName: 'Carrot' },
      { id: 3, startTime: '2023-01-01', nppName: 'Supplier X', kgDelivered: 100, cropName: 'Carrot' },
      // Add more NPP projects as needed
    ],
    services: [
      { id: 1, area: '10m²', price: '$100', weeklyDeliveries: 2, maxNutrient: 50, maxLeafy: 30, maxRoot: 20, maxHerb: 10 },
      { id: 2, area: '20m²', price: '$100', weeklyDeliveries: 2, maxNutrient: 50, maxLeafy: 30, maxRoot: 20, maxHerb: 10 },
      { id: 3, area: '30m²', price: '$100', weeklyDeliveries: 2, maxNutrient: 50, maxLeafy: 30, maxRoot: 20, maxHerb: 10 },
      { id: 4, area: '40m²', price: '$100', weeklyDeliveries: 2, maxNutrient: 50, maxLeafy: 30, maxRoot: 20, maxHerb: 10 },
      // Add more services as needed
    ],
  };

  const renderCropGrid = (crops) => {
    return crops.map((crop) => (
      <View key={crop.id} style={styles.cropItem}>
        <Image source={crop.image} style={styles.cropImage} />
        <Text>{crop.name}</Text>
      </View>
    ));
  };

  const renderProjectCards = (projects) => {
    return projects.map((project) => (
      <Card key={project.id} containerStyle={styles.projectCard}>
        <Text>{`Start Time: ${project.startTime}`}</Text>
        <Text>{`Customer Address: ${project.customerAddress}`}</Text>
        <Text>{`Kg Delivered: ${project.kgDelivered}`}</Text>
        <Text>{`Crops: ${project.crops.join(', ')}`}</Text>
        <Button title="View Details" onPress={() => console.log('View Project Details')} />
      </Card>
    ));
  };

  const renderNppProjectCards = (nppProjects) => {
    return nppProjects.map((nppProject) => (
      <Card key={nppProject.id} containerStyle={styles.projectCard}>
        <Text>{`Start Time: ${nppProject.startTime}`}</Text>
        <Text>{`NPP Name: ${nppProject.nppName}`}</Text>
        <Text>{`Kg Delivered: ${nppProject.kgDelivered}`}</Text>
        <Text>{`Crop Name: ${nppProject.cropName}`}</Text>
        <Button title="View Details" onPress={() => console.log('View NPP Project Details')} />
      </Card>
    ));
  };

  const renderServiceCards = (services) => {
    return services.map((service) => (
      <Card key={service.id} containerStyle={styles.serviceCard}>
        <Text>{`Area: ${service.area}`}</Text>
        <Text>{`Price: ${service.price}`}</Text>
        <Text>{`Weekly Deliveries: ${service.weeklyDeliveries}`}</Text>
        <Text>{`Max Nutrient: ${service.maxNutrient}`}</Text>
        <Text>{`Max Leafy: ${service.maxLeafy}`}</Text>
        <Text>{`Max Root: ${service.maxRoot}`}</Text>
        <Text>{`Max Herb: ${service.maxHerb}`}</Text>
        <Button title="Register" onPress={() => console.log('Register for Service')} />
      </Card>
    ));
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'green' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'black' }}
    />
  );

  const OverviewTab = () => (
    <ScrollView style={styles.tabContent}>
      {/* Crops */}
      <Text h4 style={styles.tabTitle}>Các loại rau củ</Text>
      <View style={styles.cropGrid}>{renderCropGrid(farmDetails.crops)}</View>
      <Button title="Xem thêm" onPress={() => console.log('View More Crops')} />

      {/* Projects for Customers */}
      <Text h4 style={styles.tabTitle}>Dự án trồng rau hộ</Text>
      {renderProjectCards(farmDetails.projects)}
      <Button title="Xem thêm" onPress={() => console.log('View More Projects')} />

      {/* Projects for NPPs */}
      <Text h4 style={styles.tabTitle}>Dự án trồng rau cho NPP</Text>
      {renderNppProjectCards(farmDetails.nppProjects)}
      <Button title="Xem thêm" onPress={() => console.log('View More NPP Projects')} />
    </ScrollView>
  );

  const ServicesTab = () => (
    <ScrollView style={styles.tabContent}>
      {/* Farm Services */}
      <Text h4 style={styles.tabTitle}>Các dịch vụ</Text>
      {renderServiceCards(farmDetails.services)}
    </ScrollView>
  );

  const initialLayout = { width: 100 };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'overview', title: 'Thông tin tổng quan' },
    { key: 'services', title: 'Dịch vụ' },
  ]);

  const renderScene = SceneMap({
    overview: OverviewTab,
    services: ServicesTab,
  });

  return (
    <View style={styles.container}>
      {/* Farm Information Section */}
      <View style={styles.headerContainer}>
        {/* Farm Name and Address */}
        <View style={styles.headerText}>
          <Text h4>{farmDetails.name}</Text>
          <Text>{farmDetails.address}</Text>
        </View>
        {/* Farm Images */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.headerImages}>
          {farmDetails.images.map((image, index) => (
            <Image key={index} source={image} style={styles.headerImage} />
          ))}
        </ScrollView>
      </View>
      {/* TabView Section */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerImages: {
    flexDirection: 'row',
    marginTop: 10,
  },
  headerImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  headerText: {
    marginTop: 10,
  },
  tabContent: {
    padding: 16,
  },
  tabTitle: {
    marginBottom: 10,
  },
  cropGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cropItem: {
    width: '30%',
    marginBottom: 10,
    alignItems: 'center',
  },
  cropImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  projectCard: {
    marginBottom: 10,
  },
  serviceCard: {
    marginBottom: 10,
  },
});

export default FarmDetailScreen;
