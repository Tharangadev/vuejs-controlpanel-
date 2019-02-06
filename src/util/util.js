export default (tabledata) => {
    return {
        graph: {
            labels: tabledata.map((data) => data.user),
            datasets: [{
                label: '# of Votes',
                data: tabledata.map((data) => data.values),
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 0.5
            }]
        }
    }

}