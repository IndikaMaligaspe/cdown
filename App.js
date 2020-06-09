import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventList from './EventList';
import EventForm from './EventForm';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen 
            name="list" 
            component={EventList}  
            title = "Your Events" />
         <Stack.Screen 
            name="form" 
            component={EventForm}  
            title = "Add an Event" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


