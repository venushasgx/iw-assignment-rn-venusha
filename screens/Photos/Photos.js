import { StyleSheet, Text, SafeAreaView, ScrollView, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Photos({ route }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getComments();
    }, []);

    function getComments() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${route.params.AlbumId}&_limit=10`)
            .then((res) => res.json())
            .then((json) => {setData(json); setIsLoading(false);})
            .catch((error) => console.error('error', error));
    }

    return (

        <ScrollView contentContainerStyle={cardStyles.container}>
            {isLoading &&   <ActivityIndicator size="large" color="#0000ff" />}

            {data.map((comment) => (
                <Image  style={cardStyles.ImageSize} key={comment.id} source={{
                    uri: comment.url,
                }} />

            ))} 
 
        </ScrollView>

    );
}

const cardStyles = StyleSheet.create({

    container: {
        flexGrow: 1,

        paddingTop: 50,
        padding: 10
    },
    title: {
        fontSize: 20
    },
    ImageSize: {
        width:'100%',
        height:400
      
      },
});
