#!/bin/bash

# Start the vue front-end
npm run serve &

# Start the json-server backend
npm run backend &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
