import React,{useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'

import './theme.scss'

import 'boxicons'

import {optionsTheme} from '../../data'
import { setAction } from './../../store/actions';
import selector from './../../store/selector';


// bx bx-check
const RenderContentTheme = (props) =>{
    const reducer=useDispatch();
    const color=useSelector(selector.getColor)
    const theme=useSelector(selector.getTheme)
    return (
        <div>
            <h4 className="title">{props.title}</h4>
            <div>
                {props.data.map((item, index) => (
                    <div key={index} className="theme-options">
                        <div 
                            onClick={
                                () =>reducer(setAction(props.action,item.id))
                        }
                            className="theme-options__container">
                            <div className={`symbol-theme ${item.name.toLowerCase()}`}>
                            <i className={item.id===color||item.id===theme?'bx bx-check':''}></i>
                            </div>
                            <span>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Theme = (props) => {


  return (
    <div className={`theme ${props.active?'active':''}`}>
        <div className="theme__header">
        <h4>Theme Setting</h4>
        <i
        onClick={props.onClick}
        className='bx bx-collapse-alt' ></i>
        </div>
        <div className="theme__content">
        <RenderContentTheme
            title="Choose Mode"
            data={optionsTheme.mode}
            action='Select_Theme'
        />
        <RenderContentTheme
            title="Choose Color"
            data={optionsTheme.color}
            action='Select_Color'
        />
        </div>
    </div>
  )
}

export default Theme