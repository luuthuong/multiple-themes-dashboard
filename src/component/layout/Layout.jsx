import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";

import MyRouter from "../router/MyRouter";

import Sidebar from "./../sidebar/Sidebar";

import Navbar from './../navbar/Navbar';

import selector from '../../store/selector'

import './layout.scss'

const Layout = () => {
	let color=useSelector(selector.getColor)
	let theme=useSelector(selector.getTheme)


	return (
		<BrowserRouter>
		<div className={`layout ${color} ${theme}`}>
			<Sidebar />
			<div className="layout__content">
				<Navbar/>
			<div className="layout__content__main">
				<MyRouter />
			</div>
			</div>
		</div>
		</BrowserRouter>
	);
	};

export default Layout;
