import "./App.css";

import Background from "./components/Background";
import Captcha from "./components/Captcha.jsx";

function App() {
    return (
        <div className="App">
            <Background />

            <h1>The new way to Captcha</h1>

            <Captcha />


        </div>
    );
}

export default App;
