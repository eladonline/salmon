#!/usr/bin/env bash
set -e

#cd $HOME/.nvm/versions/8.2.1/bin
#. ~/.nvm/nvm.sh
#npm install

# setup NODE_ENV
# if [ ! -z "$DEPLOYMENT_GROUP_NAME" ]; then
#     export NODE_ENV=$DEPLOYMENT_GROUP_NAME

#     hasEnv=`grep "export NODE_ENV" ~/.bash_profile | cat`
#     if [ -z "$hasEnv" ]; then
#         echo "export NODE_ENV=$DEPLOYMENT_GROUP_NAME" >> ~/.bash_profile
#     else
#         sed -i "/export NODE_ENV=\b/c\export NODE_ENV=$DEPLOYMENT_GROUP_NAME" ~/.bash_profile
#     fi   
# fi

# add node to startup
#hasRc=`grep "su -l $USER" /etc/rc.d/rc.local | cat`
#if [ -z "$hasRc" ]; then
#    sudo sh -c "echo 'su -l $USER -c \"cd $HOME/.nvm/versions/8.2.1/bin;sh ./run.sh\"' >> /etc/rc.d/rc.local"
#be