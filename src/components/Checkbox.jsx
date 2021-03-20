import React from "react";

function Checkbox(props) {
    function clickHandler(e){
        const checkboxValue = e.target.checked;
        props.isCheck(checkboxValue);
    }
      
  return (
      <div className="round">
        <input type="checkbox" id={props.id} onClick={clickHandler} />
        <label for={props.id}></label>
      </div>
  );
}

export default Checkbox;
