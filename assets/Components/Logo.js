import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View>
                <Image source={require('C:/Users/yahya/Desktop/Livrili-Enterprise/Lifirili-patch/Livrili-patch/assets/Images/logo.png')} style={styles.container} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:250,
        height:200,
        resizeMode:'contain',
        
        
    },
});

export default Logo;
