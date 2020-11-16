import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import { withNavigation } from 'react-navigation';
import ResultsDetail from "./ResultsDetail"
import * as RootNavigation from '../RootNavigation'

const ResultsList = ({title, results}) => {
    if(!results.length)
    {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={()=>RootNavigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList;