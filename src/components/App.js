import React, { useEffect, useState } from "react";
import Header from "./Header";
// this below component is for typing and adding new item
import Additem from "./Additem";
// this component is each list item. map is used to use it multiple times.
import Item from "./Item";

function App(){
    // for storing all the to do list
    const [listArray,setListArray]=useState([]);
    // for local starage purpose (used inside deleteFunc)
    var tempArray = [];

    // for getting data from local storage (if any) during the reload
    useEffect(()=>{
        const temp1 = localStorage.getItem("data");
        
        if(temp1!==null){
            console.log("probe");
            setListArray(JSON.parse(temp1));
        }
    },[])

    // the input that is fed to this function gets added to the list array
    // this function is passed down to components as props
    function addToList(input){
        setListArray(previous=>{
            localStorage.setItem("data",JSON.stringify([...previous,input]));
            return [...previous,input];
        })
    }

    // the array item of index that is fed to this function gets deleted
    // this is also passed down to components.
    function deleteFunc(index){
        setListArray(previous=>{
             tempArray = previous.filter((item,ind)=>{
                return (ind!==index)
            })
            localStorage.setItem("data",JSON.stringify(tempArray));
            return tempArray;
        })
    }

    return <div>
        <Header />
        <Additem addToList={addToList} />
        {listArray.map((item,index)=>{
            return <Item 
            item={item}
            key={index}
            id={index}
            deleteFunc={deleteFunc}

            />
        })}
    </div>
}

export default App;