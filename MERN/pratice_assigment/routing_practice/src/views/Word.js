import React from 'react';
import { useParams } from 'react-router-dom';

const Word = (props) => {
    const {word} = useParams();
    return(
        <div>
            {
                isNaN(word)? <h2>The world is: {word}</h2> : <h2>The number is: {word}</h2>
            }
        </div>
    )
}

export default Word;