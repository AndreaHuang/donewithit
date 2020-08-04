import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormField, AppSubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object({
  name: Yup.string()
    .required()
    .min(4)
    .matches("^[A-Za-z0-9_-]*$")
    .label("Name"), //match("^[A-Za-z0-9_-]$")
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", name: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="account"
          name="name"
          placeholder="Name"
          autoFocus
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <AppSubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
export default RegisterScreen;
