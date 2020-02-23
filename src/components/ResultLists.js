import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultLists = newFunction();

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
       marginBottom: 10 
    }
});

export default withNavigation(ResultLists);

function newFunction() {
    return ({ title, results, navigation }) => {
        return (
        <View styles={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                data={results} 
                keyExtractor={(result) => result.id} 
                renderItem={({ item }) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
                    <ResultsDetail result={item} />
                </TouchableOpacity>);
                } } />
        </View>);
    };
}
