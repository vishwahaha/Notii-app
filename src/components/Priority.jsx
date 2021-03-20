import React from "react";

function Priority(props) {

    function clickHandler(e){
        const priority =  e.target.value;
        props.isPriority(priority);
    }

  return (
    <div>
      <div className="cntr">
        <label for={props.id+"1"} className="radio lowP">
          <input type="radio" name={props.id} id={props.id+"1"} className="hidden" value="low" onClick={clickHandler} />
          <span className="label"></span>
        </label>

        <label for={props.id+"2"} className="radio normalP">
          <input type="radio" name={props.id} id={props.id+"2"} className="hidden" value="normal" onClick={clickHandler} />
          <span className="label"></span>
        </label>
        <label for={props.id+"3"} className="radio highP">
          <input type="radio" name={props.id} id={props.id+"3"} className="hidden" value="high" onClick={clickHandler} />
          <span className="label"></span>
        </label>
      </div>
    </div>
  );
}

export default Priority;
