import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    Animated,
    Button
} from 'react-native';
import { MyButton, MyInput } from './components';


const isPortrait = () => {
    const dim = Dimensions.get('window');
    return dim.height > dim.width;
};

const Login = () => {
    
    let portre = isPortrait();

    // Dimensions.addEventListener('change', ()=>{
    //     portre = isPortrait();
    // })

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={isPortrait() ? styles.portrait : styles.horizon}
                behavior={Platform.OS == "ios" ? 'padding' : 'height'}>
                <View>
                    <Image style={styles.image} source={require('./assets/icon_house.png')} />
                </View>
                <View style={styles.inputContainer}>
                    <MyInput holder="Enter your e-mail.." keyboard="email-address" />
                    <MyInput holder="Password.." keyboard="numeric" />
                    <MyButton text="Login" />
                </View>

            </KeyboardAvoidingView>
        </View>
    )
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d47a1',
    },

    portrait: {
        flex: 1,
        justifyContent: 'space-evenly'
    },

    horizon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center"
    },

    image: {
        width: Dimensions.get('window').width * (isPortrait() ? 0.8 : 0.4),
        height: Dimensions.get('window').height * (isPortrait() ? 0.3 : 0.5),
        resizeMode: 'contain',
        tintColor: "#fff8e1",
        alignSelf: "center",
        margin: 30
    },

    inputContainer: {
        backgroundColor: '#b2ff59',
        margin: 30,
        borderRadius: 10,
        padding: 20,
        borderWidth: 2,
        borderColor: "#222",
    }
})