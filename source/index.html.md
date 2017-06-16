---
title: TalentNest API

language_tabs:
  - shell

toc_footers:
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - verbs
  - response_codes

search: true
---

# Introduction

Welcome to the TalentNest API! Our API allows you to perform queries (both safe and destructive) without having to interface with the TalentNest website. You can obtain an API key which will provide you with access to data belonging to your client.

The API is accessible through https://subdomain.talentnest.com/api/v1, where subdomain is the subdomain of your client on the TalentNest website. All API requests must be made via SSL (HTTPS). Non-SSL requests will be ignored. As well, all requests must be authenticated to succeed (see the [Authentication section](#authentication)).

The API accepts resources and provides responses using JSON. The format may specified by the URI extension (ie. https://subdomain.talentnest.com/api/v1/employees.json), but is not required. If transmitting a JSON representation of a resource, the Content‐Type header must be set to application/json.

The API is RESTful. Each request has an associated HTTP verb which must be used. Certain endpoints accept resources as a part of the request.

There is currently no request rate limit.

# Authentication

> To authorize, use this code:

```shell
# Note the trailing colon(:) after the username (API token)
$ curl https://subdomain.talentnest.com/api/v1/employees -u TALENTNEST_API_KEY:
```

> Alternatively, pass your API key within an Authorization header. Make sure to Base64 encode the token with the colon (:) appended.

```shell
$ curl https://subdomain.talentnest.com/api/v1/employees -H 'Authorization: Basic VEFMRU5UTkVTVF9BUElfS0VZOg=='
```

> Make sure to replace `TALENTNEST_API_KEY` with your API key and `subdomain` with your TalentNest subdomain.

Authentication to TalentNest's API is done with your API key.

Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Provide your API key as the basic auth username. You do not need to provide a password.

Alternatively, you can also pass your API key in an Authorization header.

<code>Authorization: Basic \<base64("TALENTNEST_API_KEY:")></code>

Since we only require an API key within the username portion of the basic auth, simply append a `:` to your TalentNest API token and then Base64 encode the resulting string.

<aside class="notice">
You must replace <code>TALENTNEST_API_KEY</code> with your personal API key.
</aside>

# Pagination

> An example pagination response header

```shell
HTTP/1.1 200 OK
Status: 200 OK
Link: <https://subdomain.talentnest.com/api/v1/applications?page=1>; rel="first",
  <https://subdomain.talentnest.com/api/v1/applications?page=2>; rel="prev",
  <https://subdomain.talentnest.com/api/v1/applications?page=17>; rel="last",
  <https://subdomain.talentnest.com/api/v1/applications?page=4>; rel="next"
X-Page: 3
X-Per-Page: 50
X-Total: 814
```

API methods that return a collection of results are always paginated. Paginated results will include a Link (see [RFC-5988](https://tools.ietf.org/html/rfc5988)) response header with the following information.

Link | Description
--------- | -----------
next | The corresponding URL is the link to the next page.
prev | The corresponding URL is the link to the previous page.
last | The corresponding URL is the link to the last page.

<aside class="notice">When this header is not set, there is only one page, the first page, of results.
</aside>

Paginated results will also include the following in the response header:

Field | Description
----- | -----------
X-Page | The current page of results returned.
X-Per-Page | The number of results per page. `Default is 50`.
X-Total | The total number of results available.

### Query string parameters

API methods that return a collection of results accept the following query parameters:

Parameter | Description
--------- | -----------
per_page *optional* | The requested number of results per page. `Default is 50` and the allowed `Maximum is 100`.
page *optional* | The specific page requested.

# Endpoints

All API requests should be made to the `https://subdomain.talentnest.com` base domain (where
subdomain is your client's subdomain on TalentNest).

In any case that an endpoint is not constructed properly, or points to an invalid resource, the result will
contain an InvalidParameter or ResourceNotFound error JSON object, which may refer to a specific
parameter within the endpoint URL. These parameters are of the form `:parameter` (ie. a name preceded by
a colon), as seen in the table below.

<aside class="notice">In all cases of resources that have non-<code>GET</code> endpoints, only the parameters returned by a <code>GET</code> request
for that resource are exposed for a <code>POST</code>, <code>PUT</code> or <code>PATCH</code> request.
</aside>

<aside class="warning">Destructive requests (ie. requests that modify or delete a resource) are the responsibility of the user
of the TalentNest. Any data that is accidentally or inadvertently lost due to TalentNest API usage cannot
be restored. Any destructive request can use the <code>dry_run=true</code> querystring parameter to try out a request
without committing the results (ie. <code>DELETE /api/v1/employees/123?dry_run=true</code>).
</aside>

# Jobs

## GET: All Jobs

```shell
curl "http://subdomain.talentnest.com/api/v1/jobs"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 22625,
    "title": "F&I Manager – Automotive",
    "job_status": "Open",
    "opens_at": "2016-09-05",
    "closes_at": null,
    "status_changed_at": "2015-12-16T14:31:30Z",
    "last_application_at": "2016-11-25T13:38:19Z",
    "created_at": "2015-12-16T14:31:18Z",
    "updated_at": "2016-09-08T13:55:24Z",
    "job_url": "https://subdomain.talentnest.com/en/posting/18502/location/22625",
    "apply_url": "https://subdomain.talentnest.com/en/posting/18502/apply/22625",
    "business_unit": {
      "id": 7366,
      "location": {
        "country": "United States",
        "address": null,
        "postal": null,
        "state": "Texas",
        "city": "Austin"
        }
    }
  },
  {
    "id": 23032,
    "title": "Financial Services",
    "job_status": "Closed",
    "opens_at": "2016-01-13",
    "closes_at": null,
    "status_changed_at": "2016-02-03T13:58:05Z",
    "last_application_at": null,
    "created_at": "2016-01-13T19:39:14Z",
    "updated_at": "2016-02-03T13:58:05Z",
    "job_url": "https://subdomain.talentnest.com/en/posting/18801/location/23032",
    "apply_url": "https://subdomain.talentnest.com/en/posting/18801/apply/23032",
    "business_unit": {
      "id": 2009,
      "location": {
        "country": "Canada",
        "address": "3300 Bloor Street West",
        "postal": "M9B 2C5",
        "state": "Ontario",
        "city": "Toronto"
      }
    }
  }
]
```

List all jobs.

### HTTP Request

`GET https:://subodmain.talentnest.com/api/v1/jobs`

## GET: A Specific Job

```shell
curl "http://subdomain.talentnest.com/api/v1/jobs/{id}"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "id": 23819,
  "title": "Program Manager",
  "job_status": "Open",
  "opens_at": "2016-02-03",
  "closes_at": "2016-02-10",
  "status_changed_at": "2016-02-03T21:46:57Z",
  "last_application_at": null,
  "created_at": "2016-02-03T21:46:16Z",
  "updated_at": "2016-02-03T21:46:16Z",
  "job_url": "https://subdomain.talentnest.com/en/posting/19252/location/23819",
  "apply_url": "https://subdomain.talentnest.com/en/posting/19252/apply/23819",
  "business_unit": {
    "id": 2446,
    "location": {
      "country": "Canada",
      "address": null,
      "postal": null,
      "state": "Alberta",
      "city": "Edmonton"
      }
  },
  "description": "Detailed job description",
  "employment_type": null,
  "posting_type": "External",
  "job_applications_count": 30,
  "completed_applications_count": 25,
  "unreviewed_applications_count": 5,
  "hires_count": 0,
  "vacancies_count": 0,
  "assessment": null
}
```

### HTTP Request

`GET https:://subodmain.talentnest.com/api/v1/jobs/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the job to retrieve

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
    "status_changed_at": "2016-11-29T19:41:33Z",
    "completed_at": "2016-10-28T17:47:15Z",
    "created_at": "2016-09-23T20:31:53Z",
    "updated_at": "2016-12-01T07:00:10Z"
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
    "status_changed_at": "2016-11-11T15:16:25Z",
    "completed_at": "2016-09-26T17:20:27Z",
    "created_at": "2016-09-26T17:20:25Z",
    "updated_at": "2016-11-11T15:16:25Z"
  }
]
```

Retrieves all job applications

### HTTP Request

`GET https:://subodmain.talentnest.com/api/v1/applications/`

## GET: A Specific Application

```shell
curl "http://subdomain.talentnest.com/api/v1/applications/{id}"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
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
    "status_changed_at": "2016-11-29T19:41:33Z",
    "completed_at": "2016-10-28T17:47:15Z",
    "created_at": "2016-09-23T20:31:53Z",
    "updated_at": "2016-12-01T07:00:10Z",
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
    ]
  }
}
```

### HTTP Request

`GET https:://subodmain.talentnest.com/api/v1/jobs/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the application to retrieve


