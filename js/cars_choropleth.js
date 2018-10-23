Plotly.d3.csv('https://raw.githubusercontent.com/TheDataMavericks/DK/master/js/choro_us.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var scl = [[0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],[0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],[0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']];

      var data = [{
          type:'scattergeo',
          locationmode: 'USA-states',
          lon: unpack(rows, 'Longitude'),
          lat: unpack(rows, 'Latitude'),
          hoverinfor:  unpack(rows, 'State'),
          text:  unpack(rows, 'inventory'),
          mode: 'markers',
          marker: {
              size: 8,
              opacity: 0.8,
              reversescale: true,
              autocolorscale: false,
              symbol: 'square',
              line: {
                  width: 1,
                  color: 'rgb(102,102,102)'
              },
              colorscale: scl,
              cmin: 0,
              color: unpack(rows, 'inventory'),
              colorbar: {
                  title: 'Inventory of Cars across USA'
              }
          }
      }];
  
  
      var layout = {
          title: 'Most Cars per State',
          colorbar: true,
          geo: {
              scope: 'usa',
              projection: {
                  type: 'albers usa'
              },
              showland: true,
              landcolor: 'rgb(250,250,250)',
              subunitcolor: 'rgb(217,217,217)',
              countrycolor: 'rgb(217,217,217)',
              countrywidth: 0.5,
              subunitwidth: 0.5
          }
      };
  
      Plotly.plot(myDiv, data, layout, {showLink: false});
  
  });