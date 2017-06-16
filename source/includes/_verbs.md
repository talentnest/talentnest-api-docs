# Interacting with the API


Five HTTP verbs are supported by the API: `GET`, `POST`, `PUT`, `PATCH` and `DELETE`, though not every verb is
accepted by every type of resource.


Verb | Description
---------- | -------
GET | Requests a representation of the specified resource; requests using GET can only retrieve data
POST | Submits data to a new resource
PUT | Uploads data to an existing resource, overriding the existing data
PATCH | Applies a partial modification to a resource
DELETE | Deletes the specified resource
