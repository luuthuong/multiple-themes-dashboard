import React from 'react';

import './dashboard.scss';

import statusCard from '../../assets/JsonData/status-card-data.json'

import Card from '../../component/card/Card';

import Chart from "react-apexcharts";

import {optionsData,topCustomerData,lastCustomerData} from '../../data';

import Table from './../../component/table/Table';

import { Link } from "react-router-dom";

import {useDispatch,useSelector} from 'react-redux'

import { setAction } from './../../store/actions';

import selector from './../../store/selector';

const Dashboard = (props) => {
    const theme=useSelector(selector.getTheme);
    const dispatch=useDispatch()

const tableRenderCustomer ={
    header:(header)=>header.map((item,index)=>{
        return(
            <th key={index}>{item}</th>
    )
    }),
    body:(body)=>body.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.username}</td>
                <td>{item.order}</td>
                <td>{item.price}</td>
            </tr>
        )
    }),
    bodyLastCus:(body)=>body.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.user}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
                <td><span className={`status-item ${item.status}`}>{item.status}</span></td>
            </tr>
        )
    }),
}
    return (
        <div className="overview-content">
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-5">
                    <div className="row  ">
                        {statusCard.map((item, index) => {
                            return (
                                <div key={index} className="col-5">
                                    <Card
                                        icon={item.icon}
                                        title={item.title}
                                        count={item.count}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-5 wraper">
                    <Chart
                        options={theme.includes('dark')?{
                            ...optionsData.MixChart.options,
                            theme:{
                                mode: 'dark'
                            },
                            chart:{
                                background:'#2d2d2d'
                            }
                        }:optionsData.MixChart.options}
                        series={optionsData.MixChart.series}
                        height="300px"
                        width="100%"
                        type="line"
                    />
                </div>
                <div className="row">
                    <div className="col-3 container">
                        <div className="header-title-table">
                            <h3>Top Customer</h3>
                        </div>
                        <Table
                            header={tableRenderCustomer.header(topCustomerData.header)}
                            body={tableRenderCustomer.body(topCustomerData.body)}
                        />
                        <div className="table-footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>

                    <div className="col-6 container">
                        <div className="header-title-table">
                            <h3>Last Customer</h3>
                        </div>
                        <Table
                            header={tableRenderCustomer.header(lastCustomerData.header)}
                            body={tableRenderCustomer.bodyLastCus(lastCustomerData.body)}
                        />
                        <div className="table-footer">
                            <Link  to="/">view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard