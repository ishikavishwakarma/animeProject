import React, { useEffect, useState } from 'react';

const Manga = () => {
  const [manga, setManga] = useState({});
  const [showMore, setShowMore] = useState(false);

  const getManga = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=manga&sfw`);
      const data = await response.json();
      setManga(data.data);
    } catch (error) {
      console.error('Error fetching manga:', error);
    }
  };

  useEffect(() => {
    getManga();
  }, []);
console.log(manga);
  return (
    <div className=' pt-[17vh] flex flex-wrap pl-[9vh] gap-12'>
      {Object.keys(manga).map((key) => (
      <div key={key}>
        <div key={key} className="img h-[50vh] w-[20vw] border-none shadow-xl overflow-hidden rounded-[6px]">
          <img className="h-full w-full object-cover" src={manga[key].images?.jpg.large_image_url} alt="" />
        </div>
        {/* <h3>{manga[key].synopsis}</h3> */}
        <p key={key} className="description mt-[2vh] w-[17vw]">
            {showMore ? manga[key].synopsis : manga[key].synopsis?.substring(0, 100) + "..."}
            <button key={key} className='text-slate-700'
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Show Less" : ".."}
            </button>
          </p>
      </div>
        
      ))}
    </div>
  );
};

export default Manga;
