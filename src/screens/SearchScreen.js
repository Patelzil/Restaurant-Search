import React , {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultLists from '../components/ResultLists';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultLists results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation}/>
                <ResultLists results={filterResultsByPrice('$$')} title="Bit Pricier" navigation={navigation}/>
                <ResultLists results={filterResultsByPrice('$$$')} title="Big Spender" navigation={navigation}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;