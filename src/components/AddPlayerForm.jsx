import { useState } from "react";

const AddPlayerForm = ({onPlayerAdded}) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault() //prevents the form from refreshing the page

        const newPlayer = {
            name,
            breed,
        };
    
        console.log('Submitting new player', newPlayer)
        //adding player - so use post method by after fetching
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b/players',{ //acc not acct, broken link
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlayer),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            //just use name and breed
            setName('')
            setBreed('')
            onPlayerAdded(); // call the callback function passed from app,jsx
        })
        .catch((error) => {
            console.error('Error', error);
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="breed">Breed:</label>
                <input 
                    type="text"
                    id="breed"
                    value={breed}
                    onChange={(e)=> setBreed(e.target.value)}
                />
            </div>
            <button type="submit">Add Player</button>
        </form>
    );
};



export default AddPlayerForm