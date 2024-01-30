import React, { useEffect, useState } from 'react';

const Manga = () => {
  const [manga, setManga] = useState({});

  const getManga = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=magzines&sfw`);
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
      </div>
        
      ))}
    </div>
  );
};

export default Manga;
