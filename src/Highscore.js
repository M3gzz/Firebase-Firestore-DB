import { useState, useEffect } from "react";
import {getHighscore, uploadHighscore} from './firebase_firestore';

function Highschore() {

    const [currentHighscore, setCurrentHighscore] = useState(0);

    useEffect(() => {
        
        const getData = async () => {
            let result = await getHighscore();
            setCurrentHighscore(result);
        }
        
        getData();

    }, [])


       const handleFormSubmission = async (event) => {
        event.preventDefault(); 
        let result = await uploadHighscore(event.target.newScore.value);
        setCurrentHighscore(event.target.newScore.value);
       } 



    return (
        <div>
            <h3>Current Highscore {currentHighscore}</h3>
            <form onSubmit={handleFormSubmission}>
                <input type='number'  id='newScore' placeholder={0} />
                <button type='submit'>Upload New Highscore</button>
            </form>
        </div>
    )
}

export default Highschore;