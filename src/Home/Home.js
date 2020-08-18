import React, { Component } from "react";
// import CancelPausev2 from "../components/CancelPausev2/CancelPausev2";
// import DynamicInput from "../components/DynamicInput/DynamicInput";
import Wizardv1 from "../containers/Wizardv1/Wizardv1";
import style from "./Home.module.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className={style.home}>
                <img
                    className={style.headerLogo}
                    src={process.env.PUBLIC_URL + "/BnDLogo.png"}
                    alt="Bella and Duke Logo"
                />
                <Wizardv1 />
                {/* <CancelPausev2 /> */}
                {/* <DynamicInput /> */}
            </div>
        );
    }
}

export default Home;
