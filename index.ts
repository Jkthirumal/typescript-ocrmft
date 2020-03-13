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
 
function getAccNum(userName, options,  sortByCB, sortDirectionCB) {
  var userData = typeof userName === "string" ? displayUserDetails(userName) : [];
  if(userData.length>0)
  {
    //Sory by callback
    var res = sortByCB({"data": userData, "options":options});
    if(res.length >0){
      //Sort direction callback
     var sortDirection =  typeof sortDirectionCB === "function" ? options.sortDirection:  "asc";
     var finalRes =  sortDirectionCB({"data": res, "sort":sortDirection})
     finalRes.map(item => {
      console.log(item);
    });
    }
  }
} 
function sortBy(obj){
  return obj.data.map(item => {
      return item[obj.options.sortby];
    });
}
 
getAccNum("Alice", {
    sortby: "balance",
    sortDirection: "dsc"
}, sortBy, sortDirection);

function sortDirection(params) {
    var finalData = [];
    switch (params.sort) {
      case "asc":
        finalData = params.res.sort(function(a,b) { return a - b;});
       // finalData = filterdData.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
        break;
      case "desc":
        //finalData = filterdData.sort((a, b) => (a < b ? 1 : b < a ? -1 : 0));
        finalData = params.res.sort(function(a,b) { return b - a;});
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


//sortDirection();
