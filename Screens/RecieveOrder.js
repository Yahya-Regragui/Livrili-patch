import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const cardWidth = screenWidth - screenWidth/5;
const cardHeight = screenHeight - 650

class RecieveOrder extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.User}>
                        <Text>UserName</Text>
                    </View>
                    <View style={styles.Location}> 
                        <Text>Location</Text>
                    </View>
                    <View style={styles.Size}>
                        <Text>Size</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    card:{
        width : cardWidth,
        height: cardHeight,
        backgroundColor:'red',
        borderWidth:1,
        flexDirection:'row'
    },
    User:{
        width:100,
        height:cardHeight,
        backgroundColor:'grey',
        borderRightWidth:1
    },
    Location:{
        width:150,
        height:cardHeight,
        backgroundColor:'grey',
        borderRightWidth:1
    },
    Size:{
        width:cardWidth - 250,
        height:cardHeight,
        backgroundColor:'grey',
        borderRightWidth:1
    }
});

export default RecieveOrder;
