// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    })
    .then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    })
    let destination = pickPlanet(listedPlanets)
    console.log(destination)
    addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.imageUrl);
    

    let form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
        event.preventDefault();

        if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty") {
            alert("Invalid Input for Fuel Level")
        }            
        if (validateInput(cargoMass) === "Not a Number" || validateInput(cargoMass) === "Empty") {
            alert("Invalid Input for Cargo Mass")
        }
        if (validateInput(pilotName) === "Is a Number" || validateInput(pilotName) === "Empty") {
            alert("Invalid Input for Pilot")
        }
        if (validateInput(copilotName) ==="Empty" || validateInput(pilotName) === "Is a Number") {
            alert("Invalid Input for Co-pilot")
        }
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    }
    )
    
 });