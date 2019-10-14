import React, { Component } from 'react';
import {ImageBackground, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      
          <ImageBackground source={require("../image/hn.png") } style={styles.anh}>
            <TouchableOpacity style={styles.button} onPress={()=>{
                  this.props.navigation.push('List');
              }}>
              <Text style = {{fontWeight:'bold'}}>PLAY</Text>
            </TouchableOpacity>
            <View style = {styles.container2}>
                <Text style = {{fontSize: 25, color: 'white',fontWeight:'bold'}}>Welcome to RearKingMath</Text>
            </View>
          </ImageBackground>
          
    
    );
  }
}
const styles = StyleSheet.create({
    viewtong:{
        
    },
    button:{
        backgroundColor:'white',
        width:150,
        height:60,
        marginTop:280,
        marginLeft:110,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    anh:{
        flex:1
    },
    container2:{
        flex: 0.5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:70
    
    }
})
