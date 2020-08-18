import React, { Component } from "react";
import style from "./Wizardv1.module.css";

import {
    withStyles,
    Input,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    InputAdornment,
} from "@material-ui/core";

const useStyles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        "& label.Mui-focused": {
            color: "#789904",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#789904",
        },
    },
    fixInput: {
        position: "relative",
        top: "-18px",
    },
    // selectEmpty: {
    //     marginTop: theme.spacing(2),
    // },
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
});

class Wizardv1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                breed: "",
                sex: "",
            },
            stage: 1,
        };
    }

    componentDidMount() {
        console.log("Hello Wizard");
    }

    handleChange = (evt) => {
        let key = evt.target.name;
        this.setState((prevState) => ({
            pet: {
                ...prevState.pet,
                [key]: evt.target.value,
            },
        }));
    };

    handleNext = () => {
        if (this.state.stage === 1) {
            this.setState({ stage: 2 });
        } else if (this.state.stage === 2) {
            this.setState({ stage: 3 });
        }
    };

    render() {
        const { classes } = this.props;
        let wizardStage;
        let summary1, summary2;
        if (this.state.stage === 1) {
            wizardStage = (
                <div className={style.wizardStage}>
                    <form>
                        I am a
                        <FormControl className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.pet.type}
                                name={"type"}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={"cat"}>Cat</MenuItem>
                                <MenuItem value={"dog"}>Dog</MenuItem>
                            </Select>
                        </FormControl>
                        and my name is
                        <FormControl className={classes.formControl}>
                            <TextField
                                className={classes.fixInput}
                                placeholder={"Name"}
                                id="standard-basic"
                                label={"Name"}
                                name={"name"}
                                onChange={(event) => {
                                    const { value } = event.target;
                                    this.setState((prevState) => ({
                                        pet: {
                                            ...prevState.pet,
                                            name: value,
                                        },
                                    }));
                                }}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                        >
                            Next
                        </Button>
                    </form>
                </div>
            );
        } else if (this.state.stage === 2) {
            wizardStage = (
                <div className={style.wizardStage}>
                    <form>
                        I am a
                        <FormControl className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.pet.sex}
                                name={"sex"}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                            </Select>
                        </FormControl>
                        and my breed is
                        <FormControl className={classes.formControl}>
                            <TextField
                                defaultValue={"Breed"}
                                className={classes.fixInput}
                                placeholder={"Breed"}
                                id="standard-basic"
                                label={"Breed"}
                                name={"breed"}
                                onChange={(event) => {
                                    const { value } = event.target;
                                    this.setState((prevState) => ({
                                        pet: {
                                            ...prevState.pet,
                                            breed: value,
                                        },
                                    }));
                                }}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                        >
                            Next
                        </Button>
                    </form>
                </div>
            );
        }

        if (
            this.state.pet.type &&
            this.state.pet.name &&
            this.state.stage >= 2
        ) {
            summary1 = (
                <p>
                    I am a {this.state.pet.type} named {this.state.pet.name}.
                </p>
            );
        }

        if (
            this.state.pet.sex &&
            this.state.pet.breed &&
            this.state.stage >= 3
        ) {
            summary2 = (
                <p>
                    I am a {this.state.pet.sex} {this.state.pet.breed}.
                </p>
            );
        }

        return (
            <div className={style.wizard}>
                <h2 className={style.wizardHeader}>
                    Let's <b>get to know</b> each other
                </h2>

                <div className={style.wizardContent}>
                    {summary1}
                    {summary2}
                    {wizardStage}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Wizardv1);
