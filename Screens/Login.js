import React, { Component } from 'react';
import {StyleSheet,Text, View,TextInput,TouchableOpacity, Image,StatusBar} from 'react-native';
import Logo from '../assets/Components/Logo'


class Login extends Component {
    state ={
        email:'',
        password:''
    }   
    render(){
        
        return( 
            <View style={styles.container}>
                <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />
                <View >
                   <Logo/>
                </View>
                <View style={{marginTop:50,}}>
                    <TextInput style={styles.LoginText}
                               onChangeText={this.email}
                               placeholder = "Email" 
                               placeholderTextColor = "#525252"
                               autoCapitalize = "none"
                               underlineColorAndroid = "transparent"/>

                    
                    <TextInput style={styles.LoginText}
                               onChangeText={this.password}
                               placeholder = "Password" 
                               placeholderTextColor = "#525252"
                               autoCapitalize = "none"
                               underlineColorAndroid = "transparent"
                               secureTextEntry/>


                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Size')}>
                        <Text style={styles.textbutt}>Login</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:50}}>
                        <Text style={{color:'white',fontWeight:'normal'}}>Don't have an account?</Text>
                        <TouchableOpacity> 
                            <Text style={{color:'white',fontWeight:'bold'}}> Sign Up Now </Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <Text style={{color:'white',textAlign:'center',marginTop:80}}>Forgot Password?</Text>
                    
                   
                    
                
                    
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:'#4D4D4D',
       
       alignItems:'center'
       
    },
    LoginText:{
        backgroundColor:'#ACACAC',
        width:350,
        height:70,
        marginTop :20,
        borderRadius:10,
        paddingLeft:20,
        elevation:7
        
        
    },
    button:{
        width:180,
        height: 50,
        borderRadius:5,
        backgroundColor:'#6277C5',
        marginTop:25,
        elevation:10,
        marginLeft:25
    },
    textbutt:{
        textAlign:'center',
        marginTop:8,
        fontWeight:'bold',
        color:'white',
        fontSize:23,
        

    }
 });

export default Login