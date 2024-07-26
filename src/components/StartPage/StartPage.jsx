import "./StartPage.css";
import image from '../../assets/images/football-logo.png'

function StartPage() {
    return (
        <div className="startpage-container">
            <img className="start-logo" src={image} alt="game-logo" />
            <div className="difficulty-buttons">
                <button>EASY</button>
                <button>MEDIUM</button>
                <button>HARD</button>
            </div>
        </div>
    )
}

export default StartPage;