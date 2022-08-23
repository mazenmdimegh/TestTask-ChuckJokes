import axios from "axios";
import React, { useEffect, useState } from "react";
import search from '../../assets/assets_Homework_Front-End_01/search-copy@3x.png';
import arrow from '../../assets/assets_Homework_Front-End_01/path-copy-7.png';
import "./Home.scss";
import JokeCard from "../../components/JokeCard/JokeCard";
import { useParams } from "react-router";
import { AiOutlineStop } from "react-icons/ai"

const Home = () => {
    const { Keyy } = useParams();

    const [AllCategories, setAllCategories] = useState();
    const [Categories, setCategories] = useState();
    const [SelectedCategory, setSelectedCategory] = useState("");
    const [Toggle, setToggle] = useState(false);
    const [Keyword, setKeyword] = useState('');
    const [Jokes, setJokes] = useState();
    const [LoadedJokes, setLoadedJokes] = useState();
    const [IsPending, setIsPending] = useState(false);
    const test = [
        {
            "categories": [
                "explicit", "fashion"
            ],
            "created_at": "2020-01-05 13:42:18.823766",
            "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            "id": "5XQ7Aq6yRJeF976LbPNm8g",
            "updated_at": "2020-01-05 13:42:18.823766",
            "url": "https://api.chucknorris.io/jokes/5XQ7Aq6yRJeF976LbPNm8g",
            "value": "The Chuck Norris facts game is played out... And we should all stop contributing to this stupid shit! Unless your a dickless gamer that dwells on this Chuck Norris nonsense"
        },
        {
            "categories": [
                "explicit"
            ],
            "created_at": "2020-01-05 13:42:18.823766",
            "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            "id": "w6L_JOAYQa-jxfpKnPBMJg",
            "updated_at": "2020-01-05 13:42:18.823766",
            "url": "https://api.chucknorris.io/jokes/w6L_JOAYQa-jxfpKnPBMJg",
            "value": "Chuck Norris can make love to 500 women a day, while destroying all of the cock block ninjas that get in his way."
        }
    ];
    const searchByCategory = (category) => {
        setToggle(false)
        setSelectedCategory(category.toUpperCase())
        // console.log(test.filter(element => (element.categories.find(el => el == category)) != undefined))   
        axios.get(`https://api.chucknorris.io/jokes/search?query=all`)
            .then(res => {
                // console.log(res.data)
                const r = (res.data)["result"]
                // console.log(r);
                setJokes(r.filter(element => (element.categories.find(el => el == category)) != undefined))
                const rrr = (r.filter(element => (element.categories.find(el => el == category)) != undefined))
                // console.log(rrr);
                if (rrr.length > 6) {
                    setLoadedJokes(rrr.slice(0, 6));
                } else {
                    setLoadedJokes(rrr);
                }
                setIsPending(false)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const research = () => {
        // console.log(Keyword);
        if (Keyword == '') {
            axios.get(`https://api.chucknorris.io/jokes/search?query=all`)
                .then(res => {
                    // console.log(res.data)
                    setJokes(res.data["result"])
                    setLoadedJokes((res.data["result"]).slice(0, 6));
                    setIsPending(false)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            axios.get(`https://api.chucknorris.io/jokes/search?query=${Keyword}`)
                .then(res => {
                    // console.log(res.data)
                    setJokes(res.data["result"])
                    setLoadedJokes((res.data["result"]).slice(0, 6));
                    setIsPending(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    const LoadMore = () => {
        if (LoadedJokes.length + 6 < Jokes.length) {
            setLoadedJokes(Jokes.slice(0, LoadedJokes.length + 6))
        } else {
            setLoadedJokes(Jokes)
        }

    }
    const hideShowCategories = () => {
        if (Categories.length != AllCategories.length) {
            setCategories(AllCategories)
        } else {
            setCategories(AllCategories.slice(0, 7))
        }
    }
    const colors = [

        "rgb(51, 255,   0)",
        "#a3fcb3",
        "rgb(204, 255,   0)",
        "rgb(255, 255,   0)",
        "rgb(255, 204,   0)",
        "rgb(255, 102,   0)",
        "rgb(255,   0,   0)",
        "rgb(255,   0, 102)",
        "rgb(  0, 204, 255)",
        "#e3e891",
        "#92e8d5",
        "#96c8f2",
        "#ada8ff",
        "#ce94f7",
        "#ed94dd",
        "#fea8bb"
    ]
    // const colors = ["#ffebcd", "	#0000ff", "	#8a2be2", "#a52a2a	", "#deb887", "#5f9ea0	", "#7fff00", "d2691e", "#6495ed", "	#fff8dc", "	#dc143c", "#00ffff", "	#00008b", "	#8b008b", "	#9932cc", "	#2f4f4f", "	#00ced1", "	#9400d3", "	#228b22"]
    useEffect(() => {
        console.log(Keyy)
        axios.get("https://api.chucknorris.io/jokes/categories")
            .then(res => {
                // console.log(res.data)
                setAllCategories(res.data);
                setIsPending(false)
                setCategories((res.data).slice(0, 7))

                // console.log((AllCategories));
                // console.log(Categories);
            })
            .catch(err => {
                console.log(err)
            });
        if (Keyy != undefined) {
            axios.get(`https://api.chucknorris.io/jokes/search?query=${Keyy}`)
                .then(res => {
                    setJokes(res.data["result"]);
                    setLoadedJokes((res.data["result"]).slice(0, 6));
                    // console.log(LoadedJokes);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            axios.get("https://api.chucknorris.io/jokes/search?query=all")
                .then(res => {
                    setJokes(res.data["result"]);
                    setLoadedJokes((res.data["result"]).slice(0, 6));
                    // console.log(LoadedJokes);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err)
                })
        }


    }
        , []);

    return (
        <div>
            {/* <Navbar /> */}
            <div className="bitmap">
                <h1 className="title">The Joke Bible</h1>
                <h2 className="sub-title">Daily Laughs for you and yours</h2>
                <div className="input-wrapper">
                    <input value={Keyy} className="text-input" type="text" placeholder="How can we make you laugh today?" onChange={event => setKeyword(event.target.value)} />
                    <button onClick={() => research()}><img className='search' src={search} /></button>
                </div>
            </div>
            <div className="jokes-wrapper">
                <div className="jokes-buttons">
                    {Categories && Categories.map((category, index) => {
                        return (
                            <button key={index} onClick={() => searchByCategory(category)} style={{ backgroundColor: colors[index] }}>{category.toUpperCase()}</button>
                        );
                    }
                    )}
                    {Categories && Categories.length != AllCategories.length && (
                        <button className="viewAll" onClick={() => hideShowCategories()}>VIEW ALL<span><img className='arrow' src={arrow} /></span></button>
                    )}
                    {Categories && Categories.length == AllCategories.length && (
                        <button className="viewAll" onClick={() => hideShowCategories()}>VIEW LESS<span><img className='arrow Reversed' src={arrow} /></span></button>
                    )}
                </div>
                <div className="jokes-buttons-M">
                    <button className="btn" onClick={() => setToggle(!Toggle)}>Choose a Category</button>
                    {Toggle &&
                        <div className="popup-wrap">
                            {Categories && Categories.map((category, index) => {
                                return (
                                    <button key={index} onClick={() => searchByCategory(category)} style={{ backgroundColor: colors[index] }}>{category.toUpperCase()}</button>
                                );
                            }
                            )}
                            {Categories && Categories.length != AllCategories.length && (
                                <button className="viewAll" onClick={() => hideShowCategories()}>VIEW ALL<span><img className='arrow' src={arrow} /></span></button>
                            )}
                            {Categories && Categories.length == AllCategories.length && (
                                <button className="viewAll" onClick={() => hideShowCategories()}>VIEW LESS<span><img className='arrow Reversed' src={arrow} /></span></button>
                            )}
                        </div>
                    }
                </div>
                <div className="jokes-cards-container">
                    <hr />
                    {SelectedCategory != "" && (
                        <p className="social">{SelectedCategory}</p>
                    )}
                    {SelectedCategory == "" && (
                        <p className="social">All JOKES</p>
                    )}
                    <div className="jokes-List">
                        {LoadedJokes && LoadedJokes.map((joke, index) => {
                            return (
                                <JokeCard key={index} Joke={joke} />
                            );
                        })}
                        {LoadedJokes && LoadedJokes.length == 0 &&
                            <div className="stop-wrapper">
                                <AiOutlineStop className="Stop" />
                                <h3>No Jokes Available</h3>
                            </div>
                        }
                    </div>
                    {LoadedJokes && !(LoadedJokes.length < 7 && LoadedJokes.length === Jokes.length) &&
                        <button className="viewAll" onClick={() => LoadMore()}>VIEW More<span><img className='arrow Reversed' src={arrow} /></span></button>
                    }

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
export default Home;