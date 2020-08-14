import React from "react";
import {
    makeStyles,
    Input,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    InputAdornment,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        "& label.Mui-focused": {
            color: "gold",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "gold",
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "25ch",
    },
    select: {
        width: "25ch",
    },
}));

export default function DynamicInput() {
    const classes = useStyles();
    const [values, setValues] = React.useState({});

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange("type")}
                >
                    <MenuItem value={"cat"}>Cat</MenuItem>
                    <MenuItem value={"dog"}>Dog</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange("sex")}
                >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="standard-basic"
                    label="Name"
                    onChange={handleChange("name")}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="standard-basic"
                    label="Breed"
                    onChange={handleChange("breed")}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="standard-basic"
                    type="number"
                    label="Age"
                    onChange={handleChange("age")}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Weight</InputLabel>
                <Input
                    id="standard-adornment-weight"
                    color="secondary"
                    type="number"
                    onChange={handleChange("weight")}
                    endAdornment={
                        <InputAdornment position="end">Kg</InputAdornment>
                    }
                />
            </FormControl>
            <div>
                <p>
                    {values.name ? `My name is ${values.name},` : ""}
                    {values.sex && values.type
                        ? ` I am a ${values.sex} ${values.type},`
                        : values.sex
                        ? ` I am a ${values.sex},`
                        : values.type
                        ? ` I am a ${values.type},`
                        : ""}
                    {values.age ? ` I am ${values.age} years old,` : ""}
                    {values.breed
                        ? ` Both my parents are ${values.breed}, `
                        : ""}
                    {values.weight ? ` I weigh ${values.weight}kg.` : ""}
                </p>
            </div>
        </div>
    );
}
