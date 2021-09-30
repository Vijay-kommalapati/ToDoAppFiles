import React, { useState } from "react";

function Additem(props){
    
    const [note,setNote] = useState("");

  

    function onchangefunc(e){
        setNote(e.target.value);
    }
    function addnotefunc(e){
        if(note!=="" && e.type==="click"){
            props.addToList(note);
            setNote("");
        }
        else if(note!=="" && e.key==="Enter"){
            props.addToList(note);
            setNote("");
        }
        
    }

    return <div className="additem">
            <input type="text" placeholder="Enter the item here" onChange={onchangefunc} onKeyDown={addnotefunc} value={note}></input>
            <button onClick={addnotefunc}>➕</button>
           
    </div>
}

export default Additem;