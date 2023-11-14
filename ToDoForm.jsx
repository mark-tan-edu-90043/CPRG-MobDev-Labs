import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import styles from './App.jsx';

export default function() {
    return (
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
        </View>
    )
}

