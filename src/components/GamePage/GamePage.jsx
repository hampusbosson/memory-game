import './GamePage.css';
import image from '../../assets/images/football-logo.png'
import { playerCards, cardBackSide } from '../../assets/images/player-cards/PlayerCards';
import GameModal from '../GameModal/GameModal';
import React, { useEffect, useState } from 'react';

//Fisher-Yates shuffle algorithm to shuffle card-array
function shuffleArray(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function getRandomCards(cards, count) {
    const shuffled = shuffleArray(cards);
    return shuffled.slice(0, count);
}

function GamePageContent({difficulty, setDifficulty, setGameResult}) {
    const toggleHomeButton = () => {
        setDifficulty(null);
    }

    const [randomCards, setRandomCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [winNumber, setWinNumber] = useState(0)
    const [gameDone, setGameDone] = useState(false);

    useEffect(() => {
        shuffleCards(); // Shuffle cards when the component mounts
    }, []);

    function shuffleCards() {
        let numOfCards = 0;
        if (difficulty === 'easy') {
            numOfCards = 3; 
            setWinNumber(5);
        } else if (difficulty === 'medium') {
            numOfCards = 4;
            setWinNumber(8);
        } else {
            numOfCards = 5; 
            setWinNumber(13);
        }
        const newRandomCards = getRandomCards(playerCards, numOfCards);
        setRandomCards(newRandomCards);
    }

    function playTurn(card) {
        setClickedCards(prevClickedCards => {
            const updatedClickedCards = [...prevClickedCards, card];
            if (clickedCards.length === winNumber - 1) {
                setGameResult('Win')
                setGameDone(true);
                return [];
            }
            if (prevClickedCards.some(clickedCard => clickedCard.name === card.name)) {
                if (bestScore < clickedCards.length) {
                    setBestScore(clickedCards.length);
                }
                setGameResult('Lose');
                setGameDone(true);
                return [];
            }
            return updatedClickedCards;
        });

        const styles = {
            transform: 'rotateY(180deg)'
        }

        const resetStyles = {
            transform: 'rotateY(0deg)'
        }

        const cardElements = document.querySelectorAll('.card');

        cardElements.forEach(element => {
            // Apply flip animation
            for (const property in styles) {
                if (styles.hasOwnProperty(property)) {
                    element.style[property] = styles[property];
                }
            }
        });

        setTimeout(() => {
            shuffleCards();
            // Apply reset flip animation
            cardElements.forEach(element => {
                for (const property in resetStyles) {
                    if (resetStyles.hasOwnProperty(property)) {
                        element.style[property] = resetStyles[property];
                    }
                }
            });
        }, 1400); //timeout to match CSS animation duration
    
    }

    return (
        <div className='gamepage-content'>
            <div className='top-container'>
                <img className='game-logo' src={image} alt="game-logo" onClick={toggleHomeButton}/>
                <div className='score-box'>
                    <p>Score: {clickedCards.length}</p>
                    <p>Best Score: {bestScore}</p>
                </div>
            </div>
            <div className='mid-container'>
                <div className='card-content'>
                <ul className='cards-list'>
                    {randomCards.map((card, index) => (
                        <li key={index} onClick={() => playTurn(card)}>
                            <div className='card-container'>
                                <div className='card'>
                                    <div className='card-front'>
                                        {card.image}
                                    </div>
                                    <div className='card-back'>
                                        {cardBackSide}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                </div>
                <div className='counter'>
                    <p>{clickedCards.length}/{winNumber}</p>
                </div>
            </div>
        </div>
    )
}

function GamePage( {difficulty, setDifficulty} ) {
    const [gameResult, setGameResult] = useState(null);

    return (
        <section className='gamepage'> 
            < GamePageContent 
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            setGameResult={setGameResult}
            />
            <GameModal 
            gameResult={gameResult}
            setGameResult={setGameResult}
            setDifficulty={setDifficulty}
            />     
        </section>
    )
}



export default GamePage;