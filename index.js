const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (drivers) => {return drivers.slice(0, 2)}

const returnLastTwoDrivers = (drivers) => {return drivers.slice(2,4)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(){
    return function(fare,){
        return fare * 4
       
 }
}
 
const double = function fareDoubler(){
    return createFareMultiplier
    
}

function fareTripler(){
    return

}
   
const selectDifferentDrivers = function arrayOfDrivers(){
    return drivers.slice(0, 2)
    
    }
     

