import React from "react";

const TransactionCell = (props) => {
  //   const [type] = useState(props.payload.type);
  const title = props.payload.title;
  const amount = props.payload.amount;
  const date = props.payload.date.toLocaleString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
  const type = props.payload.type;
  //   console.log(type);

  return (
    <div>
      <div
        className="TransactionCell"
        style={
          type === "INCOME"
            ? { borderRight: "5px solid green", backgroundColor: "#a5c9a5" }
            : { borderRight: "5px solid red", backgroundColor: "#dfa8a8" }
        }
      >
        <div className="cell">
          <span>{title}</span>
          <span>${amount}</span>
        </div>
        <div className="date">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCell;
