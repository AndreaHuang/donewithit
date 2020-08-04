import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import colors from "../config/color";
import Screen from "../components/Screen";
import {
  AppFormField,
  AppSubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/forms";
import CategeoryPickItem from "../components/CategeoryPickItem";

const validationSchema = Yup.object({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Desciption"),
});
const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "apps",
    backgroundColor: colors.primary,
  },
  { label: "Books", value: 2, icon: "email" },
  { label: "Clothes", value: 3, icon: "account" },
  { label: "Clothes", value: 3, icon: "account" },
  { label: "Clothes", value: 3, icon: "account" },
  { label: "Clothes", value: 3, icon: "account" },
  { label: "Music and Lesuire", value: 3, icon: "account" },
  { label: "Clothes", value: 3, icon: "account" },
  { label: "Music and Lesuire", value: 3, icon: "account" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={true}
          maxLength={255}
          name="title"
          placeholder="Title"
        />

        <AppFormField
          autoCorrect={false}
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfLines={3}
          PickerItemComponent={CategeoryPickItem}
          placeholder="Category"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <AppSubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
export default ListingEditScreen;
