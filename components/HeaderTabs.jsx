import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  //   Functions
  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  return (
    <View style={styles.buttonContainer}>
      <HeaderButton
        text="Delivery"
        active={activeTab === 0}
        func={handleActiveTab}
        id={0}
      />
      <HeaderButton
        text="Pick Up"
        active={activeTab === 1}
        func={handleActiveTab}
        id={1}
      />
    </View>
  );
}

const HeaderButton = ({ text, active, func, id }) => (
  <TouchableOpacity
    style={[styles.button, active && styles.btnActive]}
    onPress={() => func(id)}
  >
    <Text style={[styles.buttonText, active && styles.btnActiveText]}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginHorizontal: 1,
    marginVertical: 5,
  },
  btnActive: {
    backgroundColor: "black",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
  btnActiveText: {
    color: "white",
  },
});
