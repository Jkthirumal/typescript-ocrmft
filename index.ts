// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var acctData = [
  {
    "acctNum":"AAA-1234",
    "user":"Alice"
  },
  {
    "acctNum":"AAA-4652",
    "user":"Bob"
  },
  {
    "acctNum":"AAA-7895",
    "user":"Alice"
  },
  {
    "acctNum":"AAA-5896",
    "user":"Bob"
  },
  {
    "acctNum":"AAA-5684",
    "user":"Alice"
  }
];

var balance = [
  {
    "AAA-1234" : "4582.25"
  },
  {
    "AAA-4652" : "254.25"
  },
  {
    "AAA-7895" : "7596.25"
  },
  {
    "AAA-5896" : "254.25"
  },
  {
    "AAA-5684" : "254.25"
  }
];
var userObj = {
  accInfo: acctData,
  bal: balance
}
//user
//sortBy
//sortDirection
// var obj = {
//   user: function(name) {
//     console.log(acctData.filter(item=> { return item.user === name; }));
//   },
//   ,
  // Given values for accData and balances below, write a function that returns only an array of 
  // account number, and accepts the fullowing optional params
  // user, sortBy("acctNum," or "balance");
  // sortDirection("asc"/"dsc", default to asc)
// }
function soryBy(sortType) {
    console.log(acctData.filter(item=> { return item.user === name; }));
  }
function sortDirection(direction = 'asc') {
    switch(direction) {
      case 'asc':
        console.log(acctData.sort((a,b) => (a.user < b.user) ? 1 : ((b.user < a.user) ? -1 : 0)));
      break;
      case 'desc':
        console.log(acctData.sort((a,b) => (a.user < b.user) ? 1 : ((b.user < a.user) ? -1 : 0)));
      break;
      default:
        console.log('No sort type mentioned.');
      break;
    }
  }
var userFunc = function getAccNum(userName, sortBy, sortDirection){
  ( typeof userName === "string")? displayUserDetails(userName): '';
  
  return acctData.map(item=>{ return item.acctNum});

}
function displayUserDetails(userName) {
  console.log(userName+'\'s '+'Account Details:'+'\n'+'----------------------------'+'\n'+'Account Number : Balance'+'\n');
  filterBy.call(userObj,'user', userName);
}
function filterBy(key, data) {
  this.accInfo.filter(item=> { return item[key] === data; }).map(item=>{
      console.log(item.acctNum+':'+balance[item.acctNum]);
  })
}
var test = userFunc('Bob');
 //sortDirection();
console.log(test);


