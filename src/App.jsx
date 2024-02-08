import React, { useState } from 'react';
import './App.css';
import AddPlayerForm from './components/AddPlayerForm';
import PlayersContainer from './components/PlayersContainer';

function App() {
    const [refreshTrigger, setRefreshTrigger] = useState(false);

    // Define triggerRefresh function
    const triggerRefresh = () => {
        setRefreshTrigger(prev => !prev);
    };

    return (
        <>
            <h2>Create a new player</h2>
            <AddPlayerForm onPlayerAdded={triggerRefresh} />
            <h1>PuppyBowl</h1>
            <PlayersContainer refreshTrigger={refreshTrigger} setRefreshTrigger={setRefreshTrigger} />
        </>
    );
}

export default App;
