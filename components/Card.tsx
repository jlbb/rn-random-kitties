import { StyleSheet, Text, View, Image } from "react-native";
import React, { Ref } from "react";

import ButtonRK, { PRIMARY, DEFAULT, ButtonRKTypes } from "./ButtonRK";
import { colors } from "../config/contants";

// import catImage from "../public/ey_human.jpg";

interface CardProps {
  children?: any;
  controls?: boolean;
  controlsItem?: {
    label: string;
    action: () => any;
  }[];
  imageSrc?: string;
  title: string;
}

const defaultCardProps: any = {
  children: "Lorem impsum sin dolor",
  controls: false,
  controlsItem: [
    {
      label: "Button1",
      action: () => null
    }
  ],
  title: "Card cat",
  imageSrc: ""
};

const Card = React.forwardRef(
  (
    {
      children: text = defaultCardProps.children,
      controls = defaultCardProps.controls,
      controlsItem = defaultCardProps.controlsItem,
      imageSrc = defaultCardProps.imageSrc,
      title = defaultCardProps.title
    }: CardProps,
    ref: Ref<any>
  ): JSX.Element => {
    const _renderOptionalControls = (): JSX.Element => {
      if (controls) {
        return (
          <View style={styles.controlsContainer}>
            {controlsItem.map((control, key) => {
              const buttonType: ButtonRKTypes = key === 0 ? DEFAULT : PRIMARY;

              return (
                <View
                  key={`key-cardcontrol-${key}`}
                  style={styles.controlButton}
                >
                  <ButtonRK
                    title={control.label}
                    type={buttonType}
                    onButtonPress={control.action}
                  />
                </View>
              );
            })}
          </View>
        );
      }
    };

    return (
      <View style={styles.container} ref={ref}>
        <Image style={styles.image} source={{ uri: imageSrc }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>{text}</Text>
          {_renderOptionalControls()}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: "auto",
    alignItems: "center",
    backgroundColor: colors.WHITE_DEFAULT,
    justifyContent: "center",
    maxWidth: 300,
    width: "90%",
    marginTop: 15,
    marginBottom: 15
  },
  image: {
    flex: 1,
    width: "100%",
    minHeight: 150,
    backgroundColor: "slategray"
  },
  contentContainer: {
    flex: 1,
    padding: 15,
    width: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  controlButton: {
    flex: 1,
    maxWidth: "100%",
    marginRight: 5,
    marginLeft: 5
  }
});

export default Card;
