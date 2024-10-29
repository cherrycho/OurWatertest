// src/screens/MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { fetchWaterQualityData } from '../model';

const MainScreen = () => {
    const [waterQualityData, setWaterQualityData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchWaterQualityData();
                setWaterQualityData(data);
            } catch (error) {
                console.error('Failed to load water quality data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View>
            <Text>Water Quality Data:</Text>
            {waterQualityData.map((item, index) => (
                <Text key={index}>{`${item.date} - ${item.location} - NH3N: ${item.nh3n}`}</Text>
            ))}
        </View>
    );
};

export default MainScreen;
