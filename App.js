import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Todoapp from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <Todoapp/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
