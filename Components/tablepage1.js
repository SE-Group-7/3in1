import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Menu({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Text style={styles.title}>Bill</Text>
      <Text style={styles.menuItem}> Hamburger: $12.00</Text>
      <Text style={styles.menuItem}> Sandwich: $10.00</Text>
      <Text style={styles.menuItem}> Fries: $4.00</Text>
      <Text style={styles.menuItem}> Onion Rings: $4.00</Text>
      <Text style={styles.title}>Log</Text>
      <Text stlyle={styles.menuItem}>Waiter Sam served order</Text>
      <Text stlyle={styles.menuItem}>Server Sam delivering order</Text>
      <Text stlyle={styles.menuItem}>Server Sam recieved order</Text>
      <Text stlyle={styles.menuItem}>Guests order sent to chefs</Text>
      <Text stlyle={styles.menuItem}>Guests order placed</Text>
      <Text stlyle={styles.menuItem}>Guests sat by server</Text>
      <Text stlyle={styles.menuItem}>Waiter Sam served order</Text>
      <Text stlyle={styles.menuItem}>Server Sam delivering order</Text>
      <Text stlyle={styles.menuItem}>Server Sam recieved order</Text>
      <Text stlyle={styles.menuItem}>Guests order sent to chefs</Text>
      <Text stlyle={styles.menuItem}>Guests order placed</Text>
      <Text stlyle={styles.menuItem}>Guests sat by server</Text>
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