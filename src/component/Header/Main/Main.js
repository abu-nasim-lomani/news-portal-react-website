import React, { useEffect, useState } from 'react';
import Thumneil from '../Thumneil/Thumneil';
import TopNews from '../TopNews/TopNews';
import './Main.css';

const Main = () => {
    const [news, setNews]=useState([]);
    useEffect(()=>{
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b558ae1ff816420f960ea242b2b00a3e')
      .then(res=>res.json())
      .then(data=>setNews(data.articles))
    },[]);
    return (
        <div className="main">
            <div className="thumneil">
            <Thumneil news={news}></Thumneil>
            </div>
            <div className="top-post">
                <TopNews news={news}></TopNews>
            </div>
        </div>
    );
};

export default Main;