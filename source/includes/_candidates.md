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
      "created_at": "2010-05-11T20:08:44Z",
      "updated_at": "2021-04-29T20:31:30Z"
    },
    {
      "id": 12,
      "first_name": "Duncan",
      "middle_initial": null,
      "last_name": "Reith",
      "email": "dunr@talentnest.com",
      "primary_phone": "14164444444",
      "created_at": "2010-05-26T19:39:48Z",
      "updated_at": "2014-06-25T18:27:08Z"
    }
  ]
}
```

Retrieves all candidates

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/candidates/`

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
    "created_at": "2010-05-26T19:39:48Z",
    "updated_at": "2014-06-25T18:27:08Z",
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

`GET https://subodmain.talentnest.com/api/v1/candidates/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the candidate to retrieve
