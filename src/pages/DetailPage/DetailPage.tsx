import { useLocation } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { CategoryComponent } from '../../components/category/category';
import { Loader } from "../../components/loading/loading"
import { filterAndSliceArticles } from '../../utils/filterAndSliceArticles.ts/filterAndSliceArticles';
import { timeConvertor } from '../../utils/timeConvertor/timeConvertor';
import { MUICard } from "../../components/card/cardItem/cardItem";
import { CardList } from "../../components/card/cardList/cardList"
import { Box } from '@mui/material';

export const DetailPage = () => {
    const location = useLocation();
    const { category }: any = location.state;
    return (
        <>
            <Header />
            <CategoryComponent />
            <Box sx={{ marginTop: 2, padding:2 }}>
                <CardList category={category.title}>
                    {category.data ? (
                        filterAndSliceArticles(category.data, 5).map(
                            (article: any, index: number) => (
                                <MUICard
                                    key={index}
                                    source={article.source.name}
                                    url={article.url}
                                    imageUrl={article.urlToImage}
                                    title={article.title}
                                    description={article.content}
                                    lastUpdated={timeConvertor(article.publishedAt)}
                                    author={article.author}
                                />
                            )
                        )
                    ) : (
                        <Loader />
                    )}
                </CardList>
            </Box>
        </>
    )
}

