class Rocket{
    //name properties first
    constructor(
        fuelType,
        weight,
        power
    ){
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    //we have properties, now we need methods
    launch(){
        console.log("launch sequence started");
        alert("Warning! Launch Sequence Initiated");
        return true;
    }

    refuel(){
        console.log("refuel sequence started");
        alert("Refueling Process Initiated");
        return true;
    }

    detachThruster(thrusterID){
        console.log("refuel sequence started");
        alert("Thruster " + this.thrusterID + " has been successfully detached");
        return true;
    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("the spacecraft " + this.spacecraft +
        " will launch on " + this.launchDateDay + 
        " of " + this.launchDateMonth + " " + this.launchDateYear + 
        " with an oxygen level of" + this.oxyLvl + "%");
    }

    launch(){
        alert("launch sequence for " + this.spaceCraft + " has begun");
    }
}

function display(){
    console.log("displayFall started");
    fallLaunch.displayMissionParameters();

}

function display(){
    console.log("displaySpring started");
    springLaunch.displayMissionParameters();


}