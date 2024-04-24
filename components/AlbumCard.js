import { StyleSheet, Text, View,  Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function AlbumCard({albumData}) {
    const navigator = useNavigation();
    return (
        <View style={cardStyles.container}>
            <Text style={cardStyles.title}>{albumData.title}</Text>
         
            <Button  title='View Photos' onPress={()=>navigator.navigate("Photos", {AlbumId:albumData.id})}/>
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
        fontSize:20,
        marginBottom:10
    }

})