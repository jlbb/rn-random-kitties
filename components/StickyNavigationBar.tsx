import { StyleSheet, View } from "react-native";
import React from "react";

import { colors } from "../config/contants";

interface StickyNavigationBarProps {
  children: any;
}

const StickyNavigationBar = ({
  children
}: StickyNavigationBarProps): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_DEFAULT,
    flexDirection: "row",
    height: 70,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2
  }
});

export default StickyNavigationBar;
