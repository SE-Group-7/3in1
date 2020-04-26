import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Menu({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> Manager </Text>
      <Button
        title="Tables"
        onPress={() => navigation.navigate('managertable')}
      />
      <Button
        title="Menu"
        onPress={() => navigation.navigate('managerfood')}
      />
      <Button
        title="Timesheet"
        onPress={() => navigation.navigate('managertimesheet')}
      />
      <Button
        title="Analytics"
        onPress={() => navigation.navigate('manageranalytics')}
      />
    </View>
  );
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