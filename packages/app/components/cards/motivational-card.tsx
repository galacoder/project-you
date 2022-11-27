import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

import { AntDesign } from '@expo/vector-icons';

type MotivationalCardType = {
  title?: string;
  descriptionText?: string;
  authorText?: string;
  learnMoreText?: string;
  iconSrc?: ImageSourcePropType
};

const MotivationalCard = ({
  title,
  descriptionText,
  authorText,
  learnMoreText,
  iconSrc,
}: MotivationalCardType) => {

  return (
    <TouchableOpacity
      style={styles.motivationalCardTouchableOpacity}
      activeOpacity={0.2}
      onPress={() => { }}
    >
      <View style={styles.layoutView}>
        <View style={styles.titleIconGroupView}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.iconView}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={iconSrc || require("../../assets/icons/sphere.png")}
            />
          </View>
        </View>
        <Text style={[styles.descriptionText, styles.mt11]}>
          {descriptionText || "Description Text"}
        </Text>
        <View style={[styles.bottomLayoutView, styles.mt11]}>
          <Text style={styles.authorText}>{authorText}</Text>
          {learnMoreText &&
            (
              <>
                <View style={[styles.dividerView, styles.ml11]} />
                <View style={[styles.learnMoreButtonView, styles.ml11]}>
                  <Text style={styles.learnMoreText}>{learnMoreText || "Learn more text"}</Text>
                  <AntDesign name="arrowright" size={16} color="#00cffd" />
                </View>

              </>
            )
          }
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml11: {
    marginLeft: 11,
  },
  mt11: {
    marginTop: 11,
  },
  titleText: {
    position: "relative",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "left",
  },
  icon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconView: {
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  titleIconGroupView: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    lineHeight: 17,
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "left",
  },
  authorText: {
    position: "relative",
    fontSize: 13,
    lineHeight: 17,
    fontFamily: "SF Pro Text",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "left",
  },
  dividerView: {
    position: "relative",
    borderRadius: 3,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    width: 2,
    height: 8,
    flexShrink: 0,
  },
  learnMoreText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 19,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#00cffd",
    textAlign: "left",
  },
  learnMoreIcon: {
    position: "relative",
    width: 10,
    height: 9,
    flexShrink: 0,
  },
  learnMoreButtonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomLayoutView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  layoutView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  motivationalCardTouchableOpacity: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "rgba(235, 235, 245, 0.18)",
    flexDirection: "column",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MotivationalCard
