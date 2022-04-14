import { useEffect, useState } from "react";
import "./Item.css";
import { motion } from "framer-motion";

export default function Item(props) {
  const [translate, setTranslate] = useState(100);
  const [shouldTransition, setShouldTransition] = useState(true);

  useEffect(() => {
    if (translate === 100) {
      setShouldTransition(true);
      setTranslate(0);
    }
  }, [translate]);

  return (
    <li
      className="item"
      style={{
        transition: shouldTransition ? "transform 0.5s" : "",
        transform: `translateX(${translate}px)`,
      }}
    >
      <div className="item-label">{props.txt}</div>
      <button
        className="item-button"
        onClick={() => props.deleteItem(props.id)}
      >
        Supprimer
      </button>
    </li>
  );
}
