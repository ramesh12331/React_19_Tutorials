import React from "react"

// With JSX -clean and readable
export const Card = () =>{
    return (
        <div id="card">
            <h2>Well Come</h2>
            <p>
                this is a <span id="highlight">paragraph</span> with text
            </p>
            <button>Click me</button>
        </div>
    )
}

// With out JSX - getting messy!

export const CardWithoutJSX = () =>{
    return React.createElement(
        "div" ,{id:"card"},
        React.createElement("h2",null,"Well Come"),
        React.createElement(
            "p", null, "This is a ",
            React.createElement("span", {id:"highlight"}, "paragraph"),
            " With text"
        ),
        React.createElement("button", null, "Click me")
    );
};