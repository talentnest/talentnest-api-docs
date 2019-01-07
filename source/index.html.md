---
title: TalentNest API

language_tabs: # must be one of https://git.io/vQNgJ
  - shell

toc_footers:
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - jobs
  - applications
  - business_units
  - verbs
  - response_codes
  - webhooks

search: true
---

# Introduction

Welcome to the TalentNest API! Our API allows you to perform queries (both safe and destructive) without having to interface with the TalentNest website. You can obtain an API key which will provide you with access to data belonging to your client.

The API is accessible through https://subdomain.talentnest.com/api/v1, where subdomain is the subdomain of your client on the TalentNest website. All API requests must be made via SSL (HTTPS). Non-SSL requests will be ignored. As well, all requests must be authenticated to succeed (see the [Authentication section](#authentication)).

The API accepts resources and provides responses using JSON. The format may be specified by the URI extension (ie. https://subdomain.talentnest.com/api/v1/employees.json), but is not required. If transmitting a JSON representation of a resource, the Content‐Type header must be set to application/json.

The API is RESTful. Each request has an associated HTTP verb which must be used. Certain endpoints accept resources as a part of the request.

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
