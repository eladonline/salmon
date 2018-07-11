#!/bin/bash
sudo apt-get -y -qq update
sudo apt-get -y -qq install python3.4-dev
sudo apt-get install python3-setuptools
sudo easy_install3 pip
sudo pip install awscli --upgrade