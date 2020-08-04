import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import colors from "../config/color";
const messages = [
  {
    id:
      "enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password')",
    message:
      "enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password')",
    image: require("../assets/donewithit.png"),
  },
  {
    id: "D2",
    message: "Message 1",
    image: require("../assets/donewithit.png"),
  },
];
function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.id}
            subTitle={item.message}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
