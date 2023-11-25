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

  import styles from '../../App.jsx';

export default function ToDoList({tasks}) {
    return (
        <ScrollView>
        <Pressable>
            {tasks.map((task) => (
              <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>{task}</Text>
              </View>
            ))}
        </Pressable>
      </ScrollView>
    )
}
      