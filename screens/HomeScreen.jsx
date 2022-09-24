import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import HomeContent from "../components/body/HomeContent";
import Categories from "../components/Categories";

export default function HomeScreen() {
  // Use States
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View>
      <View style={{ backgroundColor: "white", padding: 5 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <HomeContent activeTab={activeTab} />
      </ScrollView>
    </View>
  );
}
