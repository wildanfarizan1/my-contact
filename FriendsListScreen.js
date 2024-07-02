// screens/FriendsListScreen.js

import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';

const friendsData = [
  { id: '1', name: 'John Doe', age: 30, phone: '+1234567890', email: 'john.doe@example.com', image: require('../assets/friend1.jpg') },
  { id: '2', name: 'Jane Smith', age: 28, phone: '+9876543210', email: 'jane.smith@example.com', image: require('../assets/friend2.jpg') },
  { id: '3', name: 'Michael Brown', age: 32, phone: '+1122334455', email: 'michael.brown@example.com', image: require('../assets/friend3.jpg') },
  { id: '4', name: 'Emily Davis', age: 26, phone: '+9988776655', email: 'emily.davis@example.com', image: require('../assets/friend4.jpg') },
  { id: '5', name: 'David Wilson', age: 29, phone: '+6677889900', email: 'david.wilson@example.com', image: require('../assets/friend5.jpg') },
  { id: '6', name: 'Sarah Miller', age: 31, phone: '+5544332211', email: 'sarah.miller@example.com', image: require('../assets/friend6.jpg') },
  { id: '7', name: 'James Anderson', age: 27, phone: '+3344556677', email: 'james.anderson@example.com', image: require('../assets/friend7.jpg') },
  { id: '8', name: 'Olivia Garcia', age: 30, phone: '+1122334455', email: 'olivia.garcia@example.com', image: require('../assets/friend8.jpg') },
  { id: '9', name: 'Daniel Martinez', age: 33, phone: '+9988776655', email: 'daniel.martinez@example.com', image: require('../assets/friend9.jpg') },
  { id: '10', name: 'Sophia Lopez', age: 25, phone: '+6677889900', email: 'sophia.lopez@example.com', image: require('../assets/friend10.jpg') },
];

const FriendsListScreen = ({ navigation }) => {

  const renderFriendItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ContactDetail', { contact: item })}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }} />
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Age: {item.age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={friendsData}
      renderItem={renderFriendItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FriendsListScreen;
