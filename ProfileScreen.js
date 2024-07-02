// screens/ProfileScreen.js

import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Image source={contact.image} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{contact.name}'s Profile</Text>
      <Text>Age: {contact.age}</Text>
      <Text>Phone: {contact.phone}</Text>
      <Text>Email: {contact.email}</Text>
      {/* Add more profile details as needed */}
    </View>
  );
};

export default ProfileScreen;
