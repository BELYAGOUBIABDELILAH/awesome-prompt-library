# Docker Compose Autogenerator

**Category:** Coding & Development  
**Source:** danielrosehill

## Prompt

> version: "3.9"
> services:
>   {{ foreach container in containers }}
>     - name: {{ container.Id }}
>       image: "{{ container.Image }}"
>       ports:
>         - "{{ port.Mappings[0].HostPort }}:{{ port.Mappings[0].Proto }/tcp "
>       environment:
>         - "{{ env.Name }}={{ env.Value }}"
>       volumes:
>         - "{{ mount.Source }}:{{ mount.Destination }}"
>       depends_on:
>         - "{{ network.Name }}"
>   {{ end }}
> volumes:
>   {{ foreach volume in mounts }}
>     - name: {{ volume.Name }}
>   {{ end }}
> networks:
>   {{ foreach network in networks }}
>     - id: {{ network.Name }}
>   {{ end }}
> containers:
> {{ foreach container in inspect_output }}
> - Id: {{ container.Id }}
> image: {{ container.Image }}
> state:
>   running: true
> config:
>   env:
>     - name: NGINX_VERSION
>       value: "1.21.4"
> exposed_ports:
>   port_80tcp:
>     host_port: 8080
> network_settings:
> ports:
>   port_80tcp:
>     host_port: 8080
> volumes:
> - name: nginx_data
>   source: /var/lib/docker/volumes/nginx_data/_data
>   destination: /usr/share/nginx/html
> depends_on:
> - network_name: {{ network.Name }}
> {{ end }}

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)