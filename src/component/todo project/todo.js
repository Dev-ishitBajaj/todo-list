import React from "react";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
import "./style.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const getLocalData = () => {
  const lists = localStorage.getItem("tOdo");
  if (lists) {
    return JSON.parse(lists);
  }
  return [];
};
const Todo = () => {
  const [listData, setListData] = React.useState("");
  const [items, setItems] = React.useState(getLocalData());
  const [isEditItem, setIsEditItem] = React.useState("");
  const [toggleButton, setToggleButton] = React.useState(false);
  // ######
  // Add the items function

  const addItem = () => {
    if (!listData) {
      alert("Plz fill the data");
    }else if(listData && toggleButton){
      setItems(
        items.map((currElem) => {
          if(currElem.id === isEditItem)
          {
            return {...currElem,name:listData};
          }
          return currElem
        })
      )
    }
    else {
      const itemDataAll = {
        id: new Date().getTime().toString(),
        name: listData,
      };
      setItems([...items, itemDataAll]);
      setListData("");
    }
  };

  // ###Edit THe items ############
  const editItem = (index) => {
    const item_todo_edited = items.find((currElem) => {
      return currElem.id === index;
    });
    setListData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  //  ##### DELETE ITEMS @###########
  const deleteItem = (index) => {
    const updatedItem = items.filter((currElem) => {
      return currElem.id !== index;
    });
    setItems(updatedItem);
  };

  React.useEffect(() => {
    localStorage.setItem("tOdo", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todoLogo" />
            <figcaption>Add your list items 🤙</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="📝 Add items for the lIst"
              className="form-control"
              value={listData}
              onChange={(event) => {
                setListData(event.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addItem();
                }
              }}
            />
            {toggleButton ? (
              <i class="fa fa-edit add-btn" onClick={editItem}></i>
            ) : (
              <i class="fa fa-plus add-btn" onClick={addItem}></i>
            )}
            {/* <i class="fa fa-plus add-btn" onClick={addItem}></i> */}
          </div>

          <div className="showItems">
            {items.map((currElem, index) => {
              return (
                <div className="eachItem">
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn re"
                      onClick={() => {
                        editItem(currElem.id);
                      }}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => {
                        deleteItem(currElem.id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => {
                setItems([]);
              }}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
