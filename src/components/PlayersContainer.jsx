// Inside PlayersContainer.jsx
import React, { useEffect, useState } from "react";
import Players from "./Players";
import PlayerSearch from "./PlayerSearch";

const PlayersContainer = () => {
    const [players, setPlayers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [refresh, setRefresh] = useState(false); 

    useEffect(() => {
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b/players')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            return response.json();
        })
        .then(data => {
            setPlayers(data.data.players); 
        })
        .catch(error => {
            console.error('There was an error fetching the players', error);
        });

    }, [refresh]); // update on refresh change

    const handlePlayerDeleted = () => {
        setRefresh(prev => !prev); // for togglin the refrehs state
    };

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <PlayerSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Players players={filteredPlayers} onPlayerDeleted={handlePlayerDeleted} />
        </div>
    );
};

export default PlayersContainer;
