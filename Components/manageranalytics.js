import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Analytics({navigation}){
  return (
    <View>
      <Text style={styles.title}> Choose data to view:</Text>
      <Text style={styles.menuItem}>Employee</Text>
      <Button
        title="Employee Ratings"
        ></Button>
      <Button
        title="Employee Feedbacks"
        ></Button>
      <Text style={styles.menuItem}>Accounting</Text>
      <Button
        title="Efficiency Score"
        ></Button>
      <Button
        title="Net Profit"
        ></Button>
      <Text style={styles.menuItem}>Misc</Text>
      <Button
        title="Most Popluar Menu Item"
        ></Button>
      <Button
        title="Traffic Predicitions"
        ></Button>
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