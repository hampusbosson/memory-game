import './GamePage.css';
import image from '../../assets/images/football-logo.png'
import messi from '../../assets/images/player-cards/Messi.png'

function GamePage({difficulty, setDifficulty}) {
    const toggleHomeButton = () => {
        setDifficulty(null);
    }
    return (
        <section className='gamepage'>
            <div className='top-container'>
                <img className='game-logo' src={image} alt="game-logo" onClick={toggleHomeButton}/>
                <div className='score-box'>
                    <p>Score: 0</p>
                    <p>Best Score: 0</p>
                </div>
            </div>
            <div className='mid-container'>
                <div className='card-content'>
                    <img className='card' src={messi} alt="messi-card" />
                </div>
            </div>
        </section>
    )
}

export default GamePage;