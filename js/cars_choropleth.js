Plotly.d3.csv('https://raw.githubusercontent.com/TheDataMavericks/DK/master/js/choro_us.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: unpack(rows, 'code'),
    z: unpack(rows, 'inventory'),
    text: unpack(rows, 'state'),
    zmin: 0,
    zmax: 100000,
    colorscale: [
        [0, 'rgb(242,240,247)'], [5000, 'rgb(218,218,235)'],
        [15000, 'rgb(188,189,220)'], [50000, 'rgb(158,154,200)'],
        [75000, 'rgb(117,107,177)'], [100000, 'rgb(84,39,143)']
    ],
    colorbar: {
        title: 'Cars',
        thickness: 0.2
    },
    marker: {
        line:{
            color: 'rgb(255,255,255)',
            width: 2
        }
    }
}];


var layout = {
    title: 'US Car Sales by State',
    geo:{
        scope: 'usa',
        showlakes: true,
        lakecolor: 'rgb(255,255,255)'
    }
};

Plotly.plot(myDiv, data, layout, {showLink: false});
});