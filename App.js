// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FriendsListScreen from './screens/FriendsListScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FriendsList">
        <Stack.Screen name="FriendsList" component={FriendsListScreen} options={{ title: 'Friends List' }} />
        <Stack.Screen name="ContactDetail" component={ContactDetailScreen} options={{ title: 'Contact Detail' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
