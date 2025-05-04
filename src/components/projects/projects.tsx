import { createElement, useEffect, useState } from "@ridhamsuhagiya/my-react-library";
import "./projects.css"; // Update this line in projects.tsx
import projectsData from "../../data/projects.json";
import GitHubIcon from "../../images/svg/github.svg";

function getCurrentScreenDimensions(): any {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}
const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [expandedPreview, setExpandedPreview] = useState(false);
    const [screenSize, setScreenSize] = useState<any>(getCurrentScreenDimensions());
    const checkIfMobile = () => {
        if (screenSize.width <= 800) {
            return true;
        } else {
            return false;
        }
    };
    const [isMobileView, setIsMobileView] = useState<boolean>(checkIfMobile());

    useEffect(() => {
        if (screenSize.width <= 800) {
            setIsMobileView(true);
        } else {
            setIsMobileView(false);
        }
    }, [screenSize]);
    useEffect(() => {
        const updateDimension = (): any => {
            setScreenSize(getCurrentScreenDimensions());
        };

        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, []);
    const nextProject = () => {
        setExpandedPreview(false);
        setActiveProject((prev) => (prev + 1) % projectsData.projects.length);
        setShowDetails(false);
    };

    const prevProject = () => {
        setExpandedPreview(false);
        setActiveProject((prev) => (prev === 0 ? projectsData.projects.length - 1 : prev - 1));
        setShowDetails(false);
    };
    console.log(isMobileView);
    const toggleDetails = () => {
        setShowDetails((prev) => !prev);
    };

    const togglePreview = () => {
        if (isMobileView) {
            window.open(projectsData.projects[activeProject].preview, "_blank");
            return;
        }
        setExpandedPreview(!expandedPreview);
    };

    const handleLinkClick = (url) => {
        window.open(url, "_blank");
    };

    return createElement(
        "section",
        { id: "projects", className: `projects slider-item ${isMobileView ? "mobile-view" : ""}` },
        createElement(
            "div",
            { className: "content" },
            createElement("h2", null, "Projects"),
            createElement(
                "div",
                { className: "project-carousel" },
                createElement(
                    "button",
                    {
                        className: `${isMobileView ? "mobile-view" : ""} carousel-btn prev`,
                        onClick: prevProject,
                        style: isMobileView ? { fontSize: "18px", padding: "8px" } : {},
                    },
                    "←",
                ),
                createElement(
                    "div",
                    {
                        className: "project-tile",
                        style: {
                            width: isMobileView ? "72vw" : "55rem",
                            height: isMobileView ? (expandedPreview ? "100vh" : "50vh") : "40rem",
                        }
                    },
                    createElement(
                        "div",
                        {
                            className: `${isMobileView ? "mobile-view" : ""} project-preview-container`,
                        },
                        createElement(
                            "div",
                            {
                                style: {
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                },
                            },
                            createElement("iframe", {
                                src: projectsData.projects[activeProject].preview,
                                title: projectsData.projects[activeProject].title,
                                className: `project-preview ${isMobileView ? "mobile-view" : ""}`,
                            }),
                            createElement("div", {
                                className: "preview-overlay",

                                onClick: togglePreview,
                            }),
                        ),
                        createElement(
                            "div",
                            {
                                className: `tree-flex-container ${isMobileView ? "mobile-view" : ""} ${
                                    expandedPreview ? "visible" : ""
                                }`.trim(),
                            },
                            ...Object.entries(projectsData.projects[activeProject].links).map(([key, value], index) =>
                                createElement(
                                    "div",
                                    {
                                        className: `${isMobileView ? "mobile-view" : ""} tree-branch ${
                                            expandedPreview ? "visible" : ""
                                        }`,
                                        key: key,
                                    },
                                    createElement("div", {
                                        className: "branch-line",
                                    }),
                                    createElement(
                                        "div",
                                        {
                                            className: "preview-link-item visible",
                                            onClick: (e) => {
                                                e.stopPropagation();
                                                handleLinkClick(value);
                                            },
                                        },
                                        value.includes("github.com")
                                            ? createElement("img", {
                                                  src: GitHubIcon,
                                                  alt: projectsData.projects[activeProject].title,
                                                  style: { backgroundColor: "#fff", borderRadius: "50%" },
                                              })
                                            : createElement("iframe", {
                                                  src: value,
                                                  title: key,
                                              }),
                                        createElement(
                                            "span",
                                            { className: "link-label" },
                                            key.charAt(0).toUpperCase() + key.slice(1),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    createElement(
                        "div",
                        { className: "project-info" },
                        createElement(
                            "h3",
                            {
                                className: "project-title",
                                style: isMobileView ? { fontSize: "24px" } : {},
                            },
                            projectsData.projects[activeProject].title,
                        ),
                        createElement(
                            "p",
                            {
                                className: "project-tech",
                                style: isMobileView ? { fontSize: "14px" } : {},
                            },
                            projectsData.projects[activeProject].techStack,
                        ),
                        createElement(
                            "div",
                            { className: "experience-container" },
                            createElement(
                                "button",
                                {
                                    className: "toggle-button",
                                    onClick: toggleDetails,
                                },
                                showDetails ? "Show Details ▲" : "Show Details ▼",
                            ),
                            createElement(
                                "div",
                                {
                                    className: `experience-content ${showDetails ? "expanded" : "collapsed"}`,
                                    style: { maxHeight: showDetails ? "1000px" : "0" }, // Adjust maxHeight as needed
                                },
                                ...projectsData.projects[activeProject].features.map((feature, index) =>
                                    createElement("li", { key: index }, feature),
                                ),
                            ),
                        ),
                    ),
                ),
                createElement(
                    "button",
                    {
                        className: `${isMobileView ? "mobile-view" : ""} carousel-btn next`,
                        onClick: nextProject,
                        style: isMobileView ? { fontSize: "18px", padding: "8px" } : {},
                    },
                    "→",
                ),
            ),
        ),
    );
};

export default Projects;
