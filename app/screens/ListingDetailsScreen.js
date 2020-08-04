import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import colors from "../config/color";

function ListingDetailsScreen({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title="Mosh Hamdedani"
          subTitle="5 Listing"
          ImageComponent={<Icon name="email" />}
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
  },
  title: {
    marginBottom: 5,
    fontWeight: "500",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 30,
  },
});
export default ListingDetailsScreen;
