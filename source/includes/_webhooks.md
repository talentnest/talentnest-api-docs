# Webhooks


TalentNest webhooks are events that you can subscribe to. When that event occurs, TalentNest will automatically notify you with a JSON `POST` request to a client specified target URL.

To subscribe to an event, contact us at support@talentnest.com.

## Available Webhooks

```shell
X-Event-Name: applicant_hired
```

Event | Description
---------- | -------
applicant_hired | Notification when a candidate job application is hired

The name of the event will be sent as the `X-Event-Name` header.

## Encryption

``` shell
X-Event-Signature: sha256 417a453d456ff29aabcdd5b68afdfbf8b2d160b8dd4818fdf34dc4940d509703
```

> To compute the HMAC digest in Ruby:

```shell
digest = OpenSSL::Digest.new('sha256')
signature = OpenSSL::HMAC.hexdigest(digest, secret_key, body)
```

> To compute the HMAC digest in PHP:

```shell
<?php
  // Requires PHP >= 5.1.2 and PECL hash >= 1.1
  $signature = hash_hmac('sha256', $body, $secret_key);
?>
```


The reqeusts from TalentNest to your system will be signed. The secret key is assigned when the webhook subscription is created. The algorithm used for creating the signature is HMAC SHA256 on the body of the request and the signature itself is sent as the `X-Event-Signature` header.

The `X-Event-Signature` header contains: the SHA algorithm used to generate the signature, a space, and the signature. To verify the request came from TalentNest, compute the HMAC digest using your secret key and the body and compare it to the signature portion (after the space) contained in the header. If they match, you can be sure the web hook was sent from TalentNest.

## Applicant Hired Webhook

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

The New Hire webhook will be sent eveytime a job candidate has been successfully hired in TalentNest.


