import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import "./From.css";

export default function Form(props) {
  return (
    <form>
      <label htmlFor="todo" className="form-label">
        Chose à faire
      </label>
      <input
        type="text"
        id="todo"
        className="form-input"
        value={props.stateInput}
        onInput={(e) => props.linkInput(e.target.value)}
      ></input>
      <button
        className="form-button"
        onClick={(e) => props.addTodo(e)}
        ref={props.addButton}
      >
        Ajouter
      </button>
    </form>
  );
}
