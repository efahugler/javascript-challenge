var tableData = data;

// create tbody variable to use when appending data
var tbody = d3.select("tbody");

// append objects from data.js into new table rows inside table body
tableData.forEach(sighting => {
    let tr = tbody.append("tr");
    tr.append("td").text(sighting.datetime);
    tr.append("td").text(sighting.city);
    tr.append("td").text(sighting.state);
    tr.append("td").text(sighting.country);
    tr.append("td").text(sighting.shape);
    tr.append("td").text(sighting.durationMinutes);
    tr.append("td").text(sighting.comments);
});

console.log(tableData);
// create button variable to be used in function
let button = d3.select("#filter-btn");

// function that will get user input from form and use it to filter upon clicking button
button.on("click", function() {
    // make variables for inputs and values for date and city
    let dateValue = dateValue.property("value");
    let dateInput = d3.select("#datetime");
    let cityview = d3.select("#city").property("value");
    let stateview = d3.select("#state").property("value"); 
    let countryview= d3.select("#country").property("value");
    let shapeview = d3.select("#shape").property("value");

    // use input to filter data by date
    let filterData = tableData; 
    if (dateInput){
        filterData = filterData.filter(row => row.datetime === dateInput)
    }
    if (cityview){
        filterData = filterData.filter(row => row.city === cityview);
    }
    if (stateview){
        filterData = filterData.filter(row => row.state === stateview)
    }

    if (countryview){
        filterData = filterData.filter(row => row.country === countryview)
    }

    if (shapeview){
        filterData = filterData.filter(row => row.shape === shapeview)
    }

    // adding filtered data
    filterData.forEach(sighting => {
        let tr =tbody.append("tr");
        tr.append("td").text(sighting.datetime);
        tr.append("td").text(sighting.city);
        tr.append("td").text(sighting.state);
        tr.append("td").text(sighting.country);
        tr.append("td").text(sighting.shape);
        tr.append("td").text(sighting.durationMinutes);
        tr.append("td").text(sighting.comments);
    });
console.log(filterData);
});
