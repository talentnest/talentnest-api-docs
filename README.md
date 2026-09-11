# TalentNest API documentation

This repo builds the public API docs at [api.talentnest.com](https://api.talentnest.com).

The docs describe TalentNest’s REST API (`https://subdomain.talentnest.com/api/v1`): jobs, applications, candidates, employees, business units, and webhooks. Integrators authenticate with an API key (HTTP Basic, key as username).

The site is generated with [Slate](https://code.lord.io/slate/). Edit Markdown; do not edit HTML in `build/` or `gh-pages`.

## Edit

| File | What |
|------|------|
| `source/index.html.md` | Intro, auth, pagination |
| `source/includes/_jobs.md` | Jobs |
| `source/includes/_applications.md` | Applications |
| `source/includes/_candidates.md` | Candidates |
| `source/includes/_employees.md` | Employees |
| `source/includes/_business_units.md` | Business units |
| `source/includes/_webhooks.md` | Webhooks |
| `source/includes/_verbs.md` | HTTP verbs |
| `source/includes/_response_codes.md` | Status codes |
| `CHANGELOG.md` | API changes clients should know |

Curl examples use `https://subdomain.talentnest.com` — keep that spelling.

## Preview locally

Ruby 2.6 on the host is not worth it. Use the Slate Docker image and bind-mount `source/`:

```bash
docker run --rm --name talentnest-api-docs -p 4567:4567 \
  -v "$PWD/source:/srv/slate/source" \
  slatedocs/slate:latest serve
```

Open [http://127.0.0.1:4567/](http://127.0.0.1:4567/). Edits under `source/` should reload.

Stop:

```bash
docker rm -f talentnest-api-docs
```

The `Dockerfile` in this repo targets an old Debian/Ruby image and may fail `apt-get`. Prefer the command above.

## Publish

Pushes to `master` build the site and publish GitHub Pages (`gh-pages`) as **api.talentnest.com** (`source/CNAME`). See `.github/workflows/deploy.yml`.

Manual:

```bash
./deploy.sh
```

## License

`LICENSE` is Apache 2.0 because that is Slate’s license. Keep it.

It is **not** the client API contract. Access to TalentNest and the API is governed by the customer agreement and the API key, not this file.
