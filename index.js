// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    if (start >= 42) {
        return start - 42
    } else {
        return 42 - start
    }
};

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264
}

function distanceTravelledInFeet(from, to) {
    if (from >= to) {
        return (from - to) * 264
    } else {
        return (to - from) * 264
    }
};

function calculatesFarePrice(from, to) {
    if (distanceTravelledInFeet(from, to) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(from, to) > 400 && distanceTravelledInFeet(from, to) <= 2000) {
        return (distanceTravelledInFeet(from, to) - 400) * 0.02
    } else if (distanceTravelledInFeet(from, to) > 2000 && distanceTravelledInFeet(from, to) <= 2500) {
        return 25
    } else if (distanceTravelledInFeet(from,to) > 2500) {
        return "cannot travel that far"
    }
}