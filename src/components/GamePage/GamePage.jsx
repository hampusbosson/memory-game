import './GamePage.css';
import image from '../../assets/images/football-logo.png'
import playerCards from '../../assets/images/player-cards/PlayerCards';
import React, { useEffect, useState } from 'react';

function shuffleArray(array) {
    let m = array.length, t, i;

    // While there remain elements to shuffle...
    while (m) {
        // Pick a remaining element...
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
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

function GamePage({difficulty, setDifficulty}) {
    const toggleHomeButton = () => {
        setDifficulty(null);
    }

    const [randomCards, setRandomCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [winNumber, setWinNumber] = useState(0)

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
            setWinNumber(12);
        }
        const newRandomCards = getRandomCards(playerCards, numOfCards);
        setRandomCards(newRandomCards);
    }

    function playTurn(card) {
        setClickedCards(prevClickedCards => {
            const updatedClickedCards = [...prevClickedCards, card];
            console.log("Clicked Cards: ", updatedClickedCards); // Debug: Log clicked cards
            if (prevClickedCards.some(clickedCard => clickedCard.name === card.name)) {
                if (bestScore < clickedCards.length) {
                    setBestScore(clickedCards.length);
                }
                return [];
            }
            return updatedClickedCards;
        });
        shuffleCards();
    }

    return (
        <section className='gamepage'>
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
                            {card.image}
                        </li>
                    ))}
                </ul>
                </div>
                <div className='counter'>
                    <p>{clickedCards.length}/{winNumber}</p>
                </div>
            </div>
        </section>
    )
}

export default GamePage;