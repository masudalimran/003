import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem({ index }) {
  return (
    <View>
      <RestaurantImage index={index} />
      <Text> {`item ${index + 1}`}</Text>
    </View>
  );
}

const RestaurantImage = ({ index }) => (
  <>
    <Image
      source={{
        uri: `https://source.unsplash.com/random/?restaurant/${index}`,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
