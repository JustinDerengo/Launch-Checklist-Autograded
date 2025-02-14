// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML =
    `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${image}">
    `
 }
 
 function validateInput(testInput) {
    if (testInput.length == 0) {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    return "Is a Number";
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let status = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    

        if (fuelLevel < 10000 && cargoLevel >= 10000) {
            list.style.visibility = "visible";
            status.style.color = "red";
            status.innerHTML = "Shuttle Not Ready for Launch";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else if (cargoLevel >= 10000) {
            list.style.visibility = "visible";
            status.style.color = "red";
            status.innerHTML = "Shuttle Not Ready for Launch";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else if (fuelLevel < 10000) {
            list.style.visibility = "visible";
            status.style.color = "red";
            status.innerHTML = "Shuttle Not Ready for Launch";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        } else {
            list.style.visibility = "visible";
            status.style.color = "green";
            status.innerHTML = "Shuttle is Ready for Launch";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
    }
 
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;