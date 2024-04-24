// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


import Posts from '../Posts/Posts';
import Albums from '../Albums/Albums';

import Profile from '../Profile/Profile';

const Tab = createBottomTabNavigator();

export default function Home() {
   
   
   
    return (
        <View style={style.container}>
            
            <Tab.Navigator >
            <Tab.Screen name="Profile" component={Profile}  />
                <Tab.Screen name="Albums" component={Albums}  />
                <Tab.Screen name="Posts" component={Posts}  />
            </Tab.Navigator>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        paddingTop: 5,
        flex:1
        
    },

    usernameText:{
        fontSize:20,
        margin:30
    }
})
