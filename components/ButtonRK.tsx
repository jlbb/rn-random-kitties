import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { debounce } from "lodash";
import { colors } from "../config/contants";

interface ButtonRKProps {
  title: string;
  type?: ButtonRKTypes;
  onButtonPress: () => any;
}

const ButtonRK = ({
  title,
  type = DEFAULT,
  onButtonPress
}: ButtonRKProps): JSX.Element => {
  const buttonStyle: any =
    type === PRIMARY
      ? StyleSheet.flatten([styles.primaryButton])
      : StyleSheet.flatten([styles.defaultButton]);

  const _onButtonPress: any = debounce(() => {
    onButtonPress();
  }, 300);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.button,
          { backgroundColor: buttonStyle.backgroundColor }
        ]}
        onPress={_onButtonPress}
      >
        <Text
          style={[
            styles.content,
            {
              color: buttonStyle.color,
              fontSize: buttonStyle.fontSize
            }
          ]}
        >
          {title}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    minHeight: 50,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_BUTTON_UNDERLAY_DEFAULT
  },
  content: {
    fontSize: 18,
    color: colors.DEFAULT_BUTTON_TEXT_DEFAULT,
    textTransform: "uppercase"
  },
  defaultButton: {
    backgroundColor: colors.DEFAULT_BUTTON_UNDERLAY_DEFAULT,
    color: colors.DEFAULT_BUTTON_TEXT_DEFAULT,
    fontSize: 16
  },
  primaryButton: {
    backgroundColor: colors.PRIMARY_BUTTON_UNDERLAY_DEFAULT,
    color: colors.DEFAULT_BUTTON_TEXT_DEFAULT,
    fontSize: 16
  }
});

export const DEFAULT = "DEFAULT";
export const PRIMARY = "PRIMARY";

export type ButtonRKTypes = typeof DEFAULT | typeof PRIMARY;

export default ButtonRK;
