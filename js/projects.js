let development = [];
let graphics = [];
let music = [];

function getJSON() {
    fetch('https://raw.githubusercontent.com/0xdane/dane.moe/main/assets/json/projects.json?token=GHSAT0AAAAAACJJT3K5OMSALRC6IVH3SPRGZLGNYDQ').then (data => data.json()).then(data => {
          development.push(data.projects.development);
          graphics.push(data.projects.graphics);
          music.push(data.projects.music);

         console.log(development);
         console.log(graphics);
         console.log(music);

        populateDevelopment();
        populateGraphics();
        populateMusic();
    })
    .catch(error => {
        console.log(error);
    })
}

function populateDevelopment() {
    if (development[0].length == 0) {
        $("#dev-row").append("<h3 style=\"text-align: center;\">There are currently no development projects!</h3>")
    } else {
        for (var i = 0; i < development[0].length; i++) {
            $("#dev-row").append(
                "<div class=\"col-sm-6\">" +
                "<div class=\"card d-flex flex-column\">" +
                "<div class=\"card-body\">" +
                "<a href=" + development[0][i].sourceLink + "><h5 class=\"card-title\">" + development[0][i].title + "</h5></a>" +
                "<p class=\"card-text\">" + development[0][i].description + "</p>" +
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
        for (var i = 0; i < development[0].length; i++) {
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

function populateMusic() {
    if (music[0].length == 0) {
        $("#music-row").append("<h3 style=\"text-align: center;\">There are currently no music projects!</h3>")
    } else {
        for (var i = 0; i < music[0].length; i++) {
            $("#music-row").append(
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