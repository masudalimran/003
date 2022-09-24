import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantItem from "../restaurantItem/RestaurantItem";

export default function HomeContent({ activeTab }) {
  // use State
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   activeTab === 0
  //     ? setContent("Delivery Contents")
  //     : setContent("Pick Up Contents");
  // }, [activeTab]);

  return (
    <View>
      {activeTab === 0 &&
        [...Array(15)].map((x, i) => <RestaurantItem key={i} index={i} />)}
    </View>
  );
}
