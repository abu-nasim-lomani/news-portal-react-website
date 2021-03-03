import React, { useEffect, useState } from 'react';
import './Marquee.css'

const Marquee = () => {
    const [news, setNews]=useState([]);
    useEffect(()=>{
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b558ae1ff816420f960ea242b2b00a3e')
      .then(res=>res.json())
      .then(data=>setNews(data.articles))
    },[]);
    const News=news.slice(0, 1);

    return (
        <marquee style={{float:'left'}}>
            {
                News.map(art => <li style={{marginTop:'7px'}}>{art.title}</li>)
            }
        </marquee>
    );
};

export default Marquee;