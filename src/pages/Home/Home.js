import axios from "axios";
import React, { useEffect, useState } from "react";
import search from '../../assets/assets_Homework_Front-End_01/search-copy@3x.png';
import arrow from '../../assets/assets_Homework_Front-End_01/path-copy-7.png';
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import JokeCard from "../../components/JokeCard/JokeCard";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    const [AllCategories, setAllCategories] = useState();
    const [Categories, setCategories] = useState();
    const [SelectedCategory, setSelectedCategory] = useState("");
    const [Keyword, setKeyword] = useState('');
    const [Jokes, setJokes] = useState();
    const [LoadedJokes, setLoadedJokes] = useState();
    const [IsPending, setIsPending] = useState(false);

    const searchByCategory = (category) => {
        setSelectedCategory(category.toUpperCase())
        axios.get(`https://api.chucknorris.io/jokes/search?query=${category}`)
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
    const research = () => {
        console.log(Keyword);
        if (Keyword == '') {
            axios.get(`https://api.chucknorris.io/jokes/search?query=all}`)
                .then(res => {
                    console.log(res.data)
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
    const colors = ["#ffebcd", "	#0000ff", "	#8a2be2", "#a52a2a	", "#deb887", "#5f9ea0	", "#7fff00", "d2691e", "#6495ed", "	#fff8dc", "	#dc143c", "#00ffff", "	#00008b", "	#8b008b", "	#9932cc", "	#2f4f4f", "	#00ced1", "	#9400d3", "	#228b22"]
    useEffect(() => {
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

        axios.get("https://api.chucknorris.io/jokes/search?query=all")
            .then(res => {
                setJokes(res.data["result"]);
                setLoadedJokes((res.data["result"]).slice(0, 6));
                console.log(LoadedJokes);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err)
            })

    }
        , []);

    return (
        <div>
            <Navbar />
            <div className="bitmap">
                <h1 className="title">The Joke Bible</h1>
                <h2 className="sub-title">Daily Laughs for you and yours</h2>
                <div className="input-wrapper">
                    <input className="text-input" type="text" placeholder="How can we make you laugh today?" onChange={event => setKeyword(event.target.value)} />
                    <button onClick={() => research()}><img className='search' src={search} /></button>
                </div>
            </div>
            <div className="jokes-wrapper">
                <div className="jokes-buttons">
                    {Categories && Categories.map((category, index) => {
                        return (
                            <button onClick={() => searchByCategory(category)} style={{ backgroundColor: colors[index] }}>{category.toUpperCase()}</button>
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
                <div className="jokes-cards-container">
                    <hr />
                    {SelectedCategory != "" && (
                        <p className="social">{SelectedCategory}</p>
                    )}
                    {SelectedCategory == "" && (
                        <p className="social">All JOKES</p>
                    )}
                    <div className="jokes-List">
                        {LoadedJokes && LoadedJokes.map(joke => {
                            return (
                                <JokeCard Joke={joke} />
                            );
                        })}
                        {/* <JokeCard />
                        <JokeCard />
                        <JokeCard />
                        <JokeCard />
                        <JokeCard />
                        <JokeCard /> */}
                    </div>
                    {LoadedJokes&&!(LoadedJokes.length < 7 && LoadedJokes.length === Jokes.length) &&
                        <button className="viewAll" onClick={() => LoadMore()}>VIEW More<span><img className='arrow Reversed' src={arrow} /></span></button>
                    }

                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;