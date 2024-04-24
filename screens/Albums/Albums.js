import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

import AlbumCard from '../../components/AlbumCard';

export default function Posts() {
    const [albumData, setAlbumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAlbums();
    }, []);

    function getAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums?&_limit=10')
            .then((res) => res.json())
            .then((json) => { setAlbumData(json); setIsLoading(false); })
            .catch((error) => console.error('error', error));
    }
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
            {albumData.map((album) => (
                <AlbumCard key={album.id} albumData={album} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',

    },
});
