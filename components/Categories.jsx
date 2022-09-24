import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { categoryList } from "../data/categoryList";

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        marginHorizontal: 10,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryList.map((x, i) => (
          <View style={{ alignItems: "center", marginRight: 30 }} key={i}>
            <Image source={x.image} style={styles.catImg} />
            <Text style={styles.catText}>{x.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  catImg: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  catText: {
    fontSize: 13,
    fontWeight: "900",
  },
});
