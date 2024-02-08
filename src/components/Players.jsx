import React from "react";
import DetailsButton from "./DetailsButton";
import DeleteButton from "./DeleteButton";

export default function Players({ players, onPlayerDeleted }) {
    console.log('Players:', players);
    return (
        <div>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <img src={player.imageUrl} alt={player.name} style={{ width: '90px', height: '110px', margin: '20px 20px 0px 20px'}}/>
                        {player.name} - {player.breed}
                        <DetailsButton playerId={player.id}/>
                        <DeleteButton playerId={player.id} onPlayerDeleted={onPlayerDeleted}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
