import React, { Component } from "react";
// import CancelPausev2 from "../components/CancelPausev2/CancelPausev2";
import DynamicInput from "../components/DynamicInput/DynamicInput";
import style from "./Home.module.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("Hello World");
    }

    render() {
        return (
            <div className={style.home}>
                {/* <CancelPausev2 /> */}
                <DynamicInput />
            </div>
        );
    }
}

export default Home;
