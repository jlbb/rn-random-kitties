import { findNodeHandle, Platform } from "react-native";

type Ref<T> = { current: T };

export const scrollToRef: any = (fromRef: Ref<any>, toRef: Ref<any>, n) => {
  const offset = -10;

  if (Platform.OS === "ios" || Platform.OS === "android") {
    toRef.current.measureLayout(
      findNodeHandle(fromRef.current),
      (_: any, oy: number) => {
        fromRef.current.scrollTo({ y: oy + offset });
      }
    );
  } else {
    toRef.current.measure((_: any, oy: number) => {
      fromRef.current.scrollTo({ y: oy + offset });
    });
  }
};

export const randomHexColor = (): string => {
  return "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });
};
