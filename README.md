# Payment History MERN Project
The Payment History project is a web application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to view and manage their payment history, including details such as payments, amounts, and status. The project provides a user-friendly interface for tracking payments and is fully functional with a backend and a deployed frontend.

# Technologies Used

MongoDB: NoSQL database to store payment records.

Express: Backend framework to handle API requests.

React: Frontend framework for building the user interface.

Node.js: JavaScript runtime for the backend.
Axios: For making HTTP requests from the frontend to the backend.

# Setup Instructions
1. Clone the Repository
Clone the repository to your local machine using the following command:

git clone 

3. Install Dependencies
Navigate to the project directory and install the dependencies for both the client and the server.

Navigate to the server directory:
cd backend

Install the backend dependencies:
npm install
Set up your MongoDB database (local or cloud) and configure the connection in the backend.

Start the backend server:

npm start
Frontend (Client)

cd frontend
Install the frontend dependencies:

npm install
Start the frontend development server:

npm start
Your application should now be running locally on http://localhost:3000.


Deployment
The application has been deployed and can be accessed at the following link:
 deployLink: https://edviron-frontend.onrender.com

 # Screenshots

 Login 
 ![Screenshot 2024-12-28 145601](https://github.com/user-attachments/assets/ebced376-3bad-437e-9c6d-67e00488b2a1)

 Register
 ![Screenshot 2024-12-28 145624](https://github.com/user-attachments/assets/7a056ba2-7ff6-4b3e-9a05-e6baf57730cf)

 Transactions
 ![Screenshot 2024-12-28 145920](https://github.com/user-attachments/assets/4e05adc4-c434-4e98-96e4-fdc2fb36b014)

 ![Screenshot 2024-12-28 150335](https://github.com/user-attachments/assets/3d7c3b8f-36a7-4e95-a0b5-907ff5f8baed)

Check Status By Custom ID
 ![Screenshot 2024-12-28 145944](https://github.com/user-attachments/assets/93f82f87-19bd-45d1-bd35-4e015faffc71)

Filter Based on Status
![Screenshot 2024-12-28 150015](https://github.com/user-attachments/assets/b8d26317-7f22-4ed4-b692-255fe918a3eb)

Single Transactions Details by Collect_id

![Screenshot 2024-12-28 150015](https://github.com/user-attachments/assets/538484be-6ff3-4d30-bb98-95b96a2f3b1d)



 # API Endpoints
 Login API :
  /api/user/login

 Register API:
  /api/user/register

Transactions API :
All Transactions API :
  /api/transaction/get-all-transactions

Custom Order Id Details API :

/api/transaction-status/:custom_order_id

Deatail API  :

Deatils form School Id API:

/api/details/status/:collect_id

 


