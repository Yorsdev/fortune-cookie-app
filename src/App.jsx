import { useState } from 'react';
import phrases from '../src/phrases.json';
import { randomItem } from './utils/index.js';
import PhraseCard from './components/PhraseCard.jsx';
import Button from './components/Button.jsx';
import { img1, img2, img3, img4 } from './assets';

{
	/* Arreglo de imagenes */
}

const images = [img1, img2, img3, img4];

function App() {

	const [phrase, setPhrase] = useState(randomItem(phrases));
	const [image, setImage] = useState(randomItem(images));
	const [showAnimation, setShowAnimation] = useState(false);

	const changePhrases = () => {
		setShowAnimation(false);
	
		setTimeout(() => {
			setShowAnimation(true);
	
			setTimeout(() => {
				setShowAnimation(false);
				setPhrase(randomItem(phrases));
				setImage(randomItem(images));
			}, 1800);
		}, 10); 
	};

	return (
		<div className="container" style={{ backgroundImage: `url('${image}')` }}>
			<h1>Fortune cookie</h1>

			<PhraseCard phrase={phrase.phrase} author={phrase.author} />

			<Button handlePhrase={changePhrases}>Get a new phrase</Button>
			{showAnimation && <div className="animated-image"></div>}

		</div>
	);
}

export default App;