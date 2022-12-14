import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    "& input": {
        color: theme.palette.primary.contrastText,
    },
    "& label": {
        color: theme.palette.primary.contrastText,
    },
    "& label.Mui-focused": {
        color: theme.palette.primary.contrastText,
    },
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#f5f5f5",
        "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.secondary.main,
        },
    },
}));

type MyTextFieldType = {
    type?: string;
    name: string;
    placeholder?: string;
    label: string;
    autoComplete?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyTextField = (props: TextFieldProps & MyTextFieldType) => (
    <StyledTextField
        {...props}
        type={props.type !== undefined ? props.type : "text"}
        name={props.name}
        label={props.label}
        variant="filled"
        placeholder={props.placeholder !== undefined ? props.placeholder : undefined}
        autoComplete={props.autoComplete !== undefined ? props.autoComplete : props.name}
        fullWidth
        margin="dense"
        value={props.value}
        onChange={props.onChange}
    />
);

export default MyTextField;
