import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text, Button, Card } from 'react-native-elements';

const RegisterScreen = ({ route }) => {
  const { services } = route.params; // Assume services is an array of service objects
  const maxCount = {
    nutrient: 5,
    leafy: 3,
    spice: 2,
    root: 1
  }

  // Fake const data for crops
  const cropData = {
    nutrient: [
      { id: 1, name: 'Rau Dinh Dưỡng 1', image: require('../assets/farm1.jpg'), type: 'nutrient' },
      { id: 2, name: 'Rau Dinh Dưỡng 2', image: require('../assets/farm1.jpg'), type: 'nutrient' },
      { id: 3, name: 'Rau Dinh Dưỡng 3', image: require('../assets/farm1.jpg'), type: 'nutrient' },
      { id: 4, name: 'Rau Dinh Dưỡng 4', image: require('../assets/farm1.jpg'), type: 'nutrient' },
      { id: 5, name: 'Rau Dinh Dưỡng 5', image: require('../assets/farm1.jpg'), type: 'nutrient' },
      { id: 15, name: 'Rau Dinh Dưỡng 6', image: require('../assets/farm1.jpg'), type: 'nutrient' },
    ],
    leafy: [
      { id: 6, name: 'Rau Ăn Lá 1', image: require('../assets/farm1.jpg'), type: 'leafy' },
      { id: 7, name: 'Rau Ăn Lá 2', image: require('../assets/farm1.jpg'), type: 'leafy' },
      { id: 8, name: 'Rau Ăn Lá 3', image: require('../assets/farm1.jpg'), type: 'leafy' },
      { id: 18, name: 'Rau Ăn Lá 3', image: require('../assets/farm1.jpg'), type: 'leafy' },
    ],
    spice: [
      { id: 9, name: 'Rau Gia Vị 1', image: require('../assets/farm1.jpg'), type: 'spice' },
      { id: 10, name: 'Rau Gia Vị 2', image: require('../assets/farm1.jpg'), type: 'spice' },
      { id: 11, name: 'Rau Gia Vị 3', image: require('../assets/farm1.jpg'), type: 'spice' },
      { id: 12, name: 'Rau Gia Vị 4', image: require('../assets/farm1.jpg'), type: 'spice' },
    ],
    root: [
      { id: 13, name: 'Củ Quả 1', image: require('../assets/farm1.jpg'), type: 'root' },
      { id: 14, name: 'Củ Quả 2', image: require('../assets/farm1.jpg'), type: 'root' },
    ],
  };

  // State to track selected crops
  const [selectedCrops, setSelectedCrops] = useState([]);
  // console.log("selected: ", selectedCrops)

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState('nutrient');

  // Function to handle crop selection
  const handleCropSelection = (crop) => {
    // Check if the selected crop already exists in the list
    const existingCrop = selectedCrops.find((selectedCrop) => selectedCrop.id === crop.id);

    if (existingCrop) {
      // If the crop already exists, remove it from the list
      const updatedCrops = selectedCrops.filter((selectedCrop) => selectedCrop.id !== crop.id);
      setSelectedCrops(updatedCrops);
    } else {
      // If the crop does not exist, add it to the list
      if(selectedCrops.filter((selectedCrop) => selectedCrop.type === crop.type).length == maxCount[crop.type])
        alert("Da chon toi da roi")
      else
        setSelectedCrops([...selectedCrops, crop]);
    }
  };

  // Function to render category buttons
  const renderCategoryButtons = () => {
    const categories = Object.keys(cropData);
    return (
      <View style={styles.categoryButtonsContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, category === selectedCategory && styles.selectedCategoryButton]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
            <Text style={styles.categoryInfoText}>
              {`(${selectedCrops.filter((selectedCrop) => selectedCrop.type === category).length} / ${
                maxCount[category]
              })`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Function to render crop cards
  const renderCropCards = () => {
    const crops = cropData[selectedCategory];
    // console.log("Crops: ", crops)
    return (
      <FlatList
        data={crops}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cropCard,
              selectedCrops.find((selectedCrop) => selectedCrop.id === item.id) && styles.selectedCropCard,
            ]}
            onPress={() => handleCropSelection(item)}
          >
            <Image source={item.image} style={styles.cropImage} />
            <Text style={styles.cropName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cropCardsContainer}
      />
    );
  };

  // Function to render selected crops
  const renderSelectedCrops = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectedCropsList}>
        {selectedCrops.map((crop) => (
          <View key={crop.id} style={styles.selectedCropItem}>
            <Image source={crop.image} style={styles.selectedCropImage} />
            <Text style={styles.selectedCropName}>{crop.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  // Function to handle registration
  const handleRegistration = () => {
    console.log('Selected Crops:', selectedCrops);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Service Information Section */}
      <View style={styles.serviceInfoContainer}>
        <Text h4 style={styles.serviceInfoTitle}>
          Thông tin dịch vụ
        </Text>
        <Card key={services.id} containerStyle={styles.serviceInfoCard}>
          <Text>{`Diện tích: ${services.area}`}</Text>
          <Text>{`Giá: ${services.price}`}</Text>
          <Text>{`Số lần giao 1 tuần: ${services.weeklyDeliveries}`}</Text>
          <Text>{`Dự kiến giao: ${services.expectedDelivery}`}</Text>
        </Card>
      </View>
      {/* Crop Selection Section */}
      <View style={styles.cropSelectionContainer}>
        <Text h4 style={styles.cropSelectionTitle}>
          Chọn loại rau
        </Text>
        <View style={styles.selectionContainer}>
          {renderCategoryButtons()}
          {renderCropCards()}
        </View>
      </View>
      {/* Selected Crops Section */}
      <View style={styles.selectedCropsContainer}>
        <Text h4 style={styles.selectedCropsTitle}>
          Rau đã chọn
        </Text>
        {renderSelectedCrops()}
      </View>
      {/* Registration Button */}
      <Button title="Đăng ký" onPress={handleRegistration} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  serviceInfoContainer: {
    marginBottom: 16,
  },
  serviceInfoTitle: {
    marginBottom: 10,
  },
  serviceInfoCard: {
    marginBottom: 10,
  },
  cropSelectionContainer: {
    marginBottom: 16,
  },
  cropSelectionTitle: {
    marginBottom: 10,
  },
  selectionContainer: {
    flexDirection: 'row',
  },
  categoryButtonsContainer: {
    marginRight: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  selectedCategoryButton: {
    backgroundColor: 'blue',
  },
  categoryButtonText: {
    fontWeight: 'bold',
  },
  categoryInfoText: {
    color: 'darkgray',
  },
  cropCardsContainer: {
    flexGrow: 1,
  },
  cropCard: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginRight: 10,
  },
  selectedCropCard: {
    borderColor: 'blue',
  },
  cropImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  cropName: {
    fontWeight: 'bold',
  },
  selectedCropsContainer: {
    marginBottom: 16,
  },
  selectedCropsTitle: {
    marginBottom: 10,
  },
  selectedCropsList: {
    flexDirection: 'row',
  },
  selectedCropItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  selectedCropImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 5,
  },
  selectedCropName: {
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
