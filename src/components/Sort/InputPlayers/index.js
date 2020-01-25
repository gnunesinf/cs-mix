import React, { useEffect } from 'react';

import { dataPlayers } from './../../../data/players';
import { useState } from 'react';

import { InputContainer } from './styles';	

function InputPlayers() {
	const randomCount = 1;

	const [playersSelected, setPlayersSelected] = useState([]);

	function handlePlayer(event, player) {
		event.target.classList.add("is--active");
		setPlayersSelected([...playersSelected, player]);
	}

	function removePlayer(playerClicked) {
		const actualPlayerIndex = playersSelected.findIndex(player => player.steamID == playerClicked.steamID);
		const actualPlayersSelected = [...playersSelected];
		actualPlayersSelected.splice(actualPlayerIndex, 1);

		const actualPlayers = actualPlayersSelected;
		setPlayersSelected(actualPlayers);

		const playerBtn = document.getElementById(playerClicked.steamID);
		playerBtn.classList.remove("is--active");
	}

	return (
		<InputContainer >
			<div className="input__selectors">
				{dataPlayers.map(player => (
					<button className="input__btn" key={player.steamID} id={player.steamID} onClick={(event) => handlePlayer(event, player)}>{player.nick}</button>
					))}
				<button className="input__btn is--random" data-nickname={`data-random${randomCount}`}>random</button>
			</div>
			<div className="input__info">
				<div className="input__message">Jogadores selecionados:</div>
				<div className="input__players">
					{playersSelected.map((player, index) => (
						<button key={player.steamID} className="input__player-label" onClick={() => removePlayer(player)}>
							<p>{player.nick}</p>
							<i>x</i>
							{playersSelected[index + 1] ? (<span> , </span>) : ""}
						</button>
					))}
				</div>
			</div>
		</InputContainer>
	)
}

export default InputPlayers;