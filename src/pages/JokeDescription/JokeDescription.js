import back from '../../assets/assets_Homework_Front-End_01/back.svg';
import axios from "axios";
import React, { useEffect, useState } from "react";
import arrow from '../../assets/assets_Homework_Front-End_02/arrow-left@3x.png';
import search from '../../assets/assets_Homework_Front-End_01/search-copy@3x.png';
import dislike from '../../assets/assets_Homework_Front-End_01/hand-copy@3x.png';
import like from '../../assets/assets_Homework_Front-End_01/hand@3x.png';
import "./JokeDescription.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


const JokeDescription = () => {
    const { id } = useParams();
    const [Toggle, setToggle] = useState(false);
    const [Joke, setJoke] = useState("");
    const [Jokes, setJokes] = useState("");
    const [Like, setlike] = useState(365);
    const [Dislike, setdislike] = useState(98);
    const [Keyword, setKeyword] = useState('');

    const dislik = () => {
        if (Dislike == 98) {
            setdislike(99);
        } else {
            setdislike(98);
        }
    }
    const lik = () => {
        if (Like == 365) {
            setlike(366)
        } else {
            setlike(365)
        }
    }
    const research = () => {
        window.location.replace("/" + Keyword)

    }
    const NEXT = () => {
        // console.log(Jokes.findIndex((element) => element.id == id));
        const Index = Jokes.findIndex((element) => element.id == id);
        const NextId = Jokes[Index + 1]["id"];
        window.location.replace("/joke/" + NextId)

    }
    const PREV = () => {
        const Index = Jokes.findIndex((element) => element.id == id);
        const prevId = Jokes[Index -1]["id"];
        window.location.replace("/joke/" + prevId)
    }
    useEffect(() => {
        axios.get(`https://api.chucknorris.io/jokes/${id}`)
            .then(res => {
                setJoke(res.data);
                // console.log(res.data);
                // setIsPending(false);
                // console.log((res.data)["categories"])
                axios.get(`https://api.chucknorris.io/jokes/search?query=all`)
                    .then(r => {
                        const rr = (r.data)["result"]
                        // console.log(r);
                        setJokes(rr.filter(element => (element.categories.find(el => el == (res.data)["categories"][0])) != undefined))
                        // setJokes(r.data);
                        // console.log(rrr.data);
                        // setIsPending(false);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })


    }
        , []);
    https://api.chucknorris.io/jokes/9veGz70ITaiX79LaZroK_g
    return (
        <div>
            <div className="bitmap">
                <h1 className="title">The Joke Bible</h1>
                <h2 className="sub-title">Daily Laughs for you and yours</h2>
                <div className="input-wrapper">
                    <input className="text-input" type="text" placeholder="How can we make you laugh today?" onChange={event => setKeyword(event.target.value)} />
                    <button onClick={() => research()}><img className='search' src={search} /></button>
                </div>
            </div>
            <div className="JokeDescription">
                <div>
                    <Link className='Link' to="/" ><img className='arrow' src={arrow} /><img className='back' src={back} /></Link>
                </div>
                <div className='JokeDescription-wrapper'>
                    <div className='job-desc'>
                        <div className='job-'>
                            <div className='title-wrap'>
                                {Joke&& Joke["categories"][0]!=undefined&&
                                <li className="social">{Joke["categories"][0].toUpperCase()}</li>
                            }
                            {Jokes && Joke["categories"][0]==undefined&& 
                                <li className="social">ALL JOKES</li>
                            }
                                <li className="TRENDING">TRENDING</li>
                            </div>
                            <div className='title'>

                                <h1>The Granny Joke</h1>
                                <h4>_____________________________  </h4>
                                <h4 className='No'>  NO #1</h4>
                            </div>
                            <p className='p'>{Joke.value}</p>
                        </div>

                        <div className='like-dislike-container'>
                            <div className='like-dislike'>
                                <button className={Like == 366 ? 'like likepress' : 'like'} onClick={lik}>
                                    <img className='arrow' src={like} />
                                    <p>{Like}</p>
                                </button>
                                <button className={Dislike == 99 ? 'dislike dislikepress' : 'dislike'} onClick={dislik}>
                                    <img className='arrow' src={dislike} />
                                    {Dislike &&
                                        <p>{Dislike}</p>
                                    }
                                </button>
                            </div>
                            <div className='prev-next'>
                            {Jokes&& Jokes.findIndex((element) => element.id == id)!=0&&<button onClick={PREV} ><span><img className='arrow-prev reversed' src={arrow} /></span>PREV.JOKE</button>}
                                {Jokes&& Jokes.findIndex((element) => element.id == id)<(Jokes.length-1)&&<button onClick={NEXT} >NEXT.JOKE<span><img className='arrow-next' src={arrow} /></span></button>}
                            </div>
                        </div>
                    </div>
                    <div className='top10'>
                        <h4>the top 10 jokes this week</h4>
                        <p>Smoking Joke</p>
                        <p>My Boss Joke</p>
                        <p>Dirty Millionaire Joke</p>
                        <p>The annoying neighbour</p>
                        <p>Knock Knock</p>
                        <p>Why Tyson lisps</p>
                        <p>The drunk police officer</p>
                        <p>My hip dad (Dad joke)</p>
                        <p>What not to say in an elevator</p>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default JokeDescription;