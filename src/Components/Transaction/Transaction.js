import React, { useEffect, useState } from "react";

import "./Transaction.css";
import TransactionCell from "./TransactionCell";

const Transaction = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transaction);

  const filterData = () => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((payload) =>
      payload.title.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  useEffect(() => filterData(searchText), [props.transaction]);

  return (
    <div className="Transaction">
      Transaction Items
      <input
        placeholder="Search"
        type="text"
        value={searchText}
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.length
        ? filteredTransaction.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ""}
    </div>
  );
};

export default Transaction;
