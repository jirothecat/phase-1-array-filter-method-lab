// 1st Test
function findMatching(driversArray,driverName){
    //const driverName = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
    const result = driversArray.filter(name => {
        return name.toUpperCase() === driverName.toUpperCase()
});
    return result;
}

// 2nd Test
function fuzzyMatch(driversArray,letter){
    return driversArray.filter(driversArray => 
        driversArray.startsWith(letter));
}

// 3rd Test
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }