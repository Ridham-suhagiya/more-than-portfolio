import { createElement } from "@ridhamsuhagiya/my-react-library";

import gmail from "../../images/svg/gmail.svg";
import leetCode from "../../images/svg/leetcode.svg";
import hackerrank from "../../images/svg/hackerrank.svg";
import github from "../../images/svg/github.svg";
import linkedIn from "../../images/svg/linkedIn.svg";
import youtube from "../../images/svg/youtube.svg";
import "./contact.css";

const Contact = () => {
    return createElement(
        "section",
        { id: "contact", className: "contact slider-item" },
        createElement(
            "div",
            { className: "content" },
            createElement("h2", null, "Contact"),
            createElement(
                "div",
                { className: "contact-links" },
                createElement(
                    "a",
                    { href: "https://youtube.com/channel/UCtBifHWSUEomf4-FHIBDA1A", className: "contact-link" },
                    createElement("img", { src: youtube, alt: "YouTube" }),
                    createElement("span", null, "YouTube"),
                ),
                createElement(
                    "a",
                    { href: "mailto:ridhamsuhagiya@gmail.com", className: "contact-link" },
                    createElement("img", { src: gmail, alt: "Email" }),
                    createElement("span", null, "ridhamsuhagiya@gmail.com"),
                ),
                createElement(
                    "a",
                    { href: "https://github.com/Ridham-suhagiya", className: "contact-link" },
                    createElement("img", { src: github, alt: "GitHub" }),
                    createElement("span", null, "GitHub"),
                ),
                createElement(
                    "a",
                    { href: "https://linkedin.com/in/ridham-suhagiya", className: "contact-link" },
                    createElement("img", { src: linkedIn, alt: "LinkedIn" }),
                    createElement("span", null, "LinkedIn"),
                ),
                createElement(
                    "a",
                    { href: "https://hackerrank.com/Ridhamsuhagiya", className: "contact-link" },
                    createElement("img", { src: hackerrank, alt: "HackerRank" }),
                    createElement("span", null, "HackerRank"),
                ),
                createElement(
                    "a",
                    { href: "https://leetcode.com/Ridham_20", className: "contact-link" },
                    createElement("img", { src: leetCode, alt: "LeetCode" }),
                    createElement("span", null, "LeetCode"),
                ),
            ),
        ),
    );
};
export default Contact;
