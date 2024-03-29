import React from "react";
import "./Nav.css";
import { capitalizeFirstLetter } from "../../utils/helpers";

// defining categories to display in the nav bar using an array of objects
const categories = [
    {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
];

function categorySelected(name) {
    console.log(`${name} clicked`);
}

function Nav() {
    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>

                    <li>
                        <span>Contact</span>
                    </li>

                    {categories.map((category) => (
                        <li className="mx-1"
                            key={category.name}
                        >
                            {/* using the built in React method onClick to serve as an event listener on the span with the name of the category  */}
                            <span onClick={() => categorySelected(category.name)}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;