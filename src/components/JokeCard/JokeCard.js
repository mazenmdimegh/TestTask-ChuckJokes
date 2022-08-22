import arrow from '../../assets/assets_Homework_Front-End_01/path-copy-3.png';
import orangeLight from '../../assets/assets_Homework_Front-End_02/orange-light@3x.png';
import React, { useEffect, useState } from "react";
import "./JokeCard.scss";


const JokeCard = (Joke) => {
    const aa = {
        "categories": [],
        "created_at": "2020-01-05 13:42:18.823766",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "MlP1e4owRr-PyO9kIqlAfg",
        "updated_at": "2020-01-05 13:42:18.823766",
        "url": "https://api.chucknorris.io/jokes/MlP1e4owRr-PyO9kIqlAfg",
        "value": "Chuck Norris stopped at a stop sign, it turned green. Someone once asked Chuck Norris for advice, he's know dead. Chuck Norris saw a man tell his gf \"you take my breathe away\" he kicked him in the chest and said \"wrong\" Even Chuck Norris shadows is scared of him. Someone thought prank calling Chuck Norris from across the world would keep him save, he kicked him through the phone. When Chuck Norris dies he doesn't go to heaven or hell, he goes to Olympus"
    }
    // const [Toggle, setToggle] = useState(false);
    return (
        <div className="card-wrapper">
        <div className="card-wrap">
            <h5><span><img className='orangeLight' src={orangeLight} /></span>lawyer Joke</h5>
            <p className='joke-text'>{aa["value"]}</p>
            <div className='seestats'>SEE STATS<span><img className='arrow' src={arrow} /></span></div>
        </div>
        </div>
    );
}
export default JokeCard;