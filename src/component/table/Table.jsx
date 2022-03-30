import React from 'react'

import './table.scss'

import { topCustomerData } from '../../data';

import { useSelector,useDispatch } from 'react-redux';

import selector from '../../store/selector';

import { setAction } from './../../store/actions';

const Page=(props) => {
    return <div className="page">{props.children}</div>;
}

const Table = (props) => {
   
    
return (
    <div>
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>{props.header}</tr>
                </thead>
                <tbody>{props.body}</tbody>
            </table>
        </div>
        {props.body.length >= 10 ? (
            <Page>
                <div className="table-page">
                    {props.body.map((item, i) => {
                        return (
                            <div key={i} className="page">
                                {i + 1}
                            </div>
                        );
                    })}
                </div>
            </Page>
        ) : null}
    </div>
);
}

export default Table