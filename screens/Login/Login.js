import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../../utils/context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Login() {


    const navigator =  useNavigation();
    const {login} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user} = useAuth();
    const handleLogin = () => {
       
       // console.log("Email:", email);
       // console.log("Password:", password);

        if (email=== "" && password === "") {
            console.log("logged");
            login(email);
            navigator.navigate('Home')

        }

        else {
            console.log("Invalid login")
        }

       
    

    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email or Username"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        padding:30
    },
    mainText: {
        fontSize: 30,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#767676',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    loginButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});
