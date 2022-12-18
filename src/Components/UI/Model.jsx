import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import styles from "./Model.module.css";

const Backdrop = props => <div onClick={() => props.onConfirm(false, null)} className={styles.backdrop} ></div>;

const ModelContent = props => {
    return <Card className={styles.modal}>
        <header className={styles.header} >
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content} >
            <p >{props.message}</p>
        </div>
        <footer className={styles.action}>
            <Button onClick={() => props.onConfirm(false, null)} isValid={true}>Okay!!!</Button>
        </footer>
    </Card>;
}

const Model = props => <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onCloseClicked} />, document.getElementById("backdrop"))}
    {ReactDOM.createPortal(<ModelContent title={props.title} message={props.message} onConfirm={props.onCloseClicked} />, document.getElementById("model-content"))}
</React.Fragment>;


export default Model;