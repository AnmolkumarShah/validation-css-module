import styles from "./Card.module.css";

const Card = (props) => <div className={`${styles.container} ${props.className}`}>
    {props.children}
</div>;

export default Card;