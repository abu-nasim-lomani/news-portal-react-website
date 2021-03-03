import React from 'react';
import './Thumneil.css'
import ThumPost from './ThumPost';

const Thumneil = (props) => {
    const news=props.news;
    const thumnei=news.slice(14, 15);
    return (
        <div className="thumneil">
            {
                thumnei.map(thumP=><ThumPost thumpost={thumP}></ThumPost>)
            }
        </div>
    );
};

export default Thumneil;