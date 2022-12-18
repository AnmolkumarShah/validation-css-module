import styles from "./EntryItem.module.css";

function EntryItem(props) {
    return <div className={styles.item}>
        {`${props.data.name} of ${props.data.age} years old`}
    </div>;
}

export default EntryItem;