let development = [];
let graphics = [];
let other = [];

function getJSON() {
    fetch('https://raw.githubusercontent.com/0xdane/dane.moe/main/assets/json/projects.json?token=GHSAT0AAAAAACJJT3K42RDBJMXFTUZMS5DAZLHHXCA').then (data => data.json()).then(data => {
          development.push(data.projects.development);
          graphics.push(data.projects.graphics);
          other.push(data.projects.other);

         console.log(development);
         console.log(graphics);
         console.log(other);

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
            let langColor = getLanguageColor(language);

            if (element.coverImage != "") {
                $("#dev-row").append(
                    "<div class=\"col-sm-6\">" +
                    "<div class=\"card d-flex flex-column\">" +
                    "<div class=\"card-body\">" +
                    "<img class=\"card-img-top responsive\" src=" + element.coverImage + " style=\"height: 197px;\" alt=\"Project image\">" +
                    "<a class=\"title-link\" href=" + element.sourceLink + "><h5 class=\"card-title\">" + element.title + "</h5></a>" +
                    "<p class=\"card-text\">" + element.description + "</p>" +
                    "<div class=\"proj-details\">" +
                    "<p class=\"card-language\"><span style=color:" + langColor + "><i class=\"fa-solid fa-circle\"></i></span> " + element.language + "</p>" +
                    "<a class=\"repo-name\" href=" + element.sourceLink + "><p><i class=\"fa-solid fa-code-branch\"></i> " + element.repoName + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                )
            } else {
                $("#dev-row").append(
                    "<div class=\"col-sm-6\">" +
                    "<div class=\"card d-flex flex-column\">" +
                    "<div class=\"card-body\">" +
                    "<a class=\"title-link\" href=" + element.sourceLink + "><h5 class=\"card-title\">" + element.title + "</h5></a>" +
                    "<p class=\"card-text\">" + element.description + "</p>" +
                    "<div class=\"proj-details\">" +
                    "<p class=\"card-language\"><span style=color:" + langColor + "><i class=\"fa-solid fa-circle\"></i></span> " + element.language + "</p>" +
                    "<p><i class=\"fa-solid fa-code-branch\"></i><a class=\"repo-name\" href=" + element.sourceLink + "> " + element.repoName + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                )
            }
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