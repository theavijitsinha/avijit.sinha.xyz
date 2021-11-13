#!/usr/bin/env bash

docker run -d --rm --name avijit_sinha_xyz_dev -u node -p 3000:3000 -v "$(pwd)":/app -w /app node:16.13.0 tail -f /dev/null
