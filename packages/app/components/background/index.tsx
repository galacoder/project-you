import { Image, StyleSheet, ImageSourcePropType } from "react-native";

type BackgroundType = {
  imgSrc?: ImageSourcePropType;
};


const Background = ({ imgSrc }: BackgroundType) => {

  const defaultImg = '../../assets/background01.png'

  return (
    <Image
      style={styles.youBackgroundIcon}
      resizeMode="cover"
      source={imgSrc || require(defaultImg)}
    />
  );
};

const styles = StyleSheet.create({
  youBackgroundIcon: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    // maxWidth: "100%",
    overflow: "hidden",
    // height: "100%",
    resizeMode: "cover"
  },
});

export default Background;

