# Employees

## GET: All Employees

```shell
curl "https://subdomain.talentnest.com/api/v1/employees"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
 {
   "employees": [
     {
       "id": 122345,
       "employee_number": null,
       "business_unit_id": 56,
       "manager_id": null,
       "hired_on": "2020-05-14",
       "started_on": "2020-05-14",
       "verified_on": "2020-08-07",
       "termination_date": "2020-07-17",
       "user": {
         "first_name": "Nadia",
         "middle_initial": "J",
         "last_name": "Smith",
         "email": "nadiasmith@talentnest.com",
         "primary_phone": "14167460444",
         "location": {
           "country": "Canada",
           "address": " 3300 Bloor Street West",
           "postal": "M8X 2X2",
           "state": "Ontario",
           "city": "Toronto"
         }
       },
       "current_position": null
     },
     {
       "id": 122354,
       "employee_number": null,
       "business_unit_id": 871,
       "manager_id": null,
       "hired_on": "2020-07-08",
       "started_on": "2020-07-08",
       "verified_on": "2020-08-07",
       "termination_date": "2020-07-16",
       "user": {
         "first_name": "Vanessa",
         "middle_initial": null,
         "last_name": "Squid",
         "email": "vsquid@talentnest.com",
         "primary_phone": "14167460444",
         "location": {
           "country": "Canada",
           "address": " 3300 Bloor Street West",
           "postal": "M8X 2X2",
           "state": "Ontario",
           "city": "Toronto"
         }
       },
       "current_position": null
     },
     {
       "id": 125458,
       "employee_number": null,
       "business_unit_id": 128,
       "manager_id": null,
       "hired_on": "2020-08-06",
       "started_on": "2020-08-06",
       "verified_on": "2020-08-06",
       "termination_date": null,
       "user": {
         "first_name": "Jake",
         "middle_initial": null,
         "last_name": "Williams",
         "email": "jake.williams@talentnest.com",
         "primary_phone": "14167460444",
         "location": null
       },
       "current_position": {
         "id": 115427,
         "status_id": 388,
         "job_title": "Full-Time Customer Support",
         "started_on": "2020-08-06",
         "ended_on": null,
         "position_end_reason_id": null,
         "business_unit_id": 10228,
         "application_id": 5179944
       },
       "other_position": {
         "id": 102427,
         "status_id": 312,
         "job_title": "Full-Time Front Desk",
         "started_on": "2020-01-31",
         "ended_on": "2020-08-06",
         "position_end_reason_id": 41,
         "business_unit_id": 10228,
         "application_id": 5079944
       }
     }
   ]
}

```

Returns employees for the authenticated client.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/employees`

### Query string parameters

Parameter | Description
--------- | -----------
per_page | The requested number of results per page. `Default is 50` and the allowed `Maximum is 100`.
page | The specific page requested.
business_unit_id | Return employees belonging to this business unit or any of its sub-units. To exclude sub-unit employees, add `sub_units=false`.
hired_after | Return only employees whose start/hire date is after this date (ISO 8601). Filters `started_on`.
sort | Optional. `hired_on` or `started_on` (both sort on start date, descending). Default is `created_at` descending.

## GET: A specific Employee

```shell
curl "https://subdomain.talentnest.com/api/v1/employees/{id}"
  -u "TALENTNEST_API_KEY:"


curl "https://subdomain.talentnest.com/api/v1/employees/{email}"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "employee": {
    "id": 113246,
    "employee_number": null,
    "business_unit_id": 119,
    "manager_id": null,
    "hired_on": "2020-07-08",
    "started_on": "2020-07-08",
    "verified_on": "2020-07-08",
    "termination_date": "2020-07-24",
    "user": {
      "first_name": "Dan",
      "middle_initial": null,
      "last_name": "Cooper",
      "email": "dcooper@talentnest.com",
      "primary_phone": "14167460444",
      "location": {
          "country": "Canada",
          "address": " 3300 Bloor Street West",
          "postal": "M8X 2X2",
          "state": "Ontario",
          "city": "Toronto"
        }
    },
    "current_position": null,
    "other_positions": [
      {
        "id": 123455,
        "status_id": 500,
        "job_title": "Associate",
        "started_on": "2020-07-08",
        "ended_on": "2020-07-24",
        "position_end_reason_id": 23,
        "business_unit_id": 119,
        "application_id": 5032461
      }
    ]
  }
}
```

Retrieve a specific employee by `id` or `email`.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/employees/{id}`

`GET https://subdomain.talentnest.com/api/v1/employees/{email}`


### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee to retrieve
email | The email address of the employee to retrieve

## POST: Create an employee

```shell
curl -X POST "https://subdomain.talentnest.com/api/v1/employees"
  -H 'Content-Type: application/json'
  -u "TALENTNEST_API_KEY:"
```

> JSON body:

```json
{
  "employee": {
    "employee_number": "E-1001",
    "business_unit_id": 56,
    "manager_id": 98,
    "started_on": "2026-09-11",
    "verified_on": "2026-09-11",
    "user": {
      "first_name": "Sam",
      "last_name": "Edwards",
      "email": "sam.edwards@example.com",
      "primary_phone": "14165550100",
      "location": {
        "country": "Canada",
        "state": "Ontario",
        "city": "Toronto",
        "address": "3300 Bloor Street West",
        "postal": "M8X 2X2"
      }
    }
  }
}
```

Creates an employee. Wrap fields in `employee`. `user` is the person record (name, email, phone, location). Location `country` and `state` are names, not ids. `started_on` is the hire/start date (`hired_on` in responses is the same date).

### HTTP Request

`POST https://subdomain.talentnest.com/api/v1/employees`

### JSON Body Parameters

All keys sit under `employee`. Unknown keys are rejected.

Parameter | Required | Type | Description
--------- | -------- | ---- | -----------
employee_number | No | String | Client employee number.
business_unit_id | No | Integer | Business unit.
manager_id | No | Integer | Manager employee id.
started_on | No | Date | Start/hire date (ISO 8601 date).
verified_on | No | Date | Verified date.
terminated_at | No | Date | If set, the employee is created already terminated.
user | No | Object | `first_name`, `middle_initial`, `last_name`, `email`, `primary_phone`, `location`.
dry_run | No | Boolean | If `true`, validate without saving. Default: `false`.

## PUT: Replace an employee

```shell
curl -X PUT "https://subdomain.talentnest.com/api/v1/employees/{id}"
  -H 'Content-Type: application/json'
  -u "TALENTNEST_API_KEY:"
```

Same `employee` object as create. PUT resets omitted loadable fields to defaults, then applies the body. You may also send `business_unit_id` and `employee_status_id`.

### HTTP Request

`PUT https://subdomain.talentnest.com/api/v1/employees/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee

## PATCH: Update an employee

```shell
curl -X PATCH "https://subdomain.talentnest.com/api/v1/employees/{id}"
  -H 'Content-Type: application/json'
  -u "TALENTNEST_API_KEY:"
```

Partial update. Same `employee` wrapper; only included keys change.

### HTTP Request

`PATCH https://subdomain.talentnest.com/api/v1/employees/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee

## GET: Employee Statuses

```shell
curl "https://subdomain.talentnest.com/api/v1/employees/statuses"
  -u "TALENTNEST_API_KEY:"
```

> The above returns JSON, structured like this:

```json
{
  "statuses": [
    {
      "id": 123,
      "status": "Active",
      "description": "Employment status for current employees."
    },
    {
      "id": 145,
      "status": "On Leave",
      "description": "Employment status for employees on leave"
    },
    {
      "id": 157,
      "status": "Terminated",
      "description": null
    },
    {
      "id": 176,
      "status": "Part-Time",
      "description": null
    },
    {
      "id": 135,
      "status": "Contract",
      "description": null
    }
  ]
}
```

Employee Statuses are client-defined phrases used to identify an employee's current status (e.g. Active or On Leave). Employee Statuses may contain translations.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/employees/statuses`

## GET: Employees for a Specific Status

```shell
curl "https://subdomain.talentnest.com/api/v1/employees/statuses/{id}"
  -u "TALENTNEST_API_KEY:"
```

> The above returns JSON, structured like this:

```json
{
  "statuses": [
    {
      "id": 123,
      "status": "Active",
      "description": "Employment status for current employees.",
      "employee_ids": [
          1234,
          4567,
          5482,
          7614,
          7751,
          7757,
          8015
      ]
    }
  ]
}
```

Returns details for a specific employee status and a list of employee IDs that have this status.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/employees/statuses/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee status to return

## GET: Position End (Termination) Reasons

```shell
curl "https://subdomain.talentnest.com/api/v1/position_end_reasons"
  -u "TALENTNEST_API_KEY:"
```

> The above returns JSON, structured like this:

```json
{
  "position_end_reasons": [
    {
      "id": 55,
      "reason": "Voluntary Termination",
      "description": "Voluntary Termination"
    },
    {
      "id": 56,
      "reason": "Performance",
      "description": "Involuntary Termination"
    },
    {
      "id": 58,
      "reason": "Job Abandonment",
      "description": "Involuntary Termination"
    },
    {
      "id": 66,
      "reason": "Other Employment",
      "description": "Voluntary Termination"
    },
    {
      "id": 76,
      "reason": "Did Not Like Role",
      "description": "Voluntary Termination"
    },
    {
      "id": 88,
      "reason": "Medical - Personal or Family",
      "description": "Voluntary Termination"
    }
  ]
}
```

Returns position end (termination) reasons and their IDs. Translations are included when present.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/position_end_reasons`

## POST: Terminate an Employee

```shell
curl -X POST "https://subdomain.talentnest.com/api/v1/employees/{id}/terminate"
  -H 'Content-Type: application/json'
  -u 'TALENTNEST_API_KEY:'
```

> The above command takes a JSON request, structured like this:

```json
{
  "position_end_reason_id": 55,
  "termination_date": "2020-08-06"
}
```

> The above returns JSON, structured like this:

```json
{
  "employee": {
    "id": 109125,
    "employee_number": null,
    "business_unit_id": 257,
    "manager_id": null,
    "hired_on": "2020-03-23",
    "started_on": "2020-03-23",
    "verified_on": "2020-03-23",
    "termination_date": "2020-08-06",
    "user": {
      "first_name": "Sam",
      "middle_initial": null,
      "last_name": "Edwards",
      "email": "sedwards@talentnest.com",
      "primary_phone": "14167460444",
      "location": {
        "country": "Canada",
        "address": " 3300 Bloor Street West",
        "postal": "M8X 2X2",
        "state": "Ontario",
        "city": "Toronto"
      }
    },
    "current_position": null,
    "other_positions": [
      {
        "id": 2341231,
        "status_id": 372,
        "job_title": "Outbound Call Center Agent",
        "started_on": "2020-03-23",
        "ended_on": "2020-08-06",
        "position_end_reason_id": 55,
        "business_unit_id": 257,
        "application_id": 432425
      }
    ]
  }
}
```

Terminates the employee. Optional reason, status, and date.

### HTTP Request

`POST https://subdomain.talentnest.com/api/v1/employees/{id}/terminate`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee to terminate

### JSON Body Parameters

Parameter | Required | Type | Description
--------- | -------- | ---- | -----------
position_end_reason_id | No | Integer | ID of a position end (termination) reason from `GET /position_end_reasons`.
status_id | No | Integer | Employee status to apply after termination.
termination_date | No | Date | Termination date (ISO 8601 date). Defaults to today if omitted. Must not be before the current position start date.
