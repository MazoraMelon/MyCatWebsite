import "./App.css";

import Background from "./components/Background";
import ImagePreview from "./components/ImagePreview.jsx";

function App() {
    return (
        <div className="App">
            <Background />
            <h1>India The Cat</h1>
            <ImagePreview />

            <h3 style={{ textAlign: "center"}}>About</h3>
            <p style={{ textAlign: "center" }}>
                This is India, she is an adorable little cat who has a full time job of
                bathing in the sun, and keeping herself looking majestic.
                <br/>
                Fun fact, she was named after the country India because my dad loved traveling there.
            </p>



            <div id="download">
                <h1 style={{ textAlign: "center" }}>Get the app ️→</h1>
                <button className="downloadButton" onClick={() => alert(`Todo`)}>Download</button>
            </div>
        </div>
    );
}

export default App;
