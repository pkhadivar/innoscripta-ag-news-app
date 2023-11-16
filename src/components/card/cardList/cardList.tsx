import { Box, Divider, Grid, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CardListProps } from "./cardList.types"
import { MUIButton } from "../../button/button";
//import { MUICard } from "../cardItem/cardItem"


export const CardList: React.FC<CardListProps> = ({
    onClick,
    category,
    children
}: CardListProps) => {
    return (
        <Box sx={{ backgroundColor: "#ffffff", borderRadius: 5, marginBottom: 2, padding:2 }}>
            <Grid p={1} sx={{ display: "flex", alignItems: "center" }}>
                <MUIButton variant="text" onClick={onClick}>
                    <Typography variant="h6">
                        {category}
                    </Typography>
                </MUIButton>
                <ArrowForwardIosIcon color="primary" />
            </Grid>
            <Divider />
            <Grid container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                {children}
            </Grid>

        </Box>
    )
}