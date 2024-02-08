import React from "react";

const DeleteButton = ({ playerId, onPlayerDeleted }) => {
    const handleDelete = () => {
        fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b/players/${playerId}`,{
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            onPlayerDeleted();
        })
        
        .catch(error => {
            console.error('Error:',error);
        });
    };

    return (
        <button onClick={handleDelete}>Delete Player</button>
    )
};



export default DeleteButton