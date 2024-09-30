import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button , TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function App() {

 //  function abc(){
  //  console.log("button is clicked")
  //  setIsHungary(!ishungary)
 //  }
//   function feedMyCat()
//    {

//     }
//    function handleInput(arg)
//     {

//       }

//     const [ishungary , setIsHungary]=useState(true);

 // function handleCatStatus()
//{
 // setIsHungry(false);

//}

 // const[ishungry , setIsHungry]=useState(true);

  // return (
   {/*  <View style={styles.container}>
    
 
   <Text>hello   </Text>
  <StatusBar style="auto" />
   <Text onPress={feedMyCat}>I am a cat and I am {ishungary?'hungary plz feed me' : 'full thanks for feeding , me'}</Text>
   <TextInput placeholder='type here..' onChangeText={handleInput}  ></TextInput>
    <Button onPress={abc} title='click me!' color='red'></Button>

   <Button title='SUBMIT' color={'maroon'} onPress={abc}></Button>
    
  </View>
);
}

const styles = StyleSheet.create({
  container: {
   
   
    flexDirection : 'column',
    backgroundColor:'bisque',
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    
  },

*/}
return (
  <View style={styles.container}>
    <View style={styles.searchcontainer}>
    <Icon name='search' size={20} color='grey' style={styles.searchIcon}></Icon>
    <TextInput style={styles.searchBar}placeholder='   Search conditions, doctors...'/>
    </View>

<Text style={styles.heading}>  Let's Find your Doctor

</Text>

<View style={styles.boxContainer}>
<View style={styles.box}>
<Icon name='user-md' size = {65} color = 'olive'></Icon>
<Text style={styles.docName}>Dr. Maria</Text>
<Text style={styles.passion}>Dermatologist </Text>
<View style={styles.ratingContainer}>
<View style={styles.ratingBox}>
<Icon name='star' size={14} color='gold'></Icon>
<Text style={styles.ratingText}>4.5</Text>
</View>
</View>
</View>

<View style={styles.box}>
<Icon name='user-times' size = {65} color = 'olive'></Icon>
<Text style={styles.docName}>Dr.Anna Dinn</Text>
<Text style={styles.passion}>Psychologist</Text>
<View style={styles.ratingContainer}>
<View style={styles.ratingBox}>
<Icon name='star' size={14} color='gold'></Icon>
<Text style={styles.ratingText}>4.2</Text>
</View>
</View>
</View>


<View style={styles.box}>
<Icon name='stethoscope' size = {65} color = 'olive'></Icon>
<Text style={styles.docName}>Dr.Angela Rayez</Text>
<Text style={styles.passion}>Surgeon </Text>
<View style={styles.ratingContainer}>
<View style={styles.ratingBox}>
<Icon name='star' size={14} color='gold'></Icon>
<Text style={styles.ratingText}>4.3</Text>
</View>
</View>
</View>


<View style={styles.box}>
<Icon name='heartbeat' size = {65} color = 'olive'></Icon>
<Text style={styles.docName}>Dr.Chris Bronte</Text>
<Text style={styles.passion}>Cardiologist</Text>
<View style={styles.ratingContainer}>
<View style={styles.ratingBox}>
<Icon name='star' size={14} color='gold'></Icon>
<Text style={styles.ratingText}>4.0</Text>
</View>
</View>
</View>



</View>


  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: 'maroon',
  marginTop:30,
},
searchcontainer:{
  
  flexDirection:'row',
  alighnitems:'center',
  marginBottom:20,
  marginTop:30,
  borderWidth:2,
  borderRadius:10,
  borderColor:'grey',
  paddingHorizontal:15,
  backgroundColor:'white',
  
},
searchBar:{
 flex:1,
  height:40
},

searchIcon:{
  
marginLeft:2,
marginTop:10,
marginBottom:4,
marginLeft:5
},

heading:{
  fontSize:23,
  fontWeight:'bold',
 // fontWeight:'italic',
  marginBottom:40,
  marginTop:20,
  textAlign:'left',
  color:'white'

},

boxContainer:{
  
 flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between',
  
},

box:{
height:250,
width:'48%',
borderColor:'blue',
backgroundColor:'beige',
justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  borderRadius: 17,
  padding: 10,
},
docName:{
fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 2,
  marginTop:5
},

passion: {
fontSize: 14,
fontStyle: 'italic',
color: 'gray',
marginBottom: 8,

},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop:10
},
ratingBox: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor:"beige",
borderRadius:20,
padding:4,
paddingHorizontal:7,
justifyContent:'center',
marginTop:3,
backgroundColor:'maroon'
},
ratingText: {
marginLeft: 5,
fontSize:15,
color:'white',
marginRight:3
},



});


