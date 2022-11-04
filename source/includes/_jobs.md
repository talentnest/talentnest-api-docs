# Jobs

## GET: All Jobs

```shell
curl "https://subdomain.talentnest.com/api/v1/jobs"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "jobs": [
    {
      "id": 22625,
      "title": "F&I Manager – Automotive",
      "job_status": "Open",
      "opens_at": "2017-09-05",
      "closes_at": null,
      "status_changed_at": "2015-12-16T14:31:30Z",
      "last_application_at": "2017-11-25T13:38:19Z",
      "created_at": "2015-12-16T14:31:18Z",
      "updated_at": "2017-09-08T13:55:24Z",
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
      "opens_at": "2017-01-13",
      "closes_at": null,
      "status_changed_at": "2017-02-03T13:58:05Z",
      "last_application_at": null,
      "created_at": "2017-01-13T19:39:14Z",
      "updated_at": "2017-02-03T13:58:05Z",
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
}
```

List all jobs.

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/jobs`

### Query string parameters

Parameter | Description
--------- | -----------
per_page | The requested number of results per page. `Default is 50` and the allowed `Maximum is 100`.
page | The specific page requested.
created_after | Return only jobs that were created after this timestamp. Timestamp must be ISO 8601 format.
updated_after | Return only jobs that were updated after this timestamp. Timestamp must be ISO 8601 format.

## GET: Specific Job

```shell
curl "https://subdomain.talentnest.com/api/v1/jobs/{id}"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "job": {
    "id": 23819,
    "title": "Program Manager",
    "job_status": "Open",
    "opens_at": "2017-02-03",
    "closes_at": "2017-02-10",
    "status_changed_at": "2017-02-03T21:46:57Z",
    "last_application_at": null,
    "created_at": "2017-02-03T21:46:16Z",
    "updated_at": "2017-02-03T21:46:16Z",
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
}
```

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/jobs/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the job to retrieve

## GET: Job's Employment Process

```shell
curl "https://subdomain.talentnest.com/api/v1/jobs/{id}/employment_process"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "employment_process": {
    "steps": [
      {
        "id": 1933,
        "name": "Review Candidate",
        "abbreviation": "RC",
        "step_type": "New Application",
        "sequence": 1,
        "optional": false,
        "rated": false
      },
      {
        "id": 2041,
        "name": "Phone Interview",
        "abbreviation": "PI",
        "step_type": "Interview",
        "sequence": 2,
        "optional": true,
        "rated": true
      },
      {
        "id": 2042,
        "name": "Management Pro",
        "abbreviation": "MPP3",
        "step_type": "Assessment",
        "sequence": 3,
        "optional": true,
        "rated": false
      },
      {
        "id": 2044,
        "name": "Interview",
        "abbreviation": "Int",
        "step_type": "Interview",
        "sequence": 4,
        "optional": true,
        "rated": true
      },
      {
        "id": 1934,
        "name": "Employment Offer",
        "abbreviation": "EO",
        "step_type": "Employment Offer",
        "sequence": 5,
        "optional": false,
        "rated": false
      }
    ]
  }
}
```

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/jobs/{id}/employment_process`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the job to use
