import { createElement } from "@ridhamsuhagiya/my-react-library";
import redStar from "../../images/red-star.png";
import blueStar from "../../images/blue-star.png";
import RedBlueStars from "../red-blue-stars/red-blue-stars";

const SectionWithImage = ({
    sectionComponent,
    section,
    imageSrc,
    index,
    imageStyles,
    addRandomStars,
    addImage,
    isMobileView,
}: any) => {
    const isEven = index % 2 === 0;

    const numberOfStars = 25 * Math.random();
    return createElement(
        "div",
        {
            style: {
                display: "flex",
                flexDirection: isMobileView ? "column" : isEven ? "row" : "row-reverse", // Alternate sides
                alignItems: "center",
                gap: "40px", // Space between content and image
                marginBottom: "60px", // Increased margin between sections
                position: "relative",
                width: "100%",
            },
        },
        { componentFunc: sectionComponent, componentId: section },
        addImage &&
            createElement("img", {
                src: imageSrc,
                style: imageStyles,
            }),
        ...(addRandomStars
            ? Array.from({ length: numberOfStars }).map((_, i: number) => {
                  const star = i % 2 === 0 ? redStar : blueStar;
                  return {
                      componentFunc: RedBlueStars,
                      props: { key: i, numberOfStars: 1, starImage: star },
                      componentId: "red-blue-stars",
                  };
              })
            : []),
    );
};
export default SectionWithImage;
