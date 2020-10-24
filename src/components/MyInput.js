import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                keyboardType={props.keyboard} 
                placeholder={props.holder} 
                style={styles.text}
            />
        </View>
    )
};

export {MyInput};

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#fff8e1",
        margin:10,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: "#aaa",
        borderWidth: 1
    },
    text : {

    },
});