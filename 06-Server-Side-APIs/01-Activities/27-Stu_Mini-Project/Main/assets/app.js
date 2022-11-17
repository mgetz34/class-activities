// fist look at the api dopcumentatoin an im going top choose and endpoint

//on all input fields. .value .val()

var resquestURL = ""

var searchItem;
var category;

// how do I include searchItem and category???? api documentation - query search category

var userRequestURL = "https://librarycongress.api/info" + searchTerm + category

fetch(userRequestURL)
    .then(function (response) {
        return response.json
    })
    .then(function (data) {
        console.log(data)
    })