import React, { Component, useState } from "react";
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
        value: "deliveryIssues",
        label: "Delivery Issues",
    },
    {
        value: "dontWantSub",
        label: "Dont Want Sub",
    },
    {
        value: "foodSurplus",
        label: "Food Surplus",
    },
    {
        value: "justTrialling",
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
        this.setState({ cancelReason: reason.value });
    };
    handleChangeSub = (reason) => {
        this.setState({ cancelReasonSub: reason.value });
    };
    render() {
        let subMenu = "";
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
                            Understood
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
