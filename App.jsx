/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Test
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToDoList from './src/components/ToDoList.jsx';
import ToDoForm from './src/components/ToDoForm.jsx';
import HomeScreen from './src/screens/HomeScreen.jsx';
import AboutScreen from './src/screens/AboutScreen.jsx';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {

  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  }

  const addAbsurdNumberOfTasks = (taskText) => {
    setTasks(prevTasks => { //This one is just being silly, really.
      const newTasks = Array.from({ length: 200 }, () => `${taskText}`);
      return [...prevTasks, ...newTasks];
    });
  };
  

  const clearTasks = () => {
     setTasks([]);
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <HomeScreen navigation={Stack}/>
      <AboutScreen navigation={Stack}/>
      <SafeAreaView style={backgroundStyle}>
            <ToDoForm addTask={addTask} addAbsurdNumberOfTasks={addAbsurdNumberOfTasks} clearTasks={clearTasks}/>
            <ToDoList tasks={tasks} />
            </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
