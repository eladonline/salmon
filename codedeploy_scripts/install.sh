#!/usr/bin/env bash
set -e

#curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
#. ~/.nvm/nvm.sh
#nvm install 8.2.1
#nvm use 8.2.1

rm -rf /home/ec2-user/inx-front

curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs
npm install

#rm -rf /home/ec2-user/inx-front
#sudo yum install gcc-c++ make
#sudo yum install openssl-devel
#sudo yum install git

#git clone https://github.com/isaacs/npm.git
#cd npm
#sudo make install

# install pm2 module globaly
npm install -g pm2
pm2 update


#testing AWS X-RAY 

#!/bin/bash
# download & install AWS X-RAY Deamon
#curl https://s3.dualstack.ap-southeast-1.amazonaws.com/aws-xray-assets.ap-southeast-1/xray-daemon/aws-xray-daemon-2.x.rpm -o /home/ec2-user/xray.rpm
#yum install -y /home/ec2-user/xray.rpm


# if [ $DEPLOYMENT_GROUP_NAME = "PROD_CEM_API_APP" ]
# then
    # echo "license_key: {{license_key}}" | sudo tee -a /etc/newrelic-infra.yml
    # sudo curl -o /etc/yum.repos.d/newrelic-infra.repo https://download.newrelic.com/infrastructure_agent/linux/yum/el/6/x86_64/newrelic-infra.repo
    # sudo yum -q makecache -y --disablerepo='*' --enablerepo='newrelic-infra'
    # sudo yum install newrelic-infra -y
# fi 