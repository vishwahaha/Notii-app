import React from "react";

function Priority(props) {
    function clickHandler(e){
        const priority =  e.target.value;
        props.isPriority(priority);
    }

  return (
    <div>
      <div class="cntr">
        <label for={props.id+"1"} class="radio lowP">
          <input type="radio" name={props.id} id={props.id+"1"} class="hidden" value="low" onClick={clickHandler} />
          <span class="label"></span>
        </label>

        <label for={props.id+"2"} class="radio normalP">
          <input type="radio" name={props.id} id={props.id+"2"} class="hidden" value="normal" onClick={clickHandler} />
          <span class="label"></span>
        </label>
        <label for={props.id+"3"} class="radio highP">
          <input type="radio" name={props.id} id={props.id+"3"} class="hidden" value="high" onClick={clickHandler} />
          <span class="label"></span>
        </label>
      </div>
    </div>
  );
}

export default Priority;
