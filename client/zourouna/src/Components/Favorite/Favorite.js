import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./Favorite.css";
import Axios from 'axios';

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function Favorite() {
  const [email,setEmail]=useState(localStorage.getItem('email'));

  const addfavorite=()=>{

    Axios.post('http://localhost:3050/favorite',{
      email:email,
      message:name,
    }).then((response)=>{
      if(response.data){
      
      }}).catch(error=>{
        console.log(error.response)
      })
   
  }
    
  const deleteoneitem=()=>{

    Axios.post('http://localhost:3050/deleteitemfavorite',{
      email:email,
      message:name,
    }).then((response)=>{
      if(response.data){
      
      }}).catch(error=>{
        console.log(error.response)
      })
   
  }
 
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>My Favorites</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="Input the plans you still want to try" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" onClick={addfavorite} className="submit-btn">
            {isEditing ? "edit" : "Submit!"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={deleteoneitem}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default Favorite;