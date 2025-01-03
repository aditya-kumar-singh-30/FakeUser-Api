Fake User API Documentation
The Fake User API provides access to a dataset of 501 fake users. It supports fetching all users, retrieving a user by ID, and adding new users to the dataset.

Base URL :- https://fakeuser-api.onrender.com
Endpoints
1. GET /
Description:
Returns a welcome message.

Response:- "Hello guyzzzz"

2. GET /api/users
Description:- Fetches all users from the dataset.

Response:

Status Code: 200 OK
Content Type: application/json
Body:
An array of user objects:
json
Copy code
[
     {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com"
    },
    ...
]

3. POST /api/users
Description:- Adds a new user to the dataset.

Request:

Content Type: application/json
Body:
{
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane.doe@example.com"
}
Response:
Status Code: 200 OK
Content Type: application/json
Body:
{
    "status": "success",
    "id": 502
}


Notes:

The id is automatically assigned based on the length of the dataset.
The new user data is persisted in the MOCK_DATA.json file.

4. GET /api/users/:id
Description:
Fetches a single user by their id.

Parameters:

id (integer): The ID of the user.
Response:

Status Code: 200 OK
Content Type: application/json
Body:
If the user exists:
json
Copy code
{
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
}
If the user does not exist:

null


Error Handling
General Errors:
If there is an issue writing to the file in POST /api/users, the server will not return any error in the current implementation. Ensure to handle errors properly when extending functionality.

Example Usage
Fetch All Users
bash
Copy code
curl https://fakeuser-api.onrender.com/api/users
Add a New User
bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"first_name": "Jane", "last_name": "Doe", "email": "jane.doe@example.com"}' https://fakeuser-api.onrender.com/api/users
Fetch a User by ID
bash
Copy code
curl https://fakeuser-api.onrender.com/api/users/1


 
