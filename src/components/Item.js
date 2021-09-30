import React from "react";

function Item(props) {
    function deleteFunc(){
        props.deleteFunc(props.id);
    }
    return (
        <div className="item">
            <span>{props.item} <button onClick={deleteFunc}>🗑</button></span>
            
        </div>
    )
}

export default Item;