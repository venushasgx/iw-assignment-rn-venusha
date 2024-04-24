import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function PostCard({postData}) {
    const navigator = useNavigation();
    return (
        <View style={cardStyles.container}>
            <Text style={cardStyles.title}>{postData.title}</Text>
            <Text style={cardStyles.body}>{postData.body} </Text>
            <Button  title='View Comments' onPress={()=>navigator.navigate("Comments", {postId:postData.id})}>View Comments</Button>
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