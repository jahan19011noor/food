import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    

    const searchApi = async (searchTerm) => {
        console.log("Hi there!")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        }
        catch (err)
        {
            setErrorMessage("Something went wrong")
        }
        
    }

    // Call searchApi wehn component
    // is first rendered. BAD CODE
    // searchApi('pasta')
    // its an infinite loop
    // if change happens the component rerenders
    // change happens again and it rerenders

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}