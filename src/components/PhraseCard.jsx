import React from 'react';

function PhraseCard({ phrase, author }) {
	return (
		<article className="phrase-card">
			<q>{phrase}</q>
			<p>
				- <strong>{author}</strong>
			</p>
		</article>
	);
}

export default PhraseCard;
