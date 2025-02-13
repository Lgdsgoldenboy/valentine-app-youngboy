import { useState } from "react"; // Removed unused React import
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [response, setResponse] = useState<string | null>(null); // Allow string or null
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setResponse("Yay! Val for life! ❤️"); // Now works because response can be a string
    setShowConfetti(true);
  };

  const handleNo = () => {
    setResponse("Aww, maybe next time? 💔"); // Now works because response can be a string
    setShowConfetti(false);
  };

  return (
    <div className="valentine-container">
      {showConfetti && <Confetti />}
      <div className="hearts">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="heart" style={{ animationDelay: `${index * 0.5}s` }}>❤️</div>
        ))}
      </div>
      <h1>Will you be my girlfriend?</h1>
      <div className="buttons">
        <button className="yes-button" onClick={handleYes}>
          Yes
        </button>
        <button className="no-button" onClick={handleNo}>
          No
        </button>
      </div>
      {response && (
        <div className="response-container">
          <p className="response">{response}</p>
          <div className="video-container">
            {response === "Yay! Val for life! ❤️" ? (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wyv_V26PWng?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Rj-sEu5pl1g?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;