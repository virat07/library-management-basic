function Descript(arg) {
    console.log(arg);
    var xml = new XMLHttpRequest();
    xml.open('GET', "http://www.json-generator.com/api/json/get/cfLWfikmdK?indent=2", true);
    xml.onload = function () {
        var user = JSON.parse(this.responseText);

        CategoryFunction(user, arg);

    }
    xml.send(null);
}
function CategoryFunction(user, arg) {
    var output = '';

    for (var i = 0; i < user[arg].length; i++) {
        output += "<div class='row'>";
        output += "<div class='column'>" + user[arg][i].name + "</div>";
        output += "<div class = 'column'>" + user[arg][i].description + "</div>";
        output += "<div class='column'>" + user[arg][i].category + "</div>";
        output += "</div>";
    }


    document.getElementById('base').innerHTML = output;
    output = '';

}

function getAll() {
    console.log('clicked');
    var xhttp = new XMLHttpRequest();
    xhttp.open('Get', "http://www.json-generator.com/api/json/get/cfLWfikmdK?indent=2", true);
    xhttp.onload = function () {
        var users = Object.keys(JSON.parse(this.responseText));
        var user = JSON.parse(this.responseText);
        var output = '';


        for (var i in user) {

            for (var j in user[i]) {
                output += "<div class='row'>";
                output += "<div class='column'>" + user[i][j].name + "</div>";
                output += "<div class = 'column'>" + user[i][j].description + "</div>";
                output += "<div class='column'>" + user[i][j].category + "</div>";
                output += '</div>';
                

            }

        }
        document.getElementById('base').innerHTML = output;
        output = '';


    }


    xhttp.send(null);
}


    








    // http://www.json-generator.com/api/json/get/bTIGJZgvsi?indent=2