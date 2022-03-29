import React from 'react'
import './table.scss'
import { topCustomerData } from '../../data';

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
            {
                props.body.length>10?<Page>
                {
                    props.body.map((item, i) =>{
                        return (
                            <span>{}</span>
                        )
                    })
                }
                </Page>:null
            }
    </div>
);
}

export default Table