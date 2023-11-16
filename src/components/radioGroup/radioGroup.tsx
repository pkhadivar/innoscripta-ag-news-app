import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RadioGroupProps } from './radioGroup.types';

export const RadioGroupComponent: React.FC<RadioGroupProps> = ({ value, handleChange }: RadioGroupProps) => {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Source</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="newsApi" control={<Radio />} label="News Api" />
                <FormControlLabel value="guardian" control={<Radio />} label="Guardian" />
            </RadioGroup>
        </FormControl>
    );
}