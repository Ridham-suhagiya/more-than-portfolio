import { createElement } from "@ridhamsuhagiya/my-react-library";
import python from "../../images/svg/python.svg";
import react from "../../images/svg/react.svg";
import js from "../../images/svg/javascript.svg";
import ts from "../../images/svg/typescript.svg";
import postgres from "../../images/svg/postgres.svg";
import mySql from "../../images/svg/mysql.svg";
import redis from "../../images/svg/redis.svg";
import flask from "../../images/svg/flask.svg";

import "./skills.css";

const Skills = () => {
    const skills = [
        { name: "Python", icon: python },
        { name: "React", icon: react },
        { name: "JavaScript", icon: js },
        { name: "TypeScript", icon: ts },
        { name: "PostgreSQL", icon: postgres },
        { name: "MySQL", icon: mySql },
        { name: "Redis", icon: redis },
        { name: "Flask", icon: flask },
    ];

    // Function to handle mouse movement
    const handleMouseMove = (event) => {
        const chips = document.querySelectorAll(".skill-chip");
        const cursorX = event.clientX;
        const cursorY = event.clientY;

        chips.forEach((chip: any) => {
            const rect = chip.getBoundingClientRect();
            const chipX = rect.left + rect.width / 2; // Center of the chip
            const chipY = rect.top + rect.height / 2; // Center of the chip

            // Calculate distance between cursor and chip
            const distance = Math.sqrt((cursorX - chipX) ** 2 + (cursorY - chipY) ** 2);

            // Move the chip away from the cursor
            const force = 1000 / distance; // Adjust force for stronger/weaker effect
            const angle = Math.atan2(chipY - cursorY, chipX - cursorX);
            const moveX = Math.cos(angle) * force;
            const moveY = Math.sin(angle) * force;
            chip.style.transform = `translate(${moveX}px, ${moveY}px)`;
            chip.classList.add("no-float"); // Disable float animation
        });
    };

    // Function to reset chip positions when mouse leaves the grid
    const handleMouseLeave = () => {
        const chips = document.querySelectorAll(".skill-chip");
        chips.forEach((chip: any) => {
            chip.style.transform = "translate(0, 0)";
            chip.classList.remove("no-float"); // Re-enable float animation
        });
    };

    return createElement(
        "section",
        { id: "skills", className: "skills slider-item" },
        createElement(
            "div",
            { className: "content" },
            createElement("h2", null, "Skills"),
            createElement(
                "div",
                {
                    className: "skills-grid",
                    onMouseMove: handleMouseMove,
                    onMouseLeave: handleMouseLeave,
                },
                ...skills.map((skill, index) =>
                    createElement(
                        "div",
                        {
                            key: index,
                            className: "skill-chip",
                            style: { animationDelay: `${index * 0.1}s` },
                        },
                        createElement("img", { src: skill.icon, alt: skill.name }),
                        createElement("span", null, skill.name),
                    ),
                ),
            ),
        ),
    );
};

export default Skills;
