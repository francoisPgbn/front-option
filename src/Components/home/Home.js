import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Link to="/list">
      <motion.div
        animate={{
          scale: [3, 2, 1.5, 1.7, 1.8, 2, 1.3, 1.5, 1],
          rotate: [0, 270, 200, 150, 0, -270, 130, 360, 0],
          borderRadius: [
            "5px",
            "10px",
            "3px",
            "7px",
            "15px",
            "13px",
            "0px",
            "12px",
            "4px",
          ],
          opacity: ["0%", "100%"],
        }}
        className="button-todo"
      >
        Ma todo list
      </motion.div>
    </Link>
  );
}
