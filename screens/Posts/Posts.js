import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import PostCard from '../../components/PostCard';

export default function Posts() {
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPosts();
    }, []);

    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts?&_limit=5')
            .then((res) => res.json())
            .then((json) => { setPostData(json); setIsLoading(false); })
            .catch((error) => console.error('error', error));
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
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
