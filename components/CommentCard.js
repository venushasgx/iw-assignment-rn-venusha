import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function CommentCard({commentData}) {
    

    console.log(commentData)
    
    return (
        <View style={cardStyles.container}>
      <Text style={cardStyles.body}>Comment By: {commentData.email}</Text>
            <Text style={cardStyles.body}>{commentData.body}</Text>
           
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        margin: 10,
        borderColor: '#767676',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#fff",
        width:'90%'
    },

    title:{
        fontSize:20
    },

    body:{
        marginBottom:10
    }
})