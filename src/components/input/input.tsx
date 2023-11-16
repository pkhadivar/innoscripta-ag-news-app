import TextField from '@mui/material/TextField';
import { InputProps } from './input.types';

export const MUIInput: React.FC<InputProps> = ({ 
    label,
    variant, 
    children, 
    onChange,
    value
 }: InputProps) => {
    return (
        <TextField
            onChange={onChange}
            value={value}
            size="small"
            focused={!!value}
            id="standard-search"
            label={label}
            type="text"
            variant={variant}
         >
            {children}
        </TextField>
    );
}