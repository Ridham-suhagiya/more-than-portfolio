import { createElement, useState } from "@ridhamsuhagiya/my-react-library";
import "./experience.css";
import { isArray } from "lodash";

const Experience = () => {
    const ShowExperience = (props: any) => {
        const { children } = props;
        const [toggleExperience, setToggleExperience] = useState(false);
        console.log(toggleExperience);
        return createElement(
            "div",
            { className: "experience-container" },
            createElement(
                "button",
                {
                    className: "toggle-button",
                    onClick: () => setToggleExperience(!toggleExperience),
                },
                toggleExperience ? "Hide Experience ▲" : "Show Experience ▼",
            ),
            createElement(
                "div",
                {
                    className: `experience-content ${toggleExperience ? "expanded" : "collapsed"}`,
                    style: { maxHeight: toggleExperience ? "1000px" : "0" }, // Adjust maxHeight as needed
                },
                ...(isArray(children) ? children : [children]),
            ),
        );
    };
    return createElement(
        "section",
        { id: "experience", className: "experience slider-item" },
        createElement(
            "div",
            { className: "content" },
            createElement("h2", null, "Experience"),
            createElement(
                "div",
                { className: "experience-list" },
                // IDFy (Full-time)
                createElement(
                    "div",
                    { className: "experience-card" },
                    createElement("h3", null, "🚀 Software Engineer at IDFy"),
                    createElement("p", { className: "duration" }, "June 2023 – On Going | Mumbai, India"),
                    {
                        componentFunc: ShowExperience,
                        componentId: "software-engineer-at-idfy",
                        props: {
                            children: createElement(
                                "ul",
                                null,
                                createElement("li", null, "✅ Built Maker-Checker Feature for bank workflows."),
                                createElement("li", null, "🌍 Added Multi-Language Support in under 1 minute."),
                                createElement("li", null, "🎨 Developed Theme Builder, reducing setup time by 90%."),
                                createElement("li", null, "📝 Engineered ESign Module for Aadhaar-based signing."),
                                createElement("li", null, "📊 Built FIU Module, cutting data retrieval time by 75%."),
                            ),
                        },
                    },
                ),
                // IDFy (Intern)
                createElement(
                    "div",
                    { className: "experience-card" },
                    createElement("h3", null, "👨‍💻 Software Development Engineer Intern at IDFy"),
                    createElement("p", { className: "duration" }, "Nov 2022 – Apr 2023 | Mumbai, India"),
                    {
                        componentFunc: ShowExperience,
                        componentId: "software-engineer-intern",
                        props: {
                            children: createElement(
                                "ul",
                                null,
                                createElement("li", null, "📄 Developed ESign Module, saving 70% operational time."),
                                createElement("li", null, "🕵️ Built Interview Safe Module with 97% accuracy."),
                            ),
                        },
                    },
                ),
                // Anand Rathi (Intern)
                createElement(
                    "div",
                    { className: "experience-card" },
                    createElement("h3", null, "🔧 Backend Developer Intern at Anand Rathi Wealth Ltd"),
                    createElement("p", { className: "duration" }, "July 2022 – Oct 2022 | Mumbai, India"),
                    {
                        componentFunc: ShowExperience,
                        componentId: "anand-rathi",
                        props: {
                            children: createElement(
                                "ul",
                                null,
                                createElement("li", null, "⚙️ Optimized APIs, reducing errors by 30%."),
                                createElement("li", null, "📑 Designed verification module for client onboarding."),
                                createElement("li", null, "🐳 Gained expertise in Docker and AWS Lambda."),
                            ),
                        },
                    },
                ),
            ),
        ),
    );
};

export default Experience;
