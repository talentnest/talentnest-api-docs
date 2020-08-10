# Employees

## GET: All Employees

```shell
curl "http://subdomain.talentnest.com/api/v1/employees"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
 "employees": [
  {
    "id": 122345,
    "employee_number": null,
    "business_unit_id": 56,
    "manager_id": null,
    "hired_on": "2020-05-14",
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
      "ended_on": "2020-08-06,
      "position_end_reason_id": 41,
      "business_unit_id": 10228,
      "application_id": 5079944
    }
  }
]

```

Retrieves all employees

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/employees`

### Query string parameters

Parameter | Description
--------- | -----------
per_page | The requested number of results per page. `Default is 50` and the allowed `Maximum is 100`.
page | The specific page requested.
business_unit_id | Return only employees belonging to this business unit.
hired_after | Return only employees that have a hired date after this timestamp. Timestamp must be ISO 8601 format.

## GET: A specific Employee

```shell
curl "http://subdomain.talentnest.com/api/v1/employees/{id}"
  -u "TALENTNEST_API_KEY:"


curl "http://subdomain.talentnest.com/api/v1/employees/{email}"
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

`GET https://subodmain.talentnest.com/api/v1/employees/{id}`

`GET https://subodmain.talentnest.com/api/v1/employees/{email}`


### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee to retrieve
email | The email address of the employee to retrieve

## GET: Employee Statuses

```shell
curl "http://subdomain.talentnest.com/api/v1/employees/statuses"
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
      "description": "Empoyment status for employees on leave"
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

`GET https://subodmain.talentnest.com/api/v1/employees/statuses`

## GET: Employees for a Specific Status

```shell
curl "http://subdomain.talentnest.com/api/v1/employees/statuses/{id}"
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

`POST https://subodmain.talentnest.com/api/v1/employees/statuses/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee status to return

## GET: Position End (Termination) Reasons

```shell
curl "http://subdomain.talentnest.com/api/v1/position_end_reasons"
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

Returns a list of position end (termination) reasons and their associated IDs. If ther are translations, those will be returned as well.

### HTTP Request

`POST https://subodmain.talentnest.com/api/v1/position_end_reasons`

## POST: Terminate an Employee

```shell
curl -X POST "https://subdomain.talentnest.com/api/v1/employees/{id}/terminate"
  -H 'Content-Type: application/json'
  -u 'TALENTNEST_API_KEY'
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

Terminates an employee with optional position end (termination) reason and termination date.

### HTTP Request

`POST https://subodmain.talentnest.com/api/v1/employees/{id}/terminate`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the employee to terminate

### JSON Body Parameters

Parameter | Required | Type | Description
--------- | -------- | ---- | -----------
position_end_reason_id | No | Integer | The ID of the position end (termination) reason.
termination_date | No | Date | The date that the employee was terminated in ISO 8601 format. If a date is not provide, the current date will be used.
