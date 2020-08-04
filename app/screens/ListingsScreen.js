import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/color";
function ListingsScreen() {
  const listings = [
    {
      id: "111",
      description: "Red Jacket for Sale",
      price: "$100",
      image: require("../assets/icon.png"),
    },
    {
      id: "222",
      description: "Couch in great condition",
      price: "$1000",
      image: require("../assets/donewithit.png"),
    },
  ];

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            subTitle={item.price}
            title={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default ListingsScreen;
