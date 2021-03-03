import React from 'react';

const ThumPost = (props) => {
    const thumpost=props.thumpost;
    return (
        <div className="thum-post">
            <h1 style={{textAlign:'center', fontSize:'33px', fontWeight:'900', color:'darkstateblue'}}>{thumpost.title}</h1>
            <img src={thumpost.urlToImage}  style={{width:'100%', boxShadow:'2px ​3px  5px  lightgrey', borderRadius:'20px'}} alt=""/>
            <h3>Author:{thumpost.author}</h3>
            <h2 style={{fontWeight:'400', fontFamily:'sans-serif'}}>{thumpost.description}</h2>
        </div>
    );
};

export default ThumPost;