import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/color";
import Icon from "../components/Icon";

function AccountScreen() {
  const menuItems = [
    {
      title: "My Listings",
      icon: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    {
      title: "My Messages",
      icon: "email",
      backgroundColor: colors.secondary,
    },
  ];
  return (
    <Screen>
      <ListItem
        title="Mosh Hamedani"
        subTitle="xx@gmail.com"
        image={require("../assets/donewithit.png")}
      />
      <ListItemSeperator style={{ height: 40 }} />
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={ListItemSeperator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={
              <Icon
                iconColor={colors.white}
                name={item.icon}
                size={40}
                backgroundColor={item.backgroundColor}
              />
            }
          />
        )}
      />
      <ListItemSeperator style={{ height: 20 }} />

      <ListItem
        title="Logout"
        IconComponent={
          <Icon
            iconColor={colors.white}
            name="logout"
            size={40}
            backgroundColor="orange"
          />
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  myMessagesContainer: {
    // marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  myListingsContainer: {
    // marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 10,
  },
});

export default AccountScreen;
