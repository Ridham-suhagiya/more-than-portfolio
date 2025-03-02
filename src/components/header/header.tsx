import { createElement } from "@ridhamsuhagiya/my-react-library";
import "./header.module.scss";

const Header = () => {
    // const { createElement } = React;
    return createElement(
        "header",
        { id: "header", className: "header slider-item" },
        createElement(
            "div",
            { className: "header-content" },
            createElement("h1", null, "Ridham Suhagiya"),
            createElement("p", null, "Full-Stack Engineer"),
        ),
    );
};

export default Header;
