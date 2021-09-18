import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello There! What is your name today?</h3>
                <input></input>
                <button onClick={() => alert("Hello")}>Say Hello</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);