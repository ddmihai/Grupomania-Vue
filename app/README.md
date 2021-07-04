### ---------------------------------------------------------------------------------------------------------------------------------------
### http://localhost:3000/api/login  ###
# POST METHOD
* Requires an object { username: username, password: password }
* Return an object with user information object and token 
{
    "user": {
        "emp_ID": 72,
        "emp_fname": "Mihaitza",
        "emp_lname": "Boss",
        "emp_username": "administrator",
        "emp_password": "$2b$10$mgHw5KyV2NBEXDoVUdBADOKS5RtgngA7/lD2Tz1puziy5EIy.D/sa",
        "emp_admin": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcyLCJpYXQiOjE2MjM3NDk5ODEsImV4cCI6MTYyMzc2NDM4MX0MFFoS0yinqmr3Lgxl4eqpDtoW66K6053Zwm__JCmySk"
} 





### ---------------------------------------------------------------------------------------------------------------------------------------
### http://localhost:3000/api/signup ###
# POST METHOD
* Requires an object with the fowwloing 
{
    "fname": "testing",
    "lname": "admin",
    "username": "tedawddawdsting",
    "password": "testing"
}
This also populate the store with the right informations




### ---------------------------------------------------------------------------------------------------------------------------------------
### http://localhost:3000/api/status/ + username ###
# POST METHOD
* Requires params username
* Requires an object
Retrieve the username from the store
{
    "adminUsername" : "ddd",
    "isAdmin": 0
}
* Returns an message




### ---------------------------------------------------------------------------------------------------------------------------------------
### http://localhost:3000/api/delete/ + username ###
# DELETE METHOD
* Require params the username which can be found in the store



### ---------------------------------------------------------------------------------------------------------------------------------------
### http://localhost:3000/api/get/posts ###
# POST METHOD
* Doesnt require any body.
* use a middleware JWT
