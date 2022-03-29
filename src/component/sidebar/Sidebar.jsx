import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import  './sidebar.scss'
import clsx from 'clsx'
import 'boxicons'
import sidebarjson from '../../assets/JsonData/sidebar_routes.json'

    const Sidebar = (props) => {
        const [activeItem,setActiveItem]=useState(0);
    return (
        <div className={`sidebar ${props.active ? 'active' : ''}`}>
        <div className="sidebar__logo">
            <i className="bx bxl-deviantart"></i>
            <span className="header-logo">NLT</span>
        </div>
        <div className="sidebar__feature">
            {
                sidebarjson.map((item,index) => {
                    return (
                        <Link 
                            className={`feature-item ${activeItem===index? 'activeItem':''}`}
                            key={index} 
                            onClick={() =>setActiveItem(index)}
                            to={item.route}>
                            <i className={item.icon}></i>
                            <div className="feature__name">{item.display_name}</div>
                        </Link>
                    )
                })
            }
        </div>
        </div>
    );
};

export default Sidebar