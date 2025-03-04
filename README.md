<img width="400px" src="docs/img/logo.png">

[![Latest Release](https://img.shields.io/github/v/release/grafana/oncall?display_name=tag&sort=semver)](https://github.com/grafana/oncall/releases)
[![License](https://img.shields.io/github/license/grafana/oncall)](https://github.com/grafana/oncall/blob/dev/LICENSE)
[![Docker Pulls](https://img.shields.io/docker/pulls/grafana/oncall)](https://hub.docker.com/r/grafana/oncall/tags)
[![Slack](https://img.shields.io/badge/join%20slack-%23grafana-%2Doncall-brightgreen.svg)](https://slack.grafana.com/)
[![Discussion](https://img.shields.io/badge/discuss-oncall%20forum-orange.svg)](https://github.com/grafana/oncall/discussions)
[![Build Status](https://drone.grafana.net/api/badges/grafana/oncall/status.svg?ref=refs/heads/dev)](https://drone.grafana.net/grafana/oncall)

Developer-friendly incident response with brilliant Slack integration.

<img width="60%" src="screenshot.png">

- Collect and analyze alerts from multiple monitoring systems
- On-call rotations based on schedules
- Automatic escalations
- Phone calls, SMS, Slack, Telegram notifications

## Getting Started

We prepared multiple environments:

- [production](https://grafana.com/docs/grafana-cloud/oncall/open-source/#production-environment)
- [developer](./dev/README.md)
- hobby (described in the following steps)

1. Download [`docker-compose.yml`](docker-compose.yml):

```bash
curl -fsSL https://raw.githubusercontent.com/grafana/oncall/dev/docker-compose.yml -o docker-compose.yml
```

2. Set variables:

```bash
echo "DOMAIN=http://localhost:8080
COMPOSE_PROFILES=with_grafana  # Remove this line if you want to use existing grafana
SECRET_KEY=my_random_secret_must_be_more_than_32_characters_long" > .env
```

3. Launch services:

```bash
docker-compose up -d
```

4. Issue one-time invite token:

```bash
docker-compose run engine python manage.py issue_invite_for_the_frontend --override
```

**Note**: if you remove the plugin configuration and reconfigure it, you will need to generate a new one-time invite token for your new configuration.

5. Go to [OnCall Plugin Configuration](http://localhost:3000/plugins/grafana-oncall-app), using log in credentials as defined above: `admin`/`admin` (or find OnCall plugin in configuration->plugins) and connect OnCall _plugin_ with OnCall _backend_:

```
Invite token: ^^^ from the previous step.
OnCall backend URL: http://engine:8080
Grafana Url: http://grafana:3000
```

6. Enjoy! Check our [OSS docs](https://grafana.com/docs/grafana-cloud/oncall/open-source/) if you want to set up Slack, Telegram, Twilio or SMS/calls through Grafana Cloud.

## Update version

To update your Grafana OnCall hobby environment:

```shell
# Update Docker image
docker-compose pull engine

# Re-deploy
docker-compose up -d
```

After updating the engine, you'll also need to click the "Update" button on the [plugin version page](http://localhost:3000/plugins/grafana-oncall-app?page=version-history).
See [Grafana docs](https://grafana.com/docs/grafana/latest/administration/plugin-management/#update-a-plugin) for more info on updating Grafana plugins.

## Join community

<a href="https://github.com/grafana/oncall/discussions/categories/community-calls"><img width="200px" src="docs/img/community_call.png"></a>
<a href="https://github.com/grafana/oncall/discussions"><img width="200px" src="docs/img/GH_discussions.png"></a>
<a href="https://slack.grafana.com/"><img width="200px" src="docs/img/slack.png"></a>

## Stargazers over time

[![Stargazers over time](https://starchart.cc/grafana/oncall.svg)](https://starchart.cc/grafana/oncall)

## Further Reading

- _Migration from the PagerDuty_ - [Migrator](https://github.com/grafana/oncall/tree/dev/tools/pagerduty-migrator)
- _Documentation_ - [Grafana OnCall](https://grafana.com/docs/grafana-cloud/oncall/)
- _How To Add Integration_ - [How to Add Integration](https://github.com/grafana/oncall/tree/dev/engine/config_integrations/README.md)
- _Blog Post_ - [Announcing Grafana OnCall, the easiest way to do on-call management](https://grafana.com/blog/2021/11/09/announcing-grafana-oncall/)
- _Presentation_ - [Deep dive into the Grafana, Prometheus, and Alertmanager stack for alerting and on-call management](https://grafana.com/go/observabilitycon/2021/alerting/?pg=blog)
