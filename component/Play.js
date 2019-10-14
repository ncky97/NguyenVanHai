import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

var data = [
    {question: '1 + 1 = 2', correct: 1},
    {question: '4 + 1 = 5', correct: 1},
    {question: '6 + 5 = 14', correct: 2},
    {question: '17 + 3 = 20', correct: 1},
    {question: '12 + 11 = 23', correct: 1},
    {question: '16 + 5 = 24', correct: 2},
    {question: '6 + 7 = 13', correct: 1},
    {question: '8 + 9 = 20', correct: 2},
    {question: '11 + 7 = 18', correct: 1},
    {question: '26 + 7 = 32', correct: 2},
    {question: '5 + 3 = 8', correct: 1},
    {question: '7 + 7 = 13', correct: 2},
    {question: '4 + 17 = 21', correct: 1},
    {question: '15 + 7 = 28', correct: 2},
    {question: '16 + 7 = 23', correct: 1},
    {question: '1 + 3 = 4', correct: 1},
    {question: '1 + 2 = 4', correct: 2},
    {question: '11 + 7 = 19', correct: 2},
    {question: '16 + 20 = 36', correct: 1},
    {question: '5 + 6 = 14', correct: 2},
    {question: '12 + 7 = 18', correct: 2},
    {question: '9 + 12 = 22', correct: 2},
    {question: '22 + 7 = 31', correct: 2},
    {question: '12 + 15 = 27', correct: 1},
];
let count = 0;
class Play extends Component {
  constructor(props){
      super(props);
      this.state= {
        position: Math.floor((Math.random() *24) +1)
      }
    }
    _onTrue(){
        if(data[this.state.position].correct == 1){
            count++;
            this.setState({
            position: Math.floor((Math.random() *24) + 1)
          });
        }else {
          Alert.alert("Bạn đã đoán sai(@@)");
          count = 0;
          this.setState({
          position: Math.floor((Math.random() *24) + 1)
        });
      }
    }
    _onFalse(){
        if(data[this.state.position].correct == 2){
            count++;
            this.setState({
                position: Math.floor((Math.random() *24) + 1)
            });
        }else {
            Alert.alert("Bạn đã đoán sai(@@)");
            count = 0;
            this.setState({
                position: Math.floor((Math.random() *24) + 1)
        });
      }
    }
  render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.inputBackground}>
                <Text style = {{fontSize: 65, color: 'white',fontWeight:'bold'}}>{data[this.state.position].question}</Text>
                <View style={styles.container1}>
                  <TouchableOpacity
                    style = {styles.nut2}
                    onPress={this._onTrue.bind(this)}>
                    <Text style = {{fontSize: 40, color: '#04B404',fontWeight:'bold'}}>TRUE</Text>
                  </TouchableOpacity>
      
                  <TouchableOpacity
                    style = {styles.nut3}
                    onPress={this._onFalse.bind(this)}>
                    <Text style = {{fontSize: 40, color: '#FF0000',fontWeight:'bold'}}>FALSE</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.container2}>
                <Text style = {{fontSize: 20, color: 'red',fontWeight:'bold'}}>Welcome to RearKingMath</Text>
            </View>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 6,
    backgroundColor:'#3ADF00',

  },
  container1:{
    flex: 2,
    backgroundColor:'#3ADF00',
    flexDirection:'row'
  },
  container2:{
    flex: 0.5,
    backgroundColor:'#3ADF00',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'

  },
  inputBackground:{
    flex: 5,
    justifyContent:'center',
    backgroundColor: '#3ADF00',
    alignItems: 'center',
    borderRadius:100,
    margin:10,
    marginTop:100

},
  nut2:{
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    borderRadius:15,
    marginTop:120
  },
  nut3:{
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
     marginLeft:5,
     borderRadius:15,
     marginTop:120
  },
})
export default Play;

