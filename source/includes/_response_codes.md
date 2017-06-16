# Response Codes


The HTTP response code can be used to determine if the API request has succeeded. The API returns the
following codes with the given circumstances:


Code | Meaning
---------- | -------
200 | OK -- Requet was successful
201 | Created -- POST request completed sucessfully
400 | Bad Request -- The request was invalid or malformed
401 | Unauthorized -- Your API key is invalid
403 | Forbidden -- API Authentication failed
404 | Not Found -- The resource requested does not exist
405 | Method Not Allowed -- The resource requested does not support the request's HTTP verb

In all cases other than `401 Unauthorized`, a JSON response will accompany the status code.

For `200 OK` and `201 Created`, the response will contain either the data requested for a `GET` request, the data
deleted for a `DELETE` request, or the current state of the resource after a `POST`, `PUT` or `PATCH` request.

For all other status codes, the response will contain error details, which includes the error name, error
description, and more specific details as applicable.

You should not receive `500 Internal Server Errors` from the API. Please contact TalentNest support if
this occurs.
