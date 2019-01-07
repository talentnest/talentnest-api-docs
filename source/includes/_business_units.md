# Business Units

Business Units form the hierarchy of your company within TalentNest.

Attribute | Description
--------- | -----------
parent_id | The `ID` that this business unit belongs to.
major_unit_id *if available* | If major divisions are setup, the `ID` of the major division that this business unit belongs to.

## GET: All Business Units

```shell
curl "http://subdomain.talentnest.com/api/v1/business_units"
  -u "TALENTNEST_API_KEY:"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 2,
    "name": "XYZ Corp",
    "description": "XYZ Corp is a world leader in widgets.",
    "parent_id": null,
    "major_unit_id": null,
    "location": {
      "country": "Canada",
      "address": "3300 Bloor Street West",
      "postal": "M8X 2X3",
      "state": "Ontario",
      "city": "Toronto"
    }
  },
  {
    "id": 4,
    "name": "Finance",
    "description": null,
    "parent_id": 2,
    "major_unit_id": null,
    "location": {
      "country": "Canada",
      "address": "3300 Bloor Street West",
      "postal": "M8X 2X3",
      "state": "Ontario",
      "city": "Toronto"
    }
  },
  {
    "id": 5,
    "name": "Accounting",
    "description": null,
    "parent_id": 4,
    "major_unit_id": 4,
    "location": {
      "country": "Canada",
      "address": null,
      "postal": null,
      "state": null,
      "city": null
    }
  }
]
```
### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/business_units/`

## GET: Specific Business Unit

```json
[
  {
    "id": 2,
    "name": "XYZ Corp",
    "description": "XYZ Corp is a world leader in widgets.",
    "parent_id": null,
    "major_unit_id": null,
    "location": {
      "country": "Canada",
      "address": "3300 Bloor Street West",
      "postal": "M8X 2X3",
      "state": "Ontario",
      "city": "Toronto"
    }
  }
]
```

### HTTP Request

`GET https://subodmain.talentnest.com/api/v1/business_units/{id}`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the business unit to retrieve
