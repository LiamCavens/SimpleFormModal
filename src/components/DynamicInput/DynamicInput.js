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
    FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function DynamicInput() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        type: "____",
        sex: "____",
        age: "__",
        weight: "__",
        breed: "Golden Lab",
    });

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
                    value={values.type}
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
                    value={values.sex}
                    onChange={handleChange("sex")}
                >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id="standard-basic" label="Name" />
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
                <Input
                    id="standard-adornment-weight"
                    value={values.weight}
                    onChange={handleChange("weight")}
                    endAdornment={
                        <InputAdornment position="end">Kg</InputAdornment>
                    }
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                        "aria-label": "weight",
                    }}
                />
                <FormHelperText id="standard-weight-helper-text">
                    Weight
                </FormHelperText>
            </FormControl>
            <div>
                <p>
                    I am a {values.sex} {values.type}, I am {values.age} years
                    old, Both my parents are {values.breed}, and I weigh{" "}
                    {values.weight} kg.
                </p>
            </div>
        </div>
    );
}
