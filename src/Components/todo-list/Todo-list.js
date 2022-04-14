import { useRef, useState } from "react";
import Item from "../item/Item";
import { v4 as uuid } from "uuid";
import "./Todo-list.css";
import { motion } from "framer-motion";
import Form from "../form/Form";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TodoList() {
  const [dataArr, setDataArr] = useState([
    { txt: "Sport", id: uuid() },
    { txt: "Coder", id: uuid() },
    { txt: "Jouer", id: uuid() },
  ]);

  const [stateInput, setStateInput] = useState();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addButton = useRef(null);

  const deleteItem = (id) => {
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });

    setDataArr(filteredState);
  };

  const linkInput = (e) => {
    console.log(e);
    setStateInput(e);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newArr = [...dataArr];
    const newTodo = {};
    newTodo.txt = stateInput;
    newTodo.id = uuid();

    const button = addButton.current;
    button.className === "form-button"
      ? (button.className = "form-button-blue")
      : (button.className = "form-button");

    newArr.push(newTodo);
    setDataArr(newArr);
    setStateInput("");
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h4>Ajouter une tâche</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Form
            stateInput={stateInput}
            linkInput={linkInput}
            addTodo={addTodo}
            addButton={addButton}
          ></Form>
        </AccordionDetails>
      </Accordion>

      <h4>Liste des choses à faire</h4>
      <ul>
        {dataArr.map((item, index) => {
          return (
            <Item
              txt={item.txt}
              key={item.id}
              deleteItem={deleteItem}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
