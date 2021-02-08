import React from 'react';
import './App.css';
import Header from './components/Header';


import { useSelector } from "react-redux";
import {selectItemList,savedItemList} from "./features/itemSlice";
import Input from './components/Input';
import ListItem from './components/ListItem';
import SaveItem from './components/SaveItem';
import Signup from './components/Signup';

function App() {

  const itemList = useSelector(selectItemList)
  const saveItemList = useSelector(savedItemList);


  return (
    <div className="app">
      <Header />
      <div className="app__body">

      <Signup />
      {/* <div className="app__body-left">
      <div className="app__list-container">
         {itemList.map((item,index) => (
           <ListItem
            key={index}
            name={item.item}
            done={item.done}
            id={item.id}
           
            />
         ))}

      </div>

      <Input />

      </div>

      <div className="app__body-right">

      <div className="app__savelist-container">
         {saveItemList.map((item) => (
           
           <SaveItem
            key={item}
            name={item}
           
           
            />
         ))}

      </div>

      </div> */}


      </div>
     
    </div>
  );
}

export default App;
