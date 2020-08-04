import React from "react";
import { Platform } from "react-native";

import colors from "../config/color";

export default {
  colors,
  text: {
    fontSize: 16,
    color: colors.dark,
    fontFamily: Platform === "android" ? "Roboto" : "Avenir",
  },
};
