// from data.js
var tableData = data;

// YOUR CODE HERE!
// ***LOADING DATA INTO HTML TABLE***
// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each ufo report object
tableData.forEach(function(ufoReport) {
console.log(ufoReport);

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");

// Step 3:  Use `Object.entries` to console.log each ufo report value
        Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);

// Step 4: Use d3 to append 1 cell per ufo report value
// Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
    });         
});

// ***CLICK FILTER BUTTON***
// Getting a reference to the button on the page with the id property
var button = d3.select("#filter-btn");
    button.on("click", function() {
        tbody.html("");
        // date selection using d3
            var selectDate = d3.select("#datetime");
        // Get the value property
            var valueReturn = selectDate.property("value");
                console.log(valueReturn);
        // Filter Data to get wanted data
            var filterData = tableData.filter(report => report.datetime === valueReturn);
        // check point
                console.log(filterData);
        //forEach filter
            filterData.forEach(function(input) {
                console.log(input);
        // Add data to table row
            var row = tbody.append("tr");
                Object.entries(input).forEach(function([key, value]) {
                    console.log(key, value);
                    var cell = row.append("td");
                    cell.text(value);
        });
    });
});