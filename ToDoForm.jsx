import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import styles from './App.jsx';



export default function({ addTask, addAbsurdNumberOfTasks, clearTasks }) {

  const [taskText, setTaskText] = React.useState('');

    return (
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button 
        title="Add" 
        onPress={() => addTask(taskText)}
        />
        <Button 
        title="Add . . ?" 
        onPress={() => addAbsurdNumberOfTasks(taskText)}
        />
        <Button 
        title="Clear All Tasks" 
        onPress={() => clearTasks()}
        />
        </View>
    )
}

