#!/usr/bin/env bash
# if [ ! -z "${AWS_CODE_DEPLOY_DEPLOYMENT_GROUP_NAME}" ]; then
#  export NODE_ENV=${AWS_CODE_DEPLOY_DEPLOYMENT_GROUP_NAME}
# fi

cd ${DEPLOY_FILE_PATH}

pm2 start server.js -n www -i 0 -f
