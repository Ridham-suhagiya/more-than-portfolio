import { sections, imageArr } from "../../constants";
import { createElement, useEffect, useState } from "@ridhamsuhagiya/my-react-library";
import About from "../about/About";
import Contact from "../contact/contact";
import Experience from "../experience/Experience";
import Header from "../header/header";
import Projects from "../projects/projects";
import SectionWithImage from "../section/section";
import Skills from "../skills/skills";
import Helmet from "../../images/helmet.png";
import "./layout.css";

function getCurrentScreenDimensions(): any {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

const components: any = {
    About,
    Experience,
    Projects,
    Skills,
    Contact,
};

const Layout = () => {
    const [screenSize, setScreenSize] = useState<any>(getCurrentScreenDimensions());
    const [currentIndex, setCurrentIndex] = useState(0);
    const checkIfMobile = () => {
        if (screenSize.width <= 800) {
            return true;
        } else {
            return false;
        }
    };
    const [isMobileView, setIsMobileView] = useState<boolean>(checkIfMobile());
    useEffect(() => {
        const updateDimension = (): any => {
            setScreenSize(getCurrentScreenDimensions());
        };

        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, []);

    useEffect(() => {
        if (screenSize.width <= 800) {
            setIsMobileView(true);
        } else {
            setIsMobileView(false);
        }
    }, [screenSize]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return createElement(
        "div",
        { className: "slider-container" },
        createElement(
            "div",
            {
                className: "nav-list",
                style: {
                    display: "flex",
                    flexDirection: isMobileView ? "column" : "row",
                    justifyContent: "center",
                    gap: isMobileView ? "10px" : "20px",
                    marginBottom: "20px",
                },
            },
            ...(!isMobileView
                ? sections.map((section, index) =>
                      createElement(
                          "div",
                          {
                              className: `nav-link ${index === currentIndex ? "active" : ""}`,
                              onClick: () => {
                                  setCurrentIndex(index);
                                  scrollToSection(section.toLowerCase());
                              },
                          },
                          section,
                      ),
                  )
                : []),
        ),
        createElement(
            "div",
            { className: "portfolio" },
            createElement(
                "div",
                {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "100px",
                        flexDirection: isMobileView ? "column" : "row",
                    },
                },
                { componentFunc: Header, componentId: "header-component" },
                createElement("img", { src: Helmet, height: "300rem" }),
            ),
            ...sections.map((section, index: number) => {
                return {
                    componentFunc: SectionWithImage,
                    props: {
                        sectionComponent: components[section],
                        section,
                        imageSrc: imageArr[index],
                        index: index,
                        key: section, // Ensure each section has a unique key
                        imageStyles: {
                            width: "300px", // Adjust image size
                            height: "auto",
                            borderRadius: "10px", // Rounded corners
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow
                        },
                        isMobileView: isMobileView,
                        addImage: sections[index] !== "Contact",
                        addRandomStars: true,
                    },
                    componentId: "section-with-image",
                };
            }),
        ),
    );
};

export default Layout;
