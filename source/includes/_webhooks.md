# Webhooks

TalentNest can POST JSON to a URL you provide when certain events occur.

To subscribe, contact [support@talentnest.com](mailto:support@talentnest.com). You will receive a secret key used to verify signatures.

## Available events

```shell
X-Event-Name: applicant_hired
```

| Event | When |
|-------|------|
| new_application | A candidate successfully applies to a job. |
| applicant_hired | A candidate is hired. The payload is the new employee record (use this for payroll / HRIS). |

The event name is sent in the `X-Event-Name` header.

## Signature

```shell
X-Event-Signature: sha256 417a453d456ff29aabcdd5b68afdfbf8b2d160b8dd4818fdf34dc4940d509703
```

> HMAC in Ruby:

```shell
digest = OpenSSL::Digest.new('sha256')
signature = OpenSSL::HMAC.hexdigest(digest, secret_key, body)
```

> HMAC in PHP:

```shell
<?php
  $signature = hash_hmac('sha256', $body, $secret_key);
?>
```

Each request is signed with HMAC-SHA256 of the **raw body** and your secret. The header is:

`X-Event-Signature: sha256 <hex digest>`

Compute the digest the same way and compare it to the hex portion after the space. If they match, the POST came from TalentNest.

## New application

```json
{
  "application_id": 1765253,
  "job": {
    "id": 25668,
    "name": "Parts Manager - Automotive",
    "employment_type": "Full time"
  },
  "candidate": {
    "email": "jj@talentnest.com",
    "first_name": "Jake",
    "last_name": "Joseph",
    "phone": "416-123-5555",
    "language_preference": "en",
    "location": {
      "address": "3300 Bloor Street West",
      "city": "Toronto",
      "state": "Ontario",
      "postal": "M8X 2X3",
      "country": "Canada"
    }
  }
}
```

Sent when a candidate finishes applying. Fetch the full application with `GET /api/v1/applications/{application_id}` if you need more than this payload.

## Applicant hired

```json
{
  "employee_id": 3234124,
  "employee_number": null,
  "business_unit_id": 422342,
  "business_unit_name": "Marketing Department",
  "job_title": "Manager - Social Media",
  "hired_on": "2017-12-12",
  "manager_id": 98644,
  "first_name": "Samantha",
  "last_name": "Murphy",
  "email": "samantha.murphy@talentnest.com",
  "phone": "416-555-555",
  "location": {
    "address": "3300 Bloor St. West",
    "city": "Toronto",
    "state": "Ontario",
    "postal": "M8X 2X2",
    "country": "Canada"
  }
}
```

Sent when a candidate is hired. `employee_id` is the new employee. Fetch `GET /api/v1/employees/{employee_id}` for the full record.
