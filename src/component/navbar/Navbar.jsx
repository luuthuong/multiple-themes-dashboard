import React,{useState} from 'react'

import './navbar.scss'

import './inputsearch.scss'

import './profile.scss'

import './notification.scss'

import userProfile from '../../assets/JsonData/user_menus.json'

import notifi from '../../assets/JsonData/notification.json'

import profileImg from '../../Template/profile.jpg'

import Dropdown from './../dropdown/Dropdown';

import Theme from './../theme/Theme';

import {useDispatch,useSelector} from 'react-redux'
import selector from './../../store/selector';
import { setAction } from './../../store/actions';

const InputSearch=() => {
    return (
        <div className="search">
            <input 
            className="search-input"
            type="text"
            placeholder="Search..." />
            <i className='bx bx-search' ></i>
        </div>
    )
}

const Profile=() => {
    const [activeDrop,setActiveDrop] =useState(false);
    return (
        <div 
        className="profile"                    
      >
            <div 
                className="profile__overview"
                onClick={() => setActiveDrop(!activeDrop)}
            >
                <img src={profileImg} alt="profile" />
                <div className="profile__overview__name">ThuongNguyen</div>
            </div>
            <div className="profile__detail">
                <Dropdown
                    className={`profile__detail__dropdown ${activeDrop?'active':''}`}
                    items={userProfile}
                    />
            </div>
        </div>
    );
}

const Notification=() => {
    const [activeDrop,setActiveDrop]=useState(false);
return (
    <div 
        className="notifi">
        <div 
            onClick={() => setActiveDrop(!activeDrop)}
            className="notifi__overview">
            <i className='bx bx-bell' ></i>
            <span>{notifi.length}</span>
        </div>
        <div className="notifi__detail" >
            <Dropdown
            className={`notifi__detail__dropdown ${activeDrop?'active':''}`}
                items={notifi}
            />
        </div>
    </div>
)
}

const Navbar = () => {
    const [activeTheme,setActiveTheme]=useState(false);

    const dispatch=useDispatch()
    const toggleTheme=useSelector(selector.getItem)
    return (
        <div className="navbar">
            <div className="navbar__left">
                <InputSearch />
            </div>
            <div className="navbar__right">
                <Profile />
                <Notification />
                <div className="navbar__right__theme">
                    <i onClick={()=> dispatch(setAction('Toggle_Theme',!toggleTheme))} className="bx bx-palette"></i>
                </div>
                <Theme 
                        onClick={
                                ()=>{
                                        
                                        dispatch(setAction('Toggle_Theme',false))
                                        setActiveTheme(!activeTheme)}
                                }
                        active={toggleTheme}/>
            </div>
        </div>
    );
}

export default Navbar