import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { MUISearch } from '../search/search';
import HomeIcon from '@mui/icons-material/Home';



export const Header: React.FC = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Innoscripta AG News App
                    </Typography>
                    <MUISearch />
                    <Link color="#fff" href="/" sx={{ ml: 4 }}><HomeIcon fontSize="large" /></Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}