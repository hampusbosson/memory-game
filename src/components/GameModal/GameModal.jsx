import './GameModal.css';

function GameModal({ gameResult, setGameResult, setDifficulty }) {
    const modalStyle = {
        display: gameResult ? 'block' : 'none'
    }

    const handlePlayAgain = () => {
        setGameResult(null);
    }

    const handleBackToMenu = () => {
        setDifficulty(null);
    }

    return (
        <div id="modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h2>You {gameResult}!</h2>
                <div className="modal-btns">
                    <button className="play-again-btn" onClick={handlePlayAgain}>PLAY AGAIN</button>
                    <button className="exit-btn" onClick={handleBackToMenu}>BACK TO MAIN MENU</button>
                </div>
            </div>
        </div>
    )
}

export default GameModal;