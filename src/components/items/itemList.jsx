import React, { useContext } from "react";
import { Item } from "./item";
import { Sum } from "./sum";
import { ItemListHeader } from "./itemlistHeader";
import { ListContext } from "./ListContext";

const ItemList = () => {
  const { data, dispatch } = useContext(ListContext);

  function handleAddClick(e) {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM" });
  }

  let list = data.map((item, index) => {
    return <Item key={data.indexOf(item)} item={item} index={index}></Item>;
  });

  return (
    <section className="main">
      <div className="list-container">
        <ItemListHeader />
        <hr className="first-line" />
        <ol>{list}</ol>
        <hr className="second-line" />
        <button className="add-button" type="submit" onClick={handleAddClick}>
          Add Item
        </button>
        <Sum />
      </div>
    </section>
  );
};

export { ItemList };
