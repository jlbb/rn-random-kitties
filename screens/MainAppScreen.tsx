import React, { Ref, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  StatusBar,
  RefreshControl
} from "react-native";
import { vh } from "react-native-expo-viewport-units";

import { StickyNavigationBar, ButtonRK, Card } from "../components";
import { useContextBgColor, useCatsApi } from "../store/hooks";
import { scrollToRef } from "../utils/utils";
import { colors } from "../config/contants";

interface MainAppScreenProps {
  nCards?: number;
}

const MainAppScreen = ({ nCards = 3 }: MainAppScreenProps): JSX.Element => {
  const [catItems, fetchRandomCats] = useCatsApi();
  const [bgColor, resetBgColor, setRandomBgColor] = useContextBgColor();
  const scrollViewRef: Ref<ScrollView> = useRef();
  const cardRef: Ref<typeof Card>[] = Array.apply(null, {
    length: nCards
  }).map(() => useRef());
  const [refreshing, setRefreshing] = React.useState(false);

  const cardTitles: ArrayNLength<string, 3> = ["Intro", "About", "Customise!"];

  useEffect(() => {
    fetchRandomCats(nCards);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchRandomCats();

    setTimeout(() => setRefreshing(false), 1500);
  }, [refreshing]);

  const navigateToCard = (cardId): any => {
    cardRef[cardId] && scrollToRef(scrollViewRef, cardRef[cardId], cardId);
  };

  const _renderNavigationBar = (): JSX.Element => (
    <StickyNavigationBar>
      {cardTitles.map((title, key) => (
        <ButtonRK
          key={`key-buttonrk-${key}`}
          title={title}
          onButtonPress={() => navigateToCard(key)}
        />
      ))}
    </StickyNavigationBar>
  );

  const _renderCardList = (catsImg: string[]): JSX.Element[] => {
    const cardText = [
      "Lorem ipsum sin dolor, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    ];

    return catsImg.map((item: string, key: number) => {
      if (key === 2) {
        return (
          <Card
            key={`key-cardlist-${key}`}
            ref={cardRef[key]}
            imageSrc={item}
            title={cardTitles[key]}
            controls
            controlsItem={[
              {
                label: "Reset",
                action: resetBgColor
              },
              {
                label: "Randomise",
                action: setRandomBgColor
              }
            ]}
          />
        );
      }

      return (
        <Card
          key={`key-cardlist-${key}`}
          ref={cardRef[key]}
          imageSrc={item}
          title={cardTitles[key]}
        >
          {cardText[key]}
        </Card>
      );
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        {_renderNavigationBar()}
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              style={styles.refresh}
            />
          }
        >
          {_renderCardList(catItems)}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    width: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.BACKGROUND_COLOR,
    justifyContent: "center",
    paddingTop: 70
  },
  refresh: {},
  scrollView: {
    flex: 1,
    height: vh(90),
    width: "100%"
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: vh(75)
  }
});

export default MainAppScreen;
