import { useContext } from 'react';
import { NewsAppContext } from "../../context/NewsAppContext"
import { MUICard } from "../../components/card/cardItem/cardItem";
import { CategoryComponent } from "../../components/category/category"
import { Header } from "../../components/header/header"
import { Grid } from '@mui/material';
import { Loader } from '../../components/loading/loading';

export const HomePage = () => {
    const {newsData,}: any = useContext(NewsAppContext);
    return (
        <>
            <Header />
            <CategoryComponent />
            <Grid container sx={{ display: "flex", justifyContent: "center",alignItems:"center"}}>
                {newsData.length === 0 ? (
                    <Grid item>
                        <Loader />
                    </Grid>
                ) : (
                    newsData.map((data: any) => (
                        <Grid item xs={12} md={6} lg={4} key={data.webUrl} sx={{ display: "flex", justifyContent: "center",alignItems:"center"}}>
                            <MUICard
                                url={data.webUrl}
                                title={data.title}
                                description={data.description}
                                lastUpdated={data.createAt}
                                imageUrl={data?.imageUrl}
                                author={data?.author}
                                source={data.category}
                            />
                        </Grid>
                    ))

                )

                }

            </Grid>
        </>
    )
}

