import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Table({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}> Table Status</Text>
        <Text>Reserved</Text>
        <Text>Seats 4</Text>
        <Text>Server: </Text>
        <Button
          title="View Bill"
          onPress={() => viewBill()}
        ></Button>
      </View>
  
    )
  }


const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize:30,
    fontWeight: 'bold',
  },
  menuItem:{
    marginTop:10,
    fontSize:20,
  },
});