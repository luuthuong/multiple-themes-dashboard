import React from "react";
import Table from "./../component/table/Table";
import listCustomer from "../assets/JsonData/customers-list.json";
import { useDispatch, useSelector } from "react-redux";
import { setAction } from "./../store/actions";
import selector from "./../store/selector";

const header = [
    "id",
    "name",
    "email",
    "location",
    "phone",
    "total spend",
    "total order",
];

const tableRenderCustomer = {
    header: (header) =>
        header.map((item, index) => {
            return <th key={index}>{item}</th>;
        }),
    body: (body) =>
        body.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.location}</td>
                    <td>{item.phone}</td>
                    <td>{item.total_spend}</td>
                    <td>{item.total_orders}</td>
                </tr>
            );
        }),
};
const Customer = () => {
    const dispatch = useDispatch();
    const loadDefaultData = useSelector(selector.getDataTable);
    React.useEffect(() => {
        const data = listCustomer.slice(0, 10);
        dispatch(setAction("Load_Data_Table", data));
    }, []);
    return (
        <div>
            <Table
                header={tableRenderCustomer.header(header)}
                body={tableRenderCustomer.body(loadDefaultData)}
                limit={10}
            />
        </div>
    );
};

export default Customer;
