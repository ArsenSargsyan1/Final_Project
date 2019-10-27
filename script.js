
//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let killerCountElement = document.getElementById('killerCount');
    let mardCountElement = document.getElementById('mardCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let weatherElement = document.getElementById('weather');
    let prkichElement = document.getElementById('prkich');

    //
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let killerCountLiveElement = document.getElementById('killerLiveCount');
    let mardCountLiveElement = document.getElementById('mardLiveCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');
    let prkichLiveElement = document.getElementById('prkichLive');


    //! adding socket listener on "data" <-- nnpm noame, after that fire 'drawCreatures' function 


    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        killerCountElement.innerText = data.killerCounter;
        mardCountElement.innerText = data.mardCounter;
        predatorCountElement.innerText = data.predatorCounter;
        weatherElement.innerText = data.weather;
        prkichElement.innerText = data.prkich;
        //
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        killerCountLiveElement.innerText = data.killerLiveCounter;
        mardCountLiveElement.innerText = data.mardLiveCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;
        prkichLiveElement.innerText = data.prkichLive;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side);
        //! clearing background by setting it to new grey color

        background('#acacac');




        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {

                    if (data.weather == "Գարուն") {
                        fill("rgb(171, 228, 171)")
                    }
                    else if (data.weather == "Ամառ") {
                        fill("#008c00")
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#7da913")
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#c9fdd5")
                    }
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2) {
                    if (data.weather == "Գարուն") {
                        fill("#ff8c2b")
                    }
                    else if (data.weather == "Ամառ") {
                        fill("#f87100")
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#c95c00")
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#ffcf3e")
                    }
                }
                else if (matrix[y][x] == 3) {
                    if (data.weather == "Գարուն") {
                        fill("#ff3649")
                    }
                    else if (data.weather == "Ամառ") {
                        fill("#ec0c21")
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#c30416")
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#ff5464")
                    }
                }
                else if (matrix[y][x] == 4) {
                    if (data.weather == "Գարուն") {
                        fill("#21b4cb")
                    }
                    else if (data.weather == "Ամառ") {
                        fill("#3bb0c1")
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#0093a8")
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#50e9ff")
                    }
                }
                else if (matrix[y][x] == 5) {
                    if (data.weather == "Գարուն") {
                        fill("#3d464e")
                    }
                    else if (data.weather == "Ամառ") {
                        fill("#2a3138")
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#090a0a")
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#4a5050")
                    }
                } else if (matrix[y][x] == 6) {
                    if (data.weather == "Գարուն") {
                        fill("#e9ecef")
                    }
                    else if (data.weather == "Ամառ") {
                        fill("#dde2e6")
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#9fa9b3")
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#ffffff")
                    }

                }
                rect(y * side, x * side, side, side);
            }

        }

    }
}