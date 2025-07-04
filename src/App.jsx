import "./App.css";

import Background from "./components/Background";
import Captcha from "./components/Captcha.jsx";

function App() {
    return (
        <div className="App">
            <Background />

            <h1>The Latest <i><s style={{ color: "#1f1f1f"}}>Torture</s></i> Captcha Method</h1>

            <Captcha forwardLink={"https://www.google.com"} />

        </div>
    );
}

export default App;
