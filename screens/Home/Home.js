// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';


import Posts from '../Posts/Posts';
import Albums from '../Albums/Albums';

import Profile from '../Profile/Profile';

const Tab = createBottomTabNavigator();

export default function Home() {
   
   
   
    return (
        <View style={style.container}>
            {/* 3 tabs for profile, albums and posts */}
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
