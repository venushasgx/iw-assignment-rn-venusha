import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import PostCard from '../../components/PostCard';

export default function Posts() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts?&_limit=5')
            .then((res) => res.json())
            .then((json) => setPostData(json))
            .catch((error) => console.error('error', error));
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {postData.map((post) => (
                <PostCard key={post.id} postData={post} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
