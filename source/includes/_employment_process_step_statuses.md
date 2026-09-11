# Employment process step statuses

## GET: All step statuses

```shell
curl "https://subdomain.talentnest.com/api/v1/employment_process_step_statuses"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
{
  "employment_process_step_statuses": [
    "Inactive",
    "Active",
    "Completed",
    "Invited",
    "Deselected"
  ]
}
```

Returns the status names used on employment-process steps (`Inactive`, `Active`, `Completed`, `Invited`, `Deselected`). Exact strings are those configured for the client.

### HTTP Request

`GET https://subdomain.talentnest.com/api/v1/employment_process_step_statuses`
