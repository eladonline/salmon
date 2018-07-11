( echo "cat <<EOF >./codedeploy_scripts/run.sh";
  cat ./codedeploy_scripts/run-template.sh;
  echo "EOF";
) >temp.sh
. temp.sh
cat ./codedeploy_scripts/run.sh