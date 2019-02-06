const line_options={
    responsive: true,
    maintainAspectRatio: false,
    fill:true,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                display: false
                // color: '#eee'
            },

            scaleLabel: {
                display: true,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            display: false,
            gridLines: {
                display: false,
                color: "#eee"
            },
            scaleLabel: {
                // display: true,
                // labelString: 'Value'
            }
        }]
    }
}
const bar_options={
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                display: true,
                color: '#eee'
            },

            scaleLabel: {
                display: true,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                display: false
                // color: "#eee"
            },
            scaleLabel: {
                // display: true,
                // labelString: 'Value'
            }
        }]
    }
}
const pie_options={
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: false,
            gridLines: {
                display: false
                // color: '#eee'
            },

            scaleLabel: {
                display: true,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            display: false,
            gridLines: {
                display: false
                // color: "#eee"
            },
            scaleLabel: {
                // display: true,
                // labelString: 'Value'
            }
        }]
    }
}

export {line_options,bar_options,pie_options}