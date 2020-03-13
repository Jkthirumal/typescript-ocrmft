// Import stylesheets
import "./style.css";

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

function getAccNum(userName, params, sortByCB, sortDirectionCB) {
  acctData.map(item => {
    console.log("User Info:");
    console.log(
      "Name: " +
        item.user +
        " Acct No: " +
        item.acctNum +
        " Balance: " +
        balance.find(bal => bal[item.acctNum])[item.acctNum]
    );
  });
  if(userName){
    console.log("Details of " + userName);
  var userData =
    typeof userName === "string" ? displayUserDetails(userName) : [];
  console.log(userData.map(item => item));
  if (userData.length > 0) {
    //Sory by callback
    if (sortByCB) {
      var res = sortByCB({ data: userData, options: params });
      if (res.length > 0) {
        //Sort direction callback
        if (sortDirectionCB) {
          var sortDirection =
            typeof sortDirectionCB === "function"
              ? params.sortDirection
              : "asc";
          var finalRes = sortDirectionCB({ data: res, sort: sortDirection });
          finalRes.map(item => {
            console.log(item);
          });
        }
      }
    }
  }
  }
  
}

function sortBy(obj) {
  return obj.data.map(item => {
    return item[obj.options.sortby];
  });
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
function sortDirection(params) {
  var finalData = [];
  switch (params.sort) {
    case "asc":
      if (isFloat(params.data[0])) {
        finalData = params.data.sort(function(a, b) {
          return a - b;
        });
      } else {
        finalData = params.data.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
      }
      break;
    case "desc":
      if (isFloat(params.data[0])) {
        finalData = params.data.sort(function(a, b) {
          return b - a;
        });
      } else {
        finalData = params.data.sort((a, b) => (a < b ? 1 : b < a ? -1 : 0));
      }
      break;
    default:
      break;
  }
  return finalData;
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
// Sample input sortby: "acctNum", sortby: "balance"
getAccNum(
  "Alice",
  {
    sortby: "acctNum",
    sortDirection: "desc"
  },
  sortBy,
  sortDirection
);
