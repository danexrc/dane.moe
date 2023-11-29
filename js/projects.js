let development = [];
let graphics = [];
let other = [];

function getJSON() {
    fetch('https://raw.githubusercontent.com/0xdane/dane.moe/main/assets/json/projects.json?token=GHSAT0AAAAAACJJT3K5OMSALRC6IVH3SPRGZLGNYDQ').then (data => data.json()).then(data => {
          development.push(data.projects.development);
          graphics.push(data.projects.graphics);
          other.push(data.projects.other);

         console.log(development);
         console.log(graphics);
         console.log(music);

        populateDevelopment();
        populateGraphics();
        populateOther();
    })
    .catch(error => {
        console.log(error);
    })
}

function getLanguageColor(language) {
    switch(language) {
        case "C#":
            return "#178701";
        case "JavaScript":
            return "#f1e05a";
        case "TypeScript":
            return "#3178c6";
        case "HTML":
            return "#e44c27";
        case "CSS":
            return "#563e7c";
    }
}

function populateDevelopment() {
    if (development[0].length == 0) {
        $("#dev-row").append("<h3 style=\"text-align: center;\">There are currently no development projects!</h3>")
    } else {
        for (const element of development[0]) {
            let language = element.language;
            let langColor = getLanguageColor(language)

            $("#dev-row").append(
                "<div class=\"col-sm-6\">" +
                "<div class=\"card d-flex flex-column\">" +
                "<div class=\"card-body\">" +
                "<a href=" + element.sourceLink + "><h5 class=\"card-title\">" + element.title + "</h5></a>" +
                "<p class=\"card-text\">" + element.description + "</p>" +
                "<p class=\"card-language\"><span style=" + langColor + "><i class=\"fa-solid fa-circle\"></i></span>" + element.language + "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            )
        }
    }
}

function populateGraphics() {
    if (graphics[0].length == 0) {
        $("#graphics-row").append("<h3 style=\"text-align: center;\">There are currently no graphics projects!</h3>")
    } else {
        for (let i = 0; i < development[0].length; i++) {
            $("#graphics-row").append(
                "<div class=\"col-sm-6\">" +
                "<div class=\"card d-flex flex-column\">" +
                "<div class=\"card-body\">" +
                "<a href=" + graphics[0][i].sourceLink + "><h5 class=\"card-title\">" + graphics[0][i].title + "</h5></a>" +
                "<p class=\"card-text\">" + graphics[0][i].description + "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            )
        }
    }
}

function populateOther() {
    if (other[0].length == 0) {
        $("#other-row").append("<h3 style=\"text-align: center;\">There are currently no music projects!</h3>")
    } else {
        for (let i = 0; i < other[0].length; i++) {
            $("#other-row").append(
                "<div class=\"col-sm-6\">" +
                "<div class=\"card d-flex flex-column\">" +
                "<div class=\"card-body\">" +
                "<a href=" + music[0][i].sourceLink + "><h5 class=\"card-title\">" + music[0][i].title + "</h5></a>" +
                "<p class=\"card-text\">" + music[0][i].description + "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            )
        }
    }
}