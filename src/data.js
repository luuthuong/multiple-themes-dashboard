
const optionsData = {
    MixChart: {
        options: {

            chart: {
                id: 'basic-bar',
                background: '#ffffff',
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "60%"
                }
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            markers: {
                size: 5,
                strokeWidth: 2,
                fillOpacity: 0,
                strokeOpacity: 0,
                hover: {
                    size: 8
                }
            },
            yaxis: {
                tickAmount: 5,
                min: 0,
                max: 100
            },
            theme: {
                mode: 'light'
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '12px'
            }
        },
        series: [
            {
                name: 'Online ',
                type: 'column',
                data: [40, 70, 20, 90, 36, 80]
            },
            {
                name: 'Store ',
                type: 'column',
                data: [40, 30, 70, 80, 40, 16]
            },
            {
                name: 'Offline ',
                type: 'column',
                data: [22, 33, 20, 45, 67, 80]
            },
            {
                name: 'Different ',
                type: 'line',
                data: [22, 45, 20, 56, 67, 87]
            },
        ],
    },

    Radial: {
        options: {
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            offsetY: -20,
                            show: true,
                            color: "#888",
                            fontSize: "13px"
                        },
                        value: {
                            formatter: function (val) {
                                return val;
                            },
                            color: "#111",
                            fontSize: "30px",
                            show: true
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ["#ABE5A1"],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: ["Percent"]
        },
        series: [82]
    }

}

const topCustomerData = {
    header: [
        'User',
        'Total Orders',
        'Total Spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const lastCustomerData={
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const optionsTheme={
    mode:[
        {
            id: 'light',
            name: 'Light',
        },
        {
            id: 'dark',
            name: 'Dark',
        }
    ],
    color:[
        {
            id: 'color-blue',
            name: 'Blue',
        },
        {
            id: 'color-red',
            name: 'Red',
        },
        {
            
            id: 'color-cyan',
            name: 'Cyan',
        },
        {
            id: 'color-green',
            name: 'Green',
        },
        {
            id: 'color-orange',
            name: 'Orange',
        },
    ]
}

export { optionsData,topCustomerData,lastCustomerData ,optionsTheme}