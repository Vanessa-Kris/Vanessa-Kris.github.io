import "./styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { Box } from "@mui/material";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  return scope;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <Box ref={scope} className="menucon">
      <nav className="menu">
        <ul>
          <a href="/">
            {" "}
            <li>Home</li>{" "}
          </a>
          <a href="/about">
            {" "}
            <li>About</li>{" "}
          </a>
          <a href="/project">
            {" "}
            <li>Projects</li>{" "}
          </a>
          <a href="/resume">
            {" "}
            <li>Resume</li>{" "}
          </a>
          <a href="/contact">
            {" "}
            <li>Contact</li>{" "}
          </a>
        </ul>
      </nav>
      <button className="navbutton" onClick={() => setIsOpen(!isOpen)}>
        <svg width="23" height="18" viewBox="0 0 23 18">
          <path
            fill="transparent"
            strokeWidth="3"
            stroke="var(--background)"
            strokeLinecap="round"
            d={isOpen ? "M 2 2.5 L 20 2.5" : "M 3 16.5 L 17 2.5"}
            className="top"
          />
          <path
            fill="transparent"
            strokeWidth="3"
            stroke="var(--background)"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            opacity="1"
            className="middle"
          />
          <path
            fill="transparent"
            strokeWidth="3"
            stroke="var(--background)"
            strokeLinecap="round"
            d={isOpen ? "M 2 16.346 L 20 16.346" : "M 3 2.5 L 17 16.346"}
            className="bottom"
          />
        </svg>
      </button>
    </Box>
  );
}
