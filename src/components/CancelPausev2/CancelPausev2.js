import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Select from "react-select";
import style from "./CancelPausev2.module.css";

const reasons = [
    {
        value: "illdog",
        label: "Dog got ill",
    },
    {
        value: "dogpassed",
        label: "Dog has passed away",
    },
    {
        value: "dryfood",
        label: "Dog prefers dry food",
    },
    {
        value: "nospace",
        label: "Freezer space too small",
    },
    {
        value: "fussy",
        label: "Fussy dog",
    },
    {
        value: "holiday",
        label: "Going on a holiday",
    },
    {
        value: "competitor",
        label: "Moved to competitor",
    },
    {
        value: "mistakeorder",
        label: "Ordered in error",
    },
    {
        value: "highprice",
        label: "Price too high",
    },
    {
        value: "other",
        label: "Other",
    },
];

const competitors = [
    {
        value: "competitor1",
        label: "Competitor1",
    },
    {
        value: "competitor2",
        label: "Competitor2",
    },
    {
        value: "competitor3",
        label: "Competitor3",
    },
    {
        value: "competitor4",
        label: "Competitor4",
    },
    {
        value: "competitor5",
        label: "Competitor5",
    },
];

const otherReasons = [
    {
        value: "allergies",
        label: "Allergies",
    },
    {
        value: "COVID-19",
        label: "COVID-19",
    },
    {
        value: "deliveryissues",
        label: "Delivery Issues",
    },
    {
        value: "dontwantsub",
        label: "Dont Want Sub",
    },
    {
        value: "foodsurplus",
        label: "Food Surplus",
    },
    {
        value: "justtrialling",
        label: "Just Trialling",
    },
    {
        value: "personal",
        label: "Personal",
    },
];

export default class CancelPausev2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleShowPause = () => {
        this.setState({ showModal: true, type: "Pause" });
    };

    handleShowCancel = () => {
        this.setState({ showModal: true, type: "Cancel" });
    };

    handleClose = () => {
        this.setState({ showModal: false });
    };

    handleChange = (reason) => {
        this.setState({ cancelReason: reason.value, cancelReasonSub: null });
    };
    handleChangeSub = (reason) => {
        this.setState({ cancelReasonSub: reason.value });
    };
    render() {
        let subMenu = "";
        let retentionBody = "";
        if (this.state.cancelReason === "competitor") {
            subMenu = (
                <Select onChange={this.handleChangeSub} options={competitors} />
            );
        } else if (this.state.cancelReason === "other") {
            subMenu = (
                <Select
                    onChange={this.handleChangeSub}
                    options={otherReasons}
                />
            );
        }

        if (this.state.cancelReason === "fussy") {
            retentionBody = (
                <p>
                    We offer a number of ways to help with fussy dogs, From
                    trying different foods, to talking with our own
                    behaviourilist over a phonecall. go{" "}
                    <a href="www.google.com">here</a> to find out
                </p>
            );
        } else if (this.state.cancelReason === "holiday") {
            retentionBody = (
                <p>
                    If you are going on holiday, we can skip deliveries and
                    choose the next delivery date tailored to you. **In future
                    we would put a datepicker in here**
                </p>
            );
        } else if (this.state.cancelReason === "dryfood") {
            retentionBody = (
                <p>
                    We also offer a raw dry alternative, you can choose to
                    switch to this <a href="www.google.com">here</a>
                </p>
            );
        }

        return (
            <>
                <Button
                    className={style.sub_button}
                    variant="primary"
                    onClick={this.handleShowPause}
                >
                    Pause Subscription
                </Button>
                <Button variant="dark" onClick={this.handleShowCancel}>
                    Cancel Subscription
                </Button>

                <Modal
                    show={this.state.showModal}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.state.type} Subscription
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Select
                            className={style.dropdown}
                            onChange={this.handleChange}
                            options={reasons}
                        />
                        {subMenu}

                        {retentionBody}
                    </Modal.Body>
                    <Modal.Footer dialogClassname={style.modal_footer}>
                        <Button
                            className={style.close_button}
                            variant="secondary"
                            onClick={this.handleClose}
                        >
                            I want to stay
                        </Button>
                        <Button variant="danger" onClick={this.handleClose}>
                            {this.state.type} my subscription
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
