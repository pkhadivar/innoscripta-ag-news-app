import axios from 'axios';
import { useEffect, useState } from 'react';
import { NewsAppContext } from './NewsAppContext';
import { Sources, dataMapping } from '../utils/dataMapping/dataMapping';
import { validateDate } from '../utils/dateFormat/validateDate';

const NEWS_API_API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
const NEWS_API_BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=33`;
const GUARDIAN_API_KEY = `bfdaac02-13eb-4315-814c-2d310abe8a86`;
const GUARDIAN_API_BASE_URL = `https://content.guardianapis.com/search?page-size=33`;

export const NewsAppProvider = ({ children }: any) => {
    const [newsData, setNewsData] = useState([]);
    const [searchState, setSearchState] = useState([]);
    const [queryState, setQueryState] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [source, setSource] = useState<any>("newsApi")
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [searchFlag, setSearchFlag] = useState(false);

    const obj:any ={
        [Sources.NEWS_API]: {
            url: NEWS_API_BASE_URL,
            apiKey: NEWS_API_API_KEY,
        },
        [Sources.GUARDIAN]: {url:GUARDIAN_API_BASE_URL, apiKey: GUARDIAN_API_KEY},
    }

    const paramsObj:any = {
        [Sources.NEWS_API]: {
            fromDate: "from",
            toDate: "to",
            category:'category',
            apiKey: "apiKey",
        },  
        [Sources.GUARDIAN]:  {
            fromDate: "from-date",
            toDate: "to-date",
            category:'section',
            apiKey: "api-key"
        },
    }

    const callNewsList = async (values:any) => {

        const params = {
            [paramsObj[source]['fromDate']]: values.fromDate ? validateDate(values.fromDate): undefined,
            [paramsObj[source]['toDate']]: values.toDate ? validateDate(values.toDate): undefined,
            [paramsObj[source]['category']]: values.category || undefined,
            [paramsObj[source]['apiKey']]: obj[values.source]['apiKey'],
            q: values.searchResult || undefined
        }

        const res = await axios.get( `${obj[values.source]['url']}`, {params:params })

        return source === Sources.NEWS_API ?  res.data?.articles : res.data?.response?.results 

    }

    console.log('category',category)

    const fetchArticles = async () => {
        console.log(fromDate)
        //const res = await axios.get('https://content.guardianapis.com/search?api-key=bfdaac02-13eb-4315-814c-2d310abe8a86&section=world')
            const res = await  callNewsList({fromDate, toDate,category, source,searchResult})
            console.log("data", res)
            const data: any = dataMapping(res, source)
            setNewsData(data)
            console.log('new Data', data)}
    useEffect(() => {
        fetchArticles()
    }, [searchFlag])

    return (
        <NewsAppContext.Provider
            value={{
                newsData,
                setNewsData,
                searchState,
                setSearchState,
                setQueryState,
                queryState,
                searchResult,
                setSearchResult,
                source,
                setSource,
                fromDate,
                setFromDate,
                toDate,
                setToDate,
                category,
                setCategory,
                author,
                setAuthor,
                setSearchFlag,
                searchFlag
            }}>
            {children}
        </NewsAppContext.Provider>
    );
};
