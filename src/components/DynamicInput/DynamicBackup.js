import React, { Component } from "react";
import {
    Button,
    TextField,
    makeStyles,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Select,
} from "@material-ui/core";
import style from "./DynamicInput.module.css";

export default class DynamicInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
        };
    }

    handleChange = (event) => {};
    render() {
        // let classes = useStyles();
        return (
            <>
                <div>
                    <form
                        // className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Name" />
                        <FormControl className={style.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Age
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.age}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
            </>
        );
    }
}
