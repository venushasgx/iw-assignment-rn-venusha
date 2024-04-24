import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useAuth } from '../../utils/context/AuthContext';

export default function Profile(){
    const {user} = useAuth();

    return (
        <View>
            <Text style={style.text}>Welcome, {user}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    text:
    {
        fontSize:20,
        margin:10
    }
})