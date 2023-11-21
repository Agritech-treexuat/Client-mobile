import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text className="text-red-500 my-10">HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("ItemScreen")}
      >
          <Text className="text-black text-[36px] font-semibold">Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
