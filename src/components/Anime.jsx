import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllData } from "../store/reducers/AnimeReducer";
import { useDispatch, useSelector } from "react-redux";

const Anime = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  //get anime based on id
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
    // console.log(data.data);
  };
  //get characters
  const getCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
    // console.log(data.data)
  };

  //initial render
  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);
  return (
    <div className=" h-fit w-[98.5vw] ">
      <div className=" flex ">
        <div className="left pt-[17vh] h-[95vh] w-[40vw] ">
          <div className="img h-[70vh] ml-[34vh] mt-[2vh] shadow-lg overflow-hidden rounded-[1vh] w-[25vw]  ">
            <img
              className="h-full w-full object-cover"
              src={images?.jpg.large_image_url}
              alt=""
            />
          </div>
        </div>
        <div className="right  pt-[15vh] h-[95vh] w-[60vw] ">
          <div className="anime-details flex flex-col gap-3 text-xl pt-[4vh] pl-[5vw]">
            <p>
              <span>Aired : </span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span>Rating : </span>
              <span>{rating}</span>
            </p>
            <p>
              <span>Rank : </span>
              <span>{rank}</span>
            </p>
            <p>
              <span>Score : </span>
              <span>{score}</span>
            </p>
            <p>
              <span>Scored By : </span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span>Popularity : </span>
              <span>{popularity}</span>
            </p>
            <p>
              <span>Status : </span>
              <span>{status}</span>
            </p>
            <p>
              <span>Source : </span>
              <span>{source}</span>
            </p>
            <p>
              <span>Season : </span>
              <span>{season}</span>
            </p>
            <p>
              <span>Duration : </span>
              <span>{duration}</span>
            </p>
          </div>
          <p className="description ml-[10vh] mt-[2vh] w-[32vw]">
            {showMore ? synopsis : synopsis?.substring(0, 250) + "..."}
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
      <div className="trailer-con ml-[5vw] w-[90vw] h-[80vh] mt-[5vh] bg-slate-50">
        {trailer?.embed_url ? (
          <iframe
            className=" h-full w-full object-cover "
            src={trailer?.embed_url}
            title="Inline Frame Example"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <h3>Trailer not available</h3>
        )}
      </div>
      <div className="characters pt-[5vw] border-none  pl-[6vw] flex  flex-wrap gap-20 ">
      {characters?.map((character, index) => {
                    const {role} = character
                    const {images, name, mal_id} = character.character
                    return <Link to={`/character/${mal_id}`} key={index}>
                        <div className="character ">
                            <div className="img h-[50vh] w-[18vw] border-none overflow-hidden rounded-[6px]" >

                            <img className=" h-full w-full object-cover" src={images?.jpg.image_url} alt="" />
                            </div>
                            <h4>{name}</h4>
                            <p>{role}</p>
                        </div>
                    </Link>
                })}
      </div>
    </div>
  );
};

export default Anime;
