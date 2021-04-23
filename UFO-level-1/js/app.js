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
    var dateValue = dateValue.property("value");
    var dateInput = d3.select("#datetime");
    // use input to filter data by date
    let filterData = tableData.filter(item => item.datetime === dateInput)
    tbody.html(``);

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







