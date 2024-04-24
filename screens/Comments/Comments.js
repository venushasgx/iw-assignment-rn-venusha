import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import CommentCard from '../../components/CommentCard';
import React, { useEffect, useState } from 'react';

export default function Comments({ route }) {
    const [data, setData] = useState([]);

    //console.log(route.params.postId);

    useEffect(() => {
        getComments();
    }, []);

    function getComments() {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${route.params.postId}`)
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error('error', error));
    }

    //console.log(data);

    return (
      
           <ScrollView contentContainerStyle={cardStyles.container}>
                <Text style={cardStyles.title}>Comments</Text>
                {data.map((comment) => (
                    <CommentCard key={comment.id} commentData={comment} />
                ))}
            </ScrollView>
    
    );
}

const cardStyles = StyleSheet.create({

    container: {
        flexGrow: 1,
        
      paddingTop:50,
      padding:10
    },
    title: {
        fontSize: 20
    },
});
