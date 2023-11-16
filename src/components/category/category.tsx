import { useContext, useEffect, useState } from 'react';
import { NewsAppContext } from '../../context/NewsAppContext';
import { MUIButton } from '../button/button';
import { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';
import { DateInput } from '../dateInput/dateInput';
import { RadioGroupComponent } from '../radioGroup/radioGroup';
import { MUIInput } from '../input/input';
import { saveFilter } from '../../utils/saveFilter/saveFilter';

import dayjs from 'dayjs';
import { MUISelectOption } from '../selectOption/selectOption';

//import { validateDate } from '../../utils/dateFormat/validateDate';
export const CategoryComponent: React.FC = () => {
    const [saveName, setSaveName] = useState()
    const [customFilter, setCustomFilter] = useState('');
    const [saveFilters, setSaveFilters] = useState<any[]>([])
    const {
        source,
        setSource,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        category,
        setCategory,
        searchResult,
        setSearchResult,
        setSearchFlag
    }: any = useContext(NewsAppContext);
    const handleChange = (event: SelectChangeEvent) => {
        setCustomFilter(event.target.value);
    };
    const onSelect = () => {
        const findSave = saveFilters.find((f:any) : any => f.name === customFilter)
        console.log("findSource",findSave?.body)
        if (findSave) {
            setSource(findSave.body.source)
            setCategory(findSave.body.category)
            setSearchResult(findSave.body.searchResult)
            setFromDate(findSave.body.fromDate ? dayjs(findSave.body.fromDate) : "")
            setToDate(findSave.body.toDate ? dayjs(findSave.body.toDate) : "")
            // setToDate(findSave1.body.toDate)
            setSearchFlag((old: boolean) => !old)
        }
    }

    const onSave = () => {
        saveFilter({
            name: saveName, body: {
                source,
                category,
                searchResult,
                fromDate,
                toDate
            }
        })
    }
    useEffect(() => {
        onLoad()
    }, [])    
    
    useEffect(() => {
        onSelect()
    }, [customFilter])

    const onLoad = () => {
        const saveString = localStorage.getItem("save")
        setSaveFilters(saveString ? JSON.parse(saveString) : [])
    }
    console.log("Save filter", saveFilters)
    console.log("Custom Filter", customFilter)


    return (
        <Grid container sx={{ display: 'flex', alignItems: 'center', flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#ddd' }} spacing={1} >
            <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <RadioGroupComponent value={source} handleChange={(e: any) => setSource(e.target.value)} />
            </Grid>
            <Grid item container xs={12} md={2} sx={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                <Grid item>
                    <DateInput label="From" value={fromDate} onChange={(e: any) => setFromDate(e)} />
                </Grid>
                <Grid item>
                    <DateInput label="To" value={toDate} onChange={(e: any) => setToDate(e)} />
                </Grid>
            </Grid>
            <Grid item container xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                <Grid item>
                    <MUIInput label='Category' value={category} onChange={(e) => {
                        setCategory(e.target.value)
                        console.log('onChange ', e.target.value)
                    }} />
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                <MUIButton variant="contained" onClick={() => setSearchFlag((old: boolean) => !old)}>Set Filter</MUIButton>
            </Grid>
            <Grid item container xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                <Grid item container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "row", marginBottom: 1 }}>
                    <MUIInput label="Name of your save" value={saveName} onChange={(e) => setSaveName(e.target.value)}></MUIInput>
                    <MUIButton variant="contained" color="success" onClick={onSave}>Save Filter</MUIButton>
                </Grid>
                <Grid item sx={{ marginBottom: .5 }}>
                    <MUISelectOption value={customFilter} handleChange={handleChange} items={saveFilters} />
                </Grid>
            </Grid>
        </Grid>
    );
};

