# Applications

## GET: All Job Applications

```shell
curl "http://subdomain.talentnest.com/api/v1/applications"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1765253,
    "candidate_id": 1148,
    "job_id": 25668,
    "job_title": "Parts Manager - Automotive",
    "first_name": "Jake",
    "last_name": "Joseph",
    "email": "jj@talentnest.com",
    "application_step": "Review Candidate",
    "application_status": "Deselected",
    "application_url": "https://subdomain.talentnest.com/en/job/25668/candidate/1148",
    "status_changed_at": "2017-11-29T19:41:33Z",
    "completed_at": "2017-10-28T17:47:15Z",
    "created_at": "2017-09-23T20:31:53Z",
    "updated_at": "2017-12-01T07:00:10Z"
  },
  {
    "id": 1769005,
    "candidate_id": 876140,
    "job_id": 29696,
    "job_title": "General Agent",
    "first_name": "Lori",
    "last_name": "Ham",
    "email": "lori.ham@talentnest.com",
    "application_step": "Review Candidate",
    "application_status": "Deselected",
    "application_url": "https://subdomain.talentnest.com/en/job/29696/candidate/876140",
    "status_changed_at": "2017-11-11T15:16:25Z",
    "completed_at": "2017-09-26T17:20:27Z",
    "created_at": "2017-09-26T17:20:25Z",
    "updated_at": "2017-11-11T15:16:25Z"
  }
]
```

Retrieves all job applications

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/applications/`

### Query string parameters

Parameter | Description
--------- | -----------
per_page | The requested number of results per page. `Default is 50` and the allowed `Maximum is 100`.
page | The specific page requested.
job_id | Return only applications belonging to this job.
completed_after | Return only applications that were completed after this timestamp. Timestamp must be ISO 8601 format.
updated_after | Return only applications that were updated after this timestamp. Timestamp must be ISO 8601 format.
application_status | Return only applications with this status. Allowed values are `active`, `deselected`, `hired`.
status_changed_after | Return only applications whose status was changed after this timestamp. Timestamp must be ISO 8601 format.

## GET: Specific Application

```shell
curl "http://subdomain.talentnest.com/api/v1/applications/{id}"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{ "application": {
    "id": 1765253,
    "candidate_id": 1148,
    "job_id": 25668,
    "job_title": "Parts Manager - Automotive",
    "first_name": "Jake",
    "last_name": "Joseph",
    "email": "jj@talentnest.com",
    "application_step": "Management Pro",
    "application_status": "Active",
    "application_url": "https://subdomain.talentnest.com/en/job/25668/candidate/1148",
    "status_changed_at": "2017-10-28T17:47:15Z",
    "completed_at": "2017-10-28T17:47:15Z",
    "created_at": "2017-09-23T20:31:53Z",
    "updated_at": "2017-12-01T07:00:10Z",
    "phone": "4167460444",
    "deselect_reason": null,
    "source": "Company Website",
    "reviewed": true,
    "passed_prescreen": true,
    "golden_eagle": false,
    "employee": false,
    "prescreen_answers": [
      {
        "question": "Are you legally eligible to work in the United States?",
        "answer": "Yes",
        "passed": true
      },
      {
        "question": "Do you have a good driving record and a valid driver’s license?",
        "answer": "Yes",
        "passed": true
      },
      {
        "question": "Would you be able to pass a drug screen? ",
        "answer": "Yes",
        "passed": true
      }
    ],
    "demographic_answers": [
      {
        "question": "If you were referred to our company by someone, who referred you:",
        "answer": "Friend",
        "type": "single"
      },
      {
        "question": "If you were referred by an employee of our company, please list the name here:",
        "answer": "",
        "type": "text"
      },
      {
        "question": "What days of the week are you available to work?",
        "answer": [
          "Tuesday",
          "Friday"
        ],
        "type": "multi"
      },
      {
        "question": "Are you available to work weekends?",
        "answer": "Yes",
        "type": "single"
      },
      {
        "question": "What date are you available to start work?",
        "answer": "",
        "type": "text"
      },
      {
        "question": "Are you available to travel on company business?  ",
        "answer": "Yes",
        "type": "single"
      },
      {
      "question": "What is the highest level of education you have completed?",
      "answer": "Trade School",
      "type": "single"
      },
      {
      "question": "List your computer skills.",
      "answer": "",
      "type": "text"
      }
    ],
    "resume_url": "https://subdomain.talentnest.com/en/documents/79944/download?hash=95ab65073cd38427eeb69e827c4806d32f716c95",
    "cover_url": null,
    "candidate_location": {
      "country": "Canada",
      "address": "3300 Bloor Street West",
      "postal": "M8X 2X3",
      "state": "Ontario",
      "city": "Toronto"
    },
    "future_consideration": false,
    "candidate_tags": [
      "automotive",
      "technician"
    ],
    "current_step":  {
      "id": 5,
      "sequence": 2,
      "step_name": "Management Pro",
      "status": "Completed",
      "rating": null,
      "activated_at": "2017-05-27T15:57:36Z",
      "completed_at": "2017-10-21T21:10:33Z",
      "invited_at": null,
      "deselected_at": null
    },
    "employment_process_history": [
      {
        "id": 13,
        "sequence": 1,
        "step_name": "Review Candidate",
        "status": "Completed",
        "rating": "4.0",
        "activated_at": "2017-05-27T15:54:31Z",
        "completed_at": "2017-05-27T15:57:32Z",
        "invited_at": null,
        "deselected_at": null
      },
      {
        "id": 5,
        "sequence": 2,
        "step_name": "Management Pro",
        "status": "Completed",
        "rating": null,
        "activated_at": "2017-05-27T15:57:36Z",
        "completed_at": "2017-10-21T21:10:33Z",
        "invited_at": null,
        "deselected_at": null
      },
      {
        "id": 8,
        "sequence": 3,
        "step_name": "Interview",
        "status": "Inactive",
        "rating": null,
        "activated_at": null,
        "completed_at": null,
        "invited_at": null,
        "deselected_at": null
      },
      {
        "id": 7,
        "sequence": 4,
        "step_name": "Employment Offer",
        "status": "Inactive",
        "rating": null,
        "activated_at": null,
        "completed_at": null,
        "invited_at": null,
        "deselected_at": null
      }
    ],
    "assessments": [
      {
        "id": 617257,
        "name": "ContactCenterScreen 2.0",
        "url": "https://assessment-report-url...",
        "scores": [
          {
            "type": "sales",
            "score": "2.8",
            "recommendation": "caution"
          },
          {
            "type": "service",
            "score": "3.1",
            "recommendation": "proceed"
          }
        ] 
      },
      {
        "id": 660573,
        "name": "POP Screen",
        "url": "https://assessment-report-url...",
        "scores": [
          {
            "type": "overall",
            "score": "2.38",
            "recommendation": "redirect"
          }
        ] 
      }
    ]
  }
}
```

Retrieve a specific application by its `id`.

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/applications/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the application to retrieve

## POST: Advance Application

```shell
curl -X POST "http://subdomain.talentnest.com/api/v1/applications/{id}/advance"
  -H 'Content-Type: application/json'
  -u "TALENTNEST_API_KEY:"
```

> The above command takes a JSON request, structured like this:

```json
{
  "from_step_id": 2041,
  "rating": 5,
  "note": "Great first impression!"
}
```

> The above returns JSON, structured like this:

```json
{
  "application": {
    "id": 3060537,
    "current_step": {
      "id": 2042,
      "sequence": 3,
      "step_name": "POP7",
      "status": "Active",
      "rating": null,
      "activated_at": "2019-01-07T17:04:26Z",
      "completed_at": null,
      "invited_at": null,
      "deselected_at": null
    }
  }
}
```

Advances this application from the `current_step` to the next step in the employment process. Only `Active` 
applications can be advanced.

The `current_step` will be `Completed` and the next step will be `Activated`. This newly activated step becomes the new 
`current_step`. The response contains the new `current_step`'s information.

### HTTP Request

`POST https://subodmain.talentnest.com/api/v1/applications/{id}/advance`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the application to advance

### JSON Body Parameters

Parameter | Required | Type | Description
--------- | -------- | ---- | -----------
from_step_id | Yes | Integer | The ID of the application's `current_step`.
rating | No | Integer | Rating the candidate received at `current_step`. Range `1` to `5`. Applies only to `rated` steps.
note | No | String | Optional note to store when completing the `current_step`.

## POST: Move Application

```shell
curl -X POST "http://subdomain.talentnest.com/api/v1/applications/{id}/move"
  -H 'Content-Type: application/json'
  -u "TALENTNEST_API_KEY:"
```

> The above command takes a JSON request, structured like this:

```json
{
  "from_step_id": 2041,
  "to_step_id": 2044,
  "rating": 5,
  "note": "Completing this step and jumping few steps forward!"
}
```

> The above returns JSON, structured like this:

```json
{
  "application": {
    "id": 3060537,
    "current_step": {
      "id": 2044,
      "sequence": 4,
      "step_name": "Interview",
      "status": "Active",
      "rating": null,
      "activated_at": "2019-03-12T17:04:26Z",
      "completed_at": null,
      "invited_at": null,
      "deselected_at": null
    }
  }
}
```

Moves this application to an arbitrary step ahead in the employment process. The old
`current_step` will be `Completed` and the new `current_step` will be `Activated`. The response contains the new 
`current_step`'s information.

Only `Active` applications can be moved. 

The move is not allowed if there are any required steps in-between the two steps.

### HTTP Request

`POST https://subodmain.talentnest.com/api/v1/applications/{id}/move`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the application to move

### JSON Body Parameters

Parameter | Required | Type | Description
--------- | -------- | ---- | -----------
from_step_id | Yes | Integer | The ID of the application's `current_step`.
to_step_id | Yes | Integer | The ID of the step the application should be moved to.
rating | No | Integer | Rating the candidate received at `current_step`. Range `1` to `5`. Applies only to `rated` steps.
note | No | String | Optional note to store when completing the `current_step`.

## GET: Specific Step for Application

```shell
curl "http://subdomain.talentnest.com/api/v1/applications/{id}/step/{step_id}"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "step": {
    "id": 2042,
    "application_id": 3060537,
    "sequence": 3,
    "step_name": "POP7",
    "status": "Active",
    "rating": null,
    "activated_at": "2019-01-07T17:04:26Z",
    "completed_at": null,
    "invited_at": null,
    "deselected_at": null
  }
}
```

Retrieve a specific step of an application.

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/applications/{id}/step/{step_id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the application
step_id | The ID of the step to retrieve

## PUT: Activate Step for Application

```shell
curl -X PUT "http://subdomain.talentnest.com/api/v1/applications/{id}/step/{step_id}/activate"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "step": {
    "id": 2042,
    "application_id": 3060537,
    "sequence": 3,
    "step_name": "Phone Interview",
    "status": "Active",
    "rating": null,
    "activated_at": "2019-01-07T17:04:26Z",
    "completed_at": null,
    "invited_at": null,
    "deselected_at": null
  }
}
```

Activate a specific step of an application.

### HTTP Request

`PUT https://subodmain.talentnest.com/api/v1/applications/{id}/step/{step_id}/activate`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the application
step_id | The ID of the step to activate

## PUT: Complete Step for Application

```shell
curl -X PUT "http://subdomain.talentnest.com/api/v1/applications/{id}/step/{step_id}/complete"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "step": {
    "id": 2042,
    "application_id": 3060537,
    "sequence": 3,
    "step_name": "Phone Interview",
    "status": "Completed",
    "rating": null,
    "activated_at": "2019-01-07T17:04:26Z",
    "completed_at": "2019-01-08T13:07:36Z",
    "invited_at": null,
    "deselected_at": null
  }
}
```

Complete a specific step of an application.

### HTTP Request

`PUT https://subodmain.talentnest.com/api/v1/applications/{id}/step/{step_id}/complete`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the application
step_id | The ID of the step to complete
