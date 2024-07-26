import Bellingham from './Bellingham.png';
import Benzema from './Benzema.png';
import Courtois from './Courtois.png';
import CristianoRonaldo from './Cristiano Ronaldo.png';
import DeBruyne from './De Bruyne.png';
import Griezmann from './Griezmann.png';
import Haaland from './Haaland.png';
import Kane from './Kane.png';
import Lewandowski from './Lewandowski.png';
import Mbappe from './Mbappe.png';
import Messi from './Messi.png';
import Modric from './Modric.png';
import Neuer from './Neuer.png';
import NeymarJr from './Neymar Jr.png';
import Salah from './Salah.png';
import VanDijk from './van Dijk.png';
import ViniJr from './Vini Jr..png';
import backside from './card-backside.png'

const playerCards = [
  { name: 'Bellingham', image: <img className='card' src={Bellingham} alt="Bellingham-card" /> },
  { name: 'Benzema', image: <img className='card' src={Benzema} alt="Benzema-card" /> },
  { name: 'Courtois', image: <img className='card' src={Courtois} alt="Courtois-card" /> },
  { name: 'Cristiano Ronaldo', image: <img className='card' src={CristianoRonaldo} alt="Cristiano Ronaldo-card" /> },
  { name: 'De Bruyne', image: <img className='card' src={DeBruyne} alt="De Bruyne-card" /> },
  { name: 'Griezmann', image: <img className='card' src={Griezmann} alt="Griezmann-card" /> },
  { name: 'Haaland', image: <img className='card' src={Haaland} alt="Haaland-card" /> },
  { name: 'Kane', image: <img className='card' src={Kane} alt="Kane-card" /> },
  { name: 'Lewandowski', image: <img className='card' src={Lewandowski} alt="Lewandowski-card" /> },
  { name: 'Mbappe', image: <img className='card' src={Mbappe} alt="Mbappe-card" /> },
  { name: 'Messi', image: <img className='card' src={Messi} alt="Messi-card" /> },
  { name: 'Modric', image: <img className='card' src={Modric} alt="Modric-card" /> },
  { name: 'Neuer', image: <img className='card' src={Neuer} alt="Neuer-card" /> },
  { name: 'Neymar Jr', image: <img className='card' src={NeymarJr} alt="Neymar Jr-card" /> },
  { name: 'Salah', image: <img className='card' src={Salah} alt="Salah-card" /> },
  { name: 'Van Dijk', image: <img className='card' src={VanDijk} alt="Van Dijk-card" /> },
  { name: 'Vini Jr', image: <img className='card' src={ViniJr} alt="Vini Jr-card" /> },
];

const cardBackSide = <img className='card-backside' src={backside} alt='card-back' />;

export {playerCards, cardBackSide}