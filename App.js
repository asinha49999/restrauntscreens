import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity,TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView } from 'react-native';

const appIcon = require("./assets/MenuMateLogo.png");

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image source={appIcon} style={styles.appIcon} />
        </View>
        <View style={styles.line} />
        <Text style={styles.header}>Add Your Own Restaurant!</Text>
        <View style={styles.boxContainer}>
          <View style={styles.whiteBox}>
            <View style={styles.textContainer}>
              <Text style ={styles.text}> <Ionicons name="checkmark-sharp" size={25} color="black" /> Create Your Own Personalized Page</Text>
              <Text style ={styles.text}> <Ionicons name="checkmark-sharp" size={25} color="black" /> Add Your Own Menu</Text>
              <Text style ={styles.text}> <Ionicons name="checkmark-sharp" size={25} color="black" /> Reach Your Target Audience And Grow Your Business!</Text>
              <Text style ={styles.text}> <Ionicons name="checkmark-sharp" size={25} color="black" /> Free Listing</Text>
              <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('RestaurantContent')}>
                <Text style={styles.buttonText}>Get Started!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function Restaurant() {
  const [restaurantName, setRestaurantName] = React.useState('');
  
  const handleRestaurantNameChange = (text) => {
    setRestaurantName(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
      </View>
      <View style={styles.line} />
      <Text style={styles.header}>Add Your Restaurant Information!</Text>
      <Text style={styles.header2}>Restaurant Name</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={restaurantName}
          onChangeText={handleRestaurantNameChange}
          placeholder="Enter Your Restaurant Name"
          placeholderTextColor="#888"
        />
      </View>
        <Text style={styles.header2}>Location</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Address And Zip Code"
          placeholderTextColor="#888"
        />
      </View>
      <Text style={styles.header2}>Cuisine</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Cuisine"
          placeholderTextColor="#888"
        />
      </View>
      <Text style={styles.header2}>Description</Text>
      <View style={styles.textInputContainer2}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter A Description Of Your Restaurant"
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
}



export default class Login extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RestaurantContent" component={Restaurant} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  textInputContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer2: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    height: "25%",
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    width: "100%",
    textAlign: "left",
  },
  container: {
    flex: 1,
    backgroundColor: "#ABC19B",
  },
  upperContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0%",
    paddingBottom: 0,
  },
  appIcon: {
    width: "35%",
    height: "35%",
    resizeMode: "contain",
    marginTop: "-20%",
  },
  line: {
    height: 2,
    backgroundColor: "white",
    width: "100%",
    marginTop: "-25%",
    marginBottom: "5%",
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  text: {
    color: '#227f39',
    // add other text styles as needed
    marginBottom: 10,
    fontWeight: 'bold',
  },
  whiteBox: {
    backgroundColor: "#fff",
    width: "80%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  button: {
  marginTop: 15,
  paddingLeft:"10%",
  paddingRight:"10%",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
  backgroundColor: "brown",
  width: "80%",
  height: 55,
  alignSelf: "center", // add this line
},
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  header2:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  }
});
