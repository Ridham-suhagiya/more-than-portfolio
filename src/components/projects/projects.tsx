import { createElement } from "@ridhamsuhagiya/my-react-library";
import "./projects.module.scss";

const Projects = () => {
    return createElement(
        "section",
        { id: "projects", className: "projects slider-item" },
        createElement(
            "div",
            { className: "content" },
            createElement("h2", null, "Projects"),
            createElement(
                "ul",
                null,
                createElement(
                    "li",
                    null,
                    "Online Examination Monitoring - Python, FastAPI, ReactJS, Docker, PostgreSQL",
                ),
                createElement("li", null, "Online PDF-Maker -", {
                    // componentFunc: Underline,
                    componentId: "underline",
                    props: { text: "Python, HTML, CSS, Flask" },
                }),
            ),
        ),
    );
};

export default Projects;
