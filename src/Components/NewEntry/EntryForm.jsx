import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./EntryForm.module.css";

const EntryForm = props => {

    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);
    const [isValid, setIsValid] = useState(true);

    const nameRef = useRef();
    const ageRef = useRef();


    function handleFormSubmit(e) {
        e.preventDefault();
        let name = nameRef.current.value;
        let age = ageRef.current.value;

        if (age < 1) {
            setIsValid(false);
            props.modelAction(true, { title: "Invalid Age", content: "Enter a valid Age" })
            return;
        }

        if (name.length === 0) {
            setIsValid(false);
            props.modelAction(true, { title: "Invalid Name", content: "Enter a valid Name" })
            return;
        }

        props.addEntry({ name: name, age: age, id: Math.floor(Math.random() * 100) });
        setIsValid(true)
        nameRef.current.value = "";
        ageRef.current.value = "";
    }

    return <div>
        <Card>
            <form onSubmit={handleFormSubmit} className={` ${styles["form-control"]}  ${!isValid ? styles.invalid : ""}`} >
                <div>Username</div>
                <input ref={nameRef} type="text" />
                <div>Age(Years)</div>
                <input ref={ageRef} type="number" />
                <Button isValid={isValid} type={"submit"}>Add Entry</Button>
            </form>
        </Card>
    </div>
};

export default EntryForm;