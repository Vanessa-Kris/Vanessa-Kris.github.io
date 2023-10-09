import React from "react";
import { motion } from "framer-motion";

const MouseMotionCircle = ({ x, y }) => {
  return (
    <motion.div
      className="mouse-motion-circle"
      style={{
        position: "fixed",
        top: y,
        left: x,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "7px solid #a55f71",
        display: { md: "block", xs: "none" },
      }}
    ></motion.div>
  );
};
export default MouseMotionCircle;
