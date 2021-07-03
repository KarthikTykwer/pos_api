const mysql = require('mysql')

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root123",
  database: "POS",
  insecureAuth: true
});

function SaveCompanyData(data, companycallback) {
  var sql = "INSERT INTO companydetails (companyid, companyname, businesstype, companylogo) VALUES ('" + data.CompanyId + "', '" + data.CompanyName + "','" + data.BusinessType + "','')"; 
  DatabaseOperations(sql,companycallback);
}

function SaveCategoryDetails(data,categorycallback){
  var sql = "call CreateCategory('"+data.CategoryId+"','"+data.CategoryName+"','"+data.CategoryImage+"','"+data.CompanyId+"')"; 
  DatabaseOperations(sql,categorycallback);
}


function DatabaseOperations(query,callback){
  const myPromise = new Promise((resolve, reject) => {
    con.query(query, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
  myPromise.then(
    function (value, error) {
      callback(value, error);
    }
  );
}



module.exports = {
  SaveCompanyData: SaveCompanyData,
  SaveCategoryDetails:SaveCategoryDetails
}