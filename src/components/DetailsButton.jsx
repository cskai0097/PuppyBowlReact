import React from "react";

const DetailsButton = ({playerId}) => {
    //since this is a button, crete a function for event handling
    const handleDetailsClick = () => {
        console.log('Player ID: ', playerId)
    }
    return (
        <>
            <button onClick={handleDetailsClick}>See Details</button>
        </>
    )
}
export default DetailsButton