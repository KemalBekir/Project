# Fakebook Marketplace

Angular project about local advertising of unwanted items.

# Used Technologies:
Angular,NodeJS, MongoDB, Express, Mongoose, JWT, Bootstrap, Toastr


## REST_API Endpoints:
>baseUrl: http://localhost:3030

#### Login
Login by sending a ==**POST**== request with email and password to /users/login. The service will respond with an object, containing a standard string token, that can be used for requests.

#### Register
Create a new user by sending a ==**POST**== request to /users/register with properties email and password. You can add any other property that you need, like username, avatar, etc. The service automatically creates a session and returns an authorization token, that can be used for requests.

#### Logout
Send an authorized ==**GET**== request to /users/logout. The service returns an empty response - if you attempt to parse it as JSON, you will receive an error! You can check for this type of response by looking at the status (204 instead of 200) and the content-type header (will not be present).

#### Authorized Requests
To make an authorized request, add the following header, where {token} is the access token, returned by the service upon successful login or registration:
>X-Authorization: {token}

#### Get User Details
Send an authorized ==**GET**== request to /users/profile. The service will return the record of the user, associated with the passed-in session token.

#### Update User Details
*This request requires authorization and content-type headers. Only the owner of the resource can edit it.*
Send an authorized ==**PUT**== request to /users/profile. 
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
---
## CRUD

#### Read
An end point is revealed at /data/catalog, which grants access to information, stored on the service. GET requests to the service will return the following responses:

- **GET** /data/catalog/ - array of all entries in the collection; will return 404 if collection does not exist
- **GET** /data/catalog/top5 - array of latest 5 entries in the collection

#### Create
*This request requires authorization and content-type headers*
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
- Send POST request to /data/catalog/ to create new entry. ID will be generated automatically and will be included in the returned object. If the collection does not exist, it will be created.

#### Update 
*This request requires authorization and content-type headers. Only the owner of the resource can edit it.*
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
- Send PUT request to /data/catalog/:id to update a single entry. Note that the existing entry will be replaced!

#### Delete
*This request requires authorization headers. Only the owner of the resource can delete it.*
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
- Send DELETE request to /data/catalog/:id to delete a single entry.
