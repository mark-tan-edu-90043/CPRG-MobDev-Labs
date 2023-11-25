import MainLayout from '../layouts/MainLayout';
import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';

export default function AboutScreen({ navigation }) {
    // ...

    return (
        <MainLayout>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
        
    );
}