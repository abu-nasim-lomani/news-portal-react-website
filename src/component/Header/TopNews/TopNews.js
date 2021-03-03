import React from 'react';
import Card from '../Thumneil/Card';
import './TopNews.css'

const TopNews = (props) => {
    const News=props.news;

    const newsArticle=News.slice(0,5)
    return (
        <div className="topNews">
            <h1 style={{textAlign: 'center', fontSize:'46px', color:'tomato'}}>LATEST NEWS</h1>
            {
                newsArticle.map(nn=><Card news={nn}></Card>)
            }
        </div>
    );
};

export default TopNews;