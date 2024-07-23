import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import imagePath from "../../constants/imagePath";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../styles/responsiveSize";
import colors from "../../styles/colors";
import ButtonComp from "../../Components/ButtonComp";
import navigationStrings from "../../Navigation/navigationStrings";
import TextComp from "../../Components/TextComp";

const InitialAuth = ({ navigation }) => {
  return (
    <WrapperContainer>
      <View
        style={{ padding: moderateScale(100), flex: 1, alignContent: "center" }}
      >
        <Image style={styles.logoStyle} source={imagePath.icLogo} />
      </View>

      <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
        <ButtonComp
          text="LOG IN WITH PHONE NUMBER"
          onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          style={{ marginBottom: 10 }}
        />

        <ButtonComp
          text="LOGIN WITH GOOGLE"
          textStyle={{ color: colors.blackColor }}
          // style={{
          //   backgroundColor:
          //     selectedTheme == "dark" ? colors.whiteColor : colors.gray4,
          // }}
          leftImg={imagePath.icGoogle}
        />
        <ButtonComp
          text="LOGIN WITH FACEBOOK"
          style={{
            marginVertical: moderateScaleVertical(16),
            // backgroundColor:
            //   selectedTheme == "dark" ? colors.whiteColor : colors.gray4,
          }}
          textStyle={{ color: colors.blackColor }}
          leftImg={imagePath.icFacebook}
        />
        <ButtonComp
          text="LOGIN WITH APPLE"
          textStyle={{ color: colors.blackColor }}
          // style={{
          //   backgroundColor:
          //     selectedTheme == "dark" ? colors.whiteColor : colors.gray4,
          // }}
          leftImg={imagePath.icApple}
        />
        <TextComp style={{ textAlign: "center", marginVertical: 16 }}>
          NEW_HERE
          <Text
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
            style={{
              color: colors.blueColor,
            }}
          >
            SIGN UP?
          </Text>
        </TextComp>
      </View>
    </WrapperContainer>
  );
};

export default InitialAuth;

const styles = StyleSheet.create({
  logoStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(150 / 2),
  },
});
