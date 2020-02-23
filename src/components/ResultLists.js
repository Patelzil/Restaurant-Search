import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultLists = ({title, results, navigation}) => {
    return (
        <View styles={styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <FlatList
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 data={results}
                 keyExtractor = {(result) => result.id} 
                 renderItem = {({ item }) => {
                     return (
                        <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
                            <ResultsDetail result= {item}/>
                        </TouchableOpacity>
                     )
                 }}          
            />
        </View>
    )
};

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

export default ResultLists;