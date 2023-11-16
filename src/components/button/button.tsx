import Button from "@mui/material/Button";
import { ButtonProps } from "./button.types";

export const MUIButton: React.FC<ButtonProps> = ({
    variant,
    color = "primary",
    children,
    ...rest
}: ButtonProps) => {
    return (
        <Button variant={variant} color={color} {...rest}>
            {children}
        </Button>
    );
}