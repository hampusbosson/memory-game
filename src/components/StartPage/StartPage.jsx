import "./StartPage.css";
import image from '../../assets/images/football-logo.png'

function StartPage({ setDifficulty }) {
    const toggleDifficulty = (difficulty) => {
        setDifficulty(difficulty);
    }

    return (
        <div className="startpage-container">
            <img className="start-logo" src={image} alt="game-logo" />
            <div className="difficulty-buttons">
                <button onClick={() => toggleDifficulty('easy')}>EASY</button>
                <button onClick={() => toggleDifficulty('medium')}>MEDIUM</button>
                <button onClick={() => toggleDifficulty('hard')}>HARD</button>
            </div>
        </div>
    )
}

export default StartPage;