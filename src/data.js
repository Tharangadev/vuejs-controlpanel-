const linechart_data ={
    labels: ["01", "02", "03", "04", "05", "06","07","08","09","10","11","12"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 34, 44, 33, 24,21,42,21,22,25,22],
        backgroundColor:'#f68c98cc',
        borderColor:'#f68c98cc',
        borderWidth: 0.5
    },
        {

            data: [22, 32, 34, 24, 32, 12,33,14,21.54,45,21,23],
            backgroundColor:'#365d7ecc',
            borderColor:'#365d7ecc',
            borderWidth: 0.5
        }]
}
const barchart_data ={
    labels: ["01", "02", "03", "04", "05", "06"],
    datasets: [{
        label: 'new users',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#f68c98cc',
        borderColor:'#f68c98',
        borderWidth: 0.5
    }]
}
const piechat_data ={
    labels: ["01", "02", "03", "04", "05", "06"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            '#f8b195' ,
            '#f47482' ,
            '#bd6981' ,
            '#6b5a7a'  ,
            '#365d7e'
        ],
        borderColor:'transparent',
        borderWidth: 0.5
    }]
}
export  {barchart_data,piechat_data,linechart_data}

