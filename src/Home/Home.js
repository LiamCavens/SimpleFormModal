import React, { Component } from "react";
import CancelPausev2 from "../components/CancelPausev2/CancelPausev2";

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
            <>
                <CancelPausev2 />
            </>
        );
    }
}

export default Home;
