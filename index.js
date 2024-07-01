// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

 
function findMatching(drivers, query){
const lowerCaseQuery = query.toLowerCase()

   const matchingList = drivers.filter((name) => name.toLowerCase().includes(lowerCaseQuery)
);
return matchingList
}
console.log(matchingList)





function fuzzyMatch(drivers,query){
const lowerCaseQuery = query.toLowerCase()

const letterMatching = drivers.filter(name =>{
     const  lowerCaseName = name.toLowerCase();
     
    if(lowerCaseName.startsWith(lowerCaseQuery)){
        return true;
    }
    const lastCase = lowerCaseName.indexOf(' ' + lowerCaseQuery);
    if(lastCase !== -1 && lastCase !== 0){
        return true
    }
    return false
}) 
return letterMatching
}
console.log(letterMatching)


function matchName(driver,query){

    const matchingDrivers = drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase()
);
return matchingDrivers
}
console.log (matchingDrivers)