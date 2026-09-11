# Candidates

## GET: All Candidates

```shell
curl "https://subdomain.talentnest.com/api/v1/candidates"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{ 
  "candidates": [
    {
      "id": 11,
      "first_name": "Sakul",
      "middle_initial": "N",
      "last_name": "Noteab",
      "email": "snn@talentnest.com",
      "primary_phone": "4161234444",
      "created_at": "2026-05-11T20:08:44Z",
      "updated_at": "2026-09-01T20:31:30Z"
    },
    {
      "id": 12,
      "first_name": "Duncan",
      "middle_initial": null,
      "last_name": "Reith",
      "email": "dunr@talentnest.com",
      "primary_phone": "14164444444",
      "created_at": "2026-05-26T19:39:48Z",
      "updated_at": "2026-06-25T18:27:08Z"
    }
  ]
}
```

Returns candidates for the authenticated client.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/candidates`

### Query string parameters

Parameter | Description
--------- | -----------
per_page | The requested number of results per page. `Default is 50` and the allowed `Maximum is 100`.
page | The specific page requested.
created_after | Return only candidates whose record was created after this timestamp. Timestamp must be ISO 8601 format.
updated_after | Return only candidates that were updated after this timestamp. Timestamp must be ISO 8601 format.

## GET: Specific Candidate

```shell
curl "https://subdomain.talentnest.com/api/v1/candidates/{id}"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{ 
  "candidate": {
    "id": 12,
    "first_name": "Duncan",
    "middle_initial": null,
    "last_name": "Reith",
    "email": "dunr@talentnest.com",
    "primary_phone": "14164444444",
    "created_at": "2026-05-26T19:39:48Z",
    "updated_at": "2026-06-25T18:27:08Z",
    "location": {
      "country": "Canada",
      "address": "155 Rexdale Boulevard",
      "postal": "M9W 5Z8",
      "state": "Ontario",
      "city": "Toronto"
    },
    "resume_url": "https://subdomain.talentnest.com/resume...",
    "num_of_applications": 3
  }
}
```

Retrieve a specific candidate by its `id`.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/candidates/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the candidate to retrieve

## POST: Email Candidate

```shell
curl -X POST "https://subdomain.talentnest.com/api/v1/candidates/{id}/email"
  -H 'Content-Type: application/json'
  -u "TALENTNEST_API_KEY:"
```

> The above command takes a JSON request, structured like this:

```json
{
  "subject": "Test subject",
  "body":"Test body <br> <a href='https://talentnest.com'>https://talentnest.com</a>"
}
```

> The above command returns JSON structured like this:

```json
{
   "from":"notifications@talentnest.com",
   "to":"<candidate-email>",
   "subject":"<sanitized-subject>",
   "body":"<sanitized-body>"
}
```

Sends an email, using the client's brand, to the candidate.

### HTTP Request

`POST https://subdomain.talentnest.com/api/v1/candidates/{id}/email`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the candidate to email

### JSON Body Parameters

Parameter | Required | Type | Description
--------- | -------- | ---- | -----------
subject | Yes| Text | Subject line for email.
body | Yes | Text | Body of email. Some HTML is allowed, no javascript.
job_id | No | Integer | Include the ID of the job the candidate applied for if the email is related to their application.
dry_run | No | Boolean | If `true`, validate the request without sending. Default: `false`.

## POST: Send SMS to Candidate

```shell
curl -X POST "https://subdomain.talentnest.com/api/v1/candidates/{id}/sms"
  -H 'Content-Type: application/json'
  -u "TALENTNEST_API_KEY:"
```

> The above command takes a JSON request, structured like this:

```json
{ "message": "Test message" }
```

> The above command returns JSON structured like this:

```json
{
   "message":"Test message",
   "to":"<candidate-phone-number>"
}
```

Sends an SMS to the candidate's primary phone number.

### HTTP Request

`POST https://subdomain.talentnest.com/api/v1/candidates/{id}/sms`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the candidate to send SMS to

### JSON Body Parameters

Parameter | Required | Type | Description
--------- | -------- | ---- | -----------
message | Yes | Text | UTF-8 encoded text message to send. Emojis are supported, no HTML.
job_id | No | Integer | Include the ID of the job the candidate applied for if the SMS is related to their application.
dry_run | No | Boolean | If `true`, validate the request without sending. Default: `false`.
