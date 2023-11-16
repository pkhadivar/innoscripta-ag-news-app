import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardProps } from './card.types';
import { Grid } from '@mui/material';
import { sliceDescription } from '../../../utils/sliceDescription/sliceDescription';
import { timeConvertor } from '../../../utils/timeConvertor/timeConvertor';

export const MUICard: React.FC<CardProps> = ({
    imageUrl,
    title,
    description,
    lastUpdated,
    url,
    //source,
    author
}: CardProps) => {
    return (
        <Card raised sx={{ borderRadius: 5, marginTop: 2, width: 400, height: 500 }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 490 }}>
                <Grid item>
                    <CardHeader
                        // title={<a href={url} target='_blank'>
                        //     {source}
                        // </a>}
                        subheader={author}
                    />
                </Grid>
                <Grid item sx={{ width: "100%"}}>
                    <CardMedia
                        component="img"
                        width="100%"
                        sx={{ objectFit: "contain" }}
                        image={imageUrl}
                        alt="Paella dish"
                    />
                </Grid>
                <Grid item>
                    <CardContent>
                        <a href={url} color="primary" target='_blank'>
                            {title}
                        </a>
                        {description ? <Typography sx={{ marginTop: 2 }} variant="body2" fontFamily="bo" color="text.secondary">
                            {sliceDescription(description)}
                        </Typography> : ""}
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions disableSpacing>
                        <Typography variant="body2" color="text.secondary">
                            {timeConvertor(lastUpdated)}
                        </Typography>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
}
