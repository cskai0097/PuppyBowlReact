import React from "react";

const PlayerSearch = ({searchQuery, setSearchQuery}) => {
    return (
        <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{marginBottom: '20px', padding: '10px', width: '300px', fontSize: '16px'}}
        />
    );
};

export default PlayerSearch;