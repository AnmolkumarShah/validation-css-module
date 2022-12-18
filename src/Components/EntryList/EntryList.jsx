import Card from "../UI/Card";
import EntryItem from "./EntryItem";

const EntryList = (props) => {
    return <Card>
        {props.list.map(el => <EntryItem key={el.id} data={el} />)}
    </Card>
};

export default EntryList;