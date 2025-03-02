import { createElement } from "@ridhamsuhagiya/my-react-library";

const RedBlueStars = ({ numberOfStars, starImage }: any) => {
    return createElement("img", {
        style: {
            position: "absolute",
            zIndex: -1,
            left: `${100 * Math.random()}%`,
            top: `${100 * Math.random()}%`,
            width: "44px",
        },
        src: starImage,
    });
};

export default RedBlueStars;
