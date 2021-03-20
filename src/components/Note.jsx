import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "./Checkbox";
import Priority from "./Priority";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
  const [isDone, setDone] = useState(false);
  const [priority, setPriority] = useState("normal");

  function handleClick() {
    props.onDelete(props.id);
  }
  function onCheck(isChecked) {
    setDone(isChecked);
  }
  function forPriority(priority) {
    setPriority(priority);
  }

  return (
    <div className={"note " + priority}>
      <h1 contentEditable="true" style={isDone ? {fontStyle: "italic"} : null }>{props.title}</h1>
      <p
        contentEditable="true"
        style={isDone ? { textDecoration: "line-through" } : null}
      >
        {props.content}
      </p>
      <Zoom in={true}>
        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </Zoom>
        <Checkbox id={"C" + props.id} isCheck={onCheck} />
        <Priority id={"P" + props.id} isPriority={forPriority} />
      
    </div>
  );
}

export default Note;
