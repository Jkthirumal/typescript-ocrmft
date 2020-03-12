// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var acctData = [
  {
    acctNum: "AAA-1234",
    user: "Alice"
  },
  {
    acctNum: "AAA-4652",
    user: "Bob"
  },
  {
    acctNum: "AAA-7895",
    user: "Alice"
  },
  {
    acctNum: "AAA-5896",
    user: "Bob"
  },
  {
    acctNum: "AAA-5684",
    user: "Alice"
  }
];

var balance = [
  {
    "AAA-1234": "4582.25"
  },
  {
    "AAA-4652": "25554.25"
  },
  {
    "AAA-7895": "7596.25"
  },
  {
    "AAA-5896": "254555.25"
  },
  {
    "AAA-5684": "254444.25"
  }
];

function getAccNum(userName, filterByName, direction) {
  var userData = typeof userName === "string" ? displayUserDetails(userName) : [];
  var filterdData = typeof filterByName === "string" ? sortBy(filterByName) : [];
  var finalRes = direction? sortDirection(direction) : sortDirection();
  // console.log(filterdData);
  function sortBy(key) {
    return userData.map(item => {
      return item[filterByName];
    });
  }
  function sortDirection(direction="asc") {
    var finalData = [];
    switch (direction) {
      case "asc":
        finalData = filterdData.sort(function(a,b) { return a - b;});
       // finalData = filterdData.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
        break;
      case "desc":
        //finalData = filterdData.sort((a, b) => (a < b ? 1 : b < a ? -1 : 0));
        finalData = filterdData.sort(function(a,b) { return b - a;});
        break;
      default:
        console.log("No sort type mentioned.");
        break;
    }
    finalData.map(item => {
      console.log(item);
    });
  }
  return acctData.map(item => {
    return item.acctNum;
  });
}

function displayUserDetails(userName) {
  return acctData
    .filter(item => {
      return item.user === userName;
    })
    .map(user => {
      let result = {
        ...{ balance: balance.find(item => item[user.acctNum])[user.acctNum] },
        ...user
      };
      return result;
    });
}

console.log(getAccNum("Alice", "balance","asc"));
//sortDirection();
