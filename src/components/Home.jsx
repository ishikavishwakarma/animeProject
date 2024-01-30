import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../store/reducers/AnimeReducer";
import '../App.css'
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  
  const data = useSelector((state) => {
    // console.log(state.animeReducer);
    return state.animeReducer;
  });
  const datahandler = () => {
    dispatch(getAllData(data));
  };
  useEffect(() => {
    dispatch(getAllData(data));
  }, []);
  // if (data.loading) {
  //   return <div>Loading...</div>;
  // }

  // if (data.error) {
  //   return <div>Error: {data.error}</div>;
  // }
  return (
    <div className="  badadiv  overflow-x-hidden snap-none ">
     
     <div className=" h-screen  w-screen flex flex-wrap gap-20 scroll-0 pt-[15vh] pl-24 pr-24 ">
     {data.users.data && Array.isArray(data.users.data) && data.users.data.map((elem) => (
       <Link
      //  href={`/home/${elem.mal_id}`}
      to={'/' + elem.mal_id}
       key={elem.mal_id}

   >
 <div   className="card  h-[68vh] w-[25vw] bg-zinc-100 px-6 py-4 rounded-md shadow-lg">
 <div    className="imgdiv  rounded-md overflow-hidden h-[55vh] w-[22vw] ">
  <img    className="h-full w-full object-cover" src={elem.images.jpg.large_image_url} alt="" />
 </div>
 <h3 className="mt-3 text-lg"  >{elem.title_english}</h3>
 <h3 className="text-lg"  > Total Episode {elem.episodes}</h3>
 <div className=" font-medium py-2 overflow-hidden text-sm h-[15vh]">

 {/* <p className="para  h-[100%] w-[100%] ">{elem.synopsis}</p> */}
 </div>
 </div>  
 </Link>
 ))}
 {/* <div className="card h-[48vh] w-[20vw] rounded-md shadow-lg bg-red-300 "></div>
 <div className="card h-[48vh] w-[20vw] rounded-md  shadow-lg bg-red-300 "></div>
 <div className="card h-[48vh] w-[20vw] rounded-md  shadow-lg bg-red-300 "></div>
 <div className="card h-[48vh] w-[20vw] rounded-md  shadow-lg bg-red-300 "></div> */}

     </div>
      {/* <button onClick={datahandler}> click me</button> */}
      {/* <h1>
      {data.users.data && Array.isArray(data.users.data) && data.users.data.map((elem) => (
          <li key={elem.mal_id}>{elem.title_english}</li>
        ))}
      </h1> */}
    </div>
  );
};

export default Home;
