import React from 'react';
import logo from '../../image/images.png';
import './Header.css';
import moment from 'moment';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
    const showData = new Date();
    const displayDate = showData.getDay() + '/' + showData.getMonth() + '/' + showData.getFullYear();
    const displayTime = showData.getHours() + ':' + showData.getMinutes();
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <div className="nav">
                <div className="nav-icon">
                    <HomeIcon style={{ fontSize: 40, marginLeft: 100 }} />
                </div>
                <div className="nav-menu">
                    <ul>
                        <li>Top News</li>
                        <li>International</li>
                        <li>Education</li>
                        <li>Sport</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;