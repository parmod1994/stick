//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';


import colors from '../../styles/colors';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextComp from '../../Components/TextComp';
import TextInputComp from '../../Components/TextinputComp';



// create a component
const Signup = ({navigation, route}) => {
    const [email, setEmail] = useState('')
    const [name, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)
    const [isLoading, setLoading] = useState(false)

console.log("route params",route.params)

    const isValidData= () =>{
        const error = validator({
            email,
            password
        })
        if(error){
            showError(error)
            return false
        }
        return true
    }
    const onLogin = async() =>{

        const checkValid = isValidData()
        if(checkValid){
            setLoading(true)
            try {
            let fcmToken = await AsyncStorage.getItem('fcm_token');

                const res = await userLogin({
                    email,
                    password,
                    fcmToken
                })
                    console.log("login api res",res)
                    setLoading(false)
                    if(!!res.data && !res?.data?.validOTP){
                        navigation.navigate(navigationStrings.OTP_VERIFICATION,{data: res.data})
                        return;
                    }
            } catch (error) {
                console.log("error in login api",error)
                showError(error?.error)
                setLoading(false)
            }
        }
    }

    return (
        <WrapperContainer>
            <HeaderComp />

            <KeyboardAvoidingView
                style={{ flex: 1, margin: moderateScale(16) }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 0.8 }}>

                            <TextComp style={styles.headerStyle} text="WELCOME BACK" />
                            <TextComp style={styles.descStyle} text="WE ARE HAPPY TO SEE" />


                            <TextInputComp
                                value={email}
                                placeholder="EMAIL"
                                onChangeText={(value) => setEmail(value)}
                            />
                             <TextInputComp
                                value={name}
                                placeholder="First Name"
                                onChangeText={(value) => setFullname(value)}
                            />

                            <TextInputComp
                                value={password}
                                placeholder="PASSWORD"
                                onChangeText={(value) => setPassword(value)}
                                secureTextEntry={secureText}
                                secureText={secureText ? "SHOW" : "HIDE"}
                                onPressSecure={() => setSecureText(!secureText)}
                            />

                            <Text style={{
                                ...styles.descStyle,
                                alignSelf: 'flex-end',
                                color: colors.blueColor,
                                
                            }} >FORGOT PASSWORD?</Text>

                        </View>

                        <View style={{ flex: 0.2, justifyContent: 'flex-end', marginBottom: moderateScaleVertical(16) }} >
                            <ButtonComp
                                text="LOGIN"
                                onPress={onLogin}
                                isLoading={isLoading}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: textScale(24),


    },
    descStyle: {
        fontSize: textScale(12),
        
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(52)
    }
});

//make this component available to the app
export default Signup;
