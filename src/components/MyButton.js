import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';


const isPortrait = () => {
    const dim = Dimensions.get('window');
    return dim.height > dim.width;
};

const MyButton = (props) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
};

export {MyButton};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * (isPortrait() ? 0.5 : 0.4),
        backgroundColor: '#1faa00',
        padding: 10,
        margin: 15,
        borderRadius: 10,
        alignSelf: "center"
    },

    text: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
    }
})