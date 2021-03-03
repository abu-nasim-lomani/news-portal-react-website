import React from 'react';
import './Card.css'

const Card = (props) => {
    const articles=props.news;
    return (
            <div className="card" style={{width:'100%'}}>
                    <div className="card-box" style={{display:'flex', alignItems: 'center',justifyContent: 'space-around', height:'100px'}}>
                        <div className="card-thum"> 
                            <img src={articles.urlToImage} alt="" style={{height:'80px', width:'150px', marginTop:'10px', borderRadius:'10px', marginLeft:'5px'}} />
                        </div>
                        <div className="detail">
                            <h3 className="title" style={{marginLeft:'10px', fontWeight:'400', fontSize:'17px'}}><a href={articles.url} target="_blank">{articles.title}</a></h3>
                        </div>
                    </div>
                </div>
    );
};

export default Card;