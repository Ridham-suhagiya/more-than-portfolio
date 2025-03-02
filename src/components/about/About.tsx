import { createElement } from "@ridhamsuhagiya/my-react-library";
import "./about.module.scss";

const About = () => {
    return createElement(
        "section",
        { id: "about", className: "about slider-item" },
        createElement(
            "div",
            { className: "content" },
            createElement("h2", null, "About Me"),
            createElement(
                "p",
                null,
                "👋 Hi, I’m Ridham, a passionate software engineer who loves turning ideas into reality through code.",
            ),
            createElement(
                "p",
                null,
                "💻 Skilled in Python, JavaScript, and modern web technologies. I adapt to new programming languages as quickly as I adapt to new sports!",
            ),
            createElement(
                "p",
                null,
                "🏸 When I’m not coding, you’ll find me smashing it on the badminton court or trekking through nature. I’m always up for a new challenge, whether it’s a sport or a tech stack!",
            ),
            createElement(
                "p",
                { className: "fun-fact" },
                "🛠️ Fun Fact: This website isn’t built with React... but that’s my little secret. 😉",
            ),
        ),
    );
};

export default About;
