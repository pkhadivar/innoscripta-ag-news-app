import {useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { MUIButton } from '../button/button';
import { NewsAppContext } from '../../context/NewsAppContext';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '24ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));

export const MUISearch: React.FC = () => {
    const {
        searchResult,
        setSearchResult,
        setSearchFlag
    }: any = useContext(NewsAppContext);

    const handleInputChange = (event: any) => {
        setSearchResult(event.target.value);
      };
    

    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    value={searchResult}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleInputChange}
                />
            </Search>
            <MUIButton variant="contained" onClick={() => setSearchFlag((old:boolean) => !old)}>
                Search
            </MUIButton>
        </>
    )
}


