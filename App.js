import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './screens/Login/Login';
import { AuthProvider } from './utils/context/AuthContext';
import Home from './screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Albums from './screens/Albums/Albums';
import Posts from './screens/Posts/Posts';
import Profile from './screens/Profile/Profile';
import Comments from './screens/Comments/Comments';
import Photos from './screens/Photos/Photos';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* user context provider  */}
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
          }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen name="Photos" component={Photos} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Albums" component={Albums} />
            <Stack.Screen name="Posts" component={Posts} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 

  },
});
