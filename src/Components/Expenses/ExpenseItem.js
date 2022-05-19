import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate key="e1" date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
