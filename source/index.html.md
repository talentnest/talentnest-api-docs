---
title: TalentNest API

language_tabs: # must be one of https://git.io/vQNgJ
  - shell

toc_footers:
  - <a href='https://api.talentnest.com'>api.talentnest.com</a>
  - <a href='mailto:support@talentnest.com'>support@talentnest.com</a>

includes:
  - jobs
  - applications
  - business_units
  - candidates
  - employees
  - employment_process_step_statuses
  - verbs
  - response_codes
  - webhooks

search: true

code_clipboard: true
---

# Introduction

The TalentNest API lets you read and update your client's TalentNest data without using the website.

Base URL: `https://{subdomain}.talentnest.com/api/v1`

Replace `{subdomain}` with your client's TalentNest subdomain. All requests must use HTTPS. HTTP is ignored. Every request must be authenticated.

Send and receive JSON. You may append `.json` to a path (for example `/api/v1/employees.json`); it is optional. When you send a JSON body, set `Content-Type: application/json`.

Use the HTTP verb documented for each endpoint.

# Authentication

> API key as the Basic Auth username (note the trailing colon):

```shell
# Trailing colon after the API key; password is empty
curl https://subdomain.talentnest.com/api/v1/employees -u TALENTNEST_API_KEY:
```

> Or an Authorization header. Base64-encode `YOUR_API_KEY:` (key plus colon):

```shell
curl https://subdomain.talentnest.com/api/v1/employees -H 'Authorization: Basic VEFMRU5UTkVTVF9BUElfS0VZOg=='
```

Replace `TALENTNEST_API_KEY` with your API key and `subdomain` with your TalentNest subdomain.

Authentication uses [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). The username is your API key. Leave the password empty.

You can instead send:

`Authorization: Basic <base64("TALENTNEST_API_KEY:")>`

<aside class="notice">
Replace <code>TALENTNEST_API_KEY</code> with your API key. The key is scoped to one TalentNest client.
</aside>

# Pagination

> Example pagination response headers

```shell
HTTP/1.1 200 OK
Link: <https://subdomain.talentnest.com/api/v1/applications?page=1>; rel="first",
  <https://subdomain.talentnest.com/api/v1/applications?page=2>; rel="prev",
  <https://subdomain.talentnest.com/api/v1/applications?page=17>; rel="last",
  <https://subdomain.talentnest.com/api/v1/applications?page=4>; rel="next"
X-Page: 3
X-Per-Page: 50
X-Total: 814
```

List endpoints are paginated. Responses include a `Link` header ([RFC 5988](https://tools.ietf.org/html/rfc5988)):

| Rel | Description |
|-----|-------------|
| first | First page |
| next | Next page |
| prev | Previous page |
| last | Last page |

<aside class="notice">If <code>Link</code> is omitted, there is only one page.
</aside>

Also:

| Header | Description |
|--------|-------------|
| X-Page | Current page |
| X-Per-Page | Page size. Default `50`. |
| X-Total | Total number of matching records |

### Query string parameters

| Parameter | Description |
|-----------|-------------|
| per_page *optional* | Page size. Default `50`. Maximum `100`, except `GET /jobs` which allows `300`. |
| page *optional* | Page number. |

# Endpoints

All requests go to `https://{subdomain}.talentnest.com`.

A malformed path or missing resource returns an `InvalidParameter` or `ResourceNotFound` error. Path placeholders look like `{id}`.

<aside class="notice">
For resources that allow writes, the JSON fields you may send on <code>POST</code>, <code>PUT</code>, or <code>PATCH</code> are the fields returned by <code>GET</code> for that resource, unless an endpoint documents extra body parameters.
</aside>

<aside class="warning">
Writes and deletes are your responsibility. TalentNest cannot restore data lost through the API. Pass <code>dry_run=true</code> on a mutating request to validate it without committing (for example <code>POST /api/v1/employees/123/terminate?dry_run=true</code>).
</aside>
