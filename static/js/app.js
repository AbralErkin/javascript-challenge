// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var button2 = d3.select("#show_all");

tableData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
//tbody.html("");
 

button.on("click", function() {
   
    tbody.html("");
// Select the input element and get the raw HTML node
    var inputData = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputData.property("value");
  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
  });

  button2.on("click", function() {
   
    tbody.html("");
    tableData.forEach((ufoInfo) => {
        var row = tbody.append("tr");
        Object.entries(ufoInfo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
  });