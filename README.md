REST API to add user and add Event for that user in database using Postman :

TECH USED: Nodejs(Express, Mongoose) for creating API  ,MongoDb datbase to store the data and Postman to test the API

HOW TO EXECUTE CODE:
 As I had already Installed NPM packages (Express , Mongoose) . U is to simply start the mongod process in your terminal to connect to the database . And after that run the app.js file with command node app.js on terminal . And after that see on terminal If server started successfully and we are connected to databse .
 And then we are ready to test our methods of the API using postman .
 <img width="1440" alt="Screenshot 2021-11-25 at 8 15 18 AM" src="https://user-images.githubusercontent.com/72152598/143373580-04b95d34-9b22-49eb-b507-1f0bb3d64810.png">

 
 
API METHODS:
1. POST METHOD: This method is to add user in the database using postman , In this method user is to provide name , gender , emailId of the user in postman post request body and when user send the request then user data is added to the databse which will include an auto generated UID for that user .
<img width="1440" alt="Screenshot 2021-11-25 at 8 49 57 AM" src="https://user-images.githubusercontent.com/72152598/143374246-b344c6df-0616-4dd3-b5d8-b2ccbcdfb297.png">
<img width="1440" alt="Screenshot 2021-11-25 at 8 50 06 AM" src="https://user-images.githubusercontent.com/72152598/143374278-61a6e64b-6518-4bc5-8394-78afa0d6422b.png">
<img width="1440" alt="Screenshot 2021-11-25 at 8 50 19 AM" src="https://user-images.githubusercontent.com/72152598/143374302-3bdeda46-92b0-4e05-8dd4-936cb77a643c.png">


2. GET METHOD: This method is to fetch data from the database and Display all users data with their Events , In this method u just need to click on get request .
<img width="1440" alt="Screenshot 2021-11-25 at 8 54 37 AM" src="https://user-images.githubusercontent.com/72152598/143374501-cb70302f-d95a-415e-bfc3-fc3920c7ce37.png">
<img width="1440" alt="Screenshot 2021-11-25 at 8 54 57 AM" src="https://user-images.githubusercontent.com/72152598/143374639-dd42af04-479d-4e6f-8a9d-f4b736bf4951.png">

3. DEL METHOD: This method is to delete user targetted by it's id . In this method user is to provide the I'd of the user whome user want to get deleted and just click on send request it will be deleted from the databse .
<img width="1440" alt="Screenshot 2021-11-25 at 8 59 56 AM" src="https://user-images.githubusercontent.com/72152598/143375285-2db9b8d1-2b4c-44fc-943f-64180c087484.png">
<img width="1440" alt="Screenshot 2021-11-25 at 9 00 06 AM" src="https://user-images.githubusercontent.com/72152598/143375325-cc837e8d-105d-4f64-9602-9b22a7586c2c.png">


4. PATCH METHOD: This method is to add Event for the user in database by targetting the user by it's I'd . In this method user is to provide eventname, occurence , startDate , endate in the PATCH request body and click on send . This will generate unique uid for that event also .
<img width="1440" alt="Screenshot 2021-11-25 at 8 58 10 AM" src="https://user-images.githubusercontent.com/72152598/143374803-690a98d3-6bc7-476a-a97a-f2ec7b3ab045.png">
<img width="1440" alt="Screenshot 2021-11-25 at 8 58 26 AM" src="https://user-images.githubusercontent.com/72152598/143374840-28bad42d-2a58-49a4-b1b3-a7cf234e99e4.png">






