#!/bin/bash
isBad=false
for file in $(git diff --cached --name-only | grep -E '\.(js|jsx)$')
do
  git show ":$file" | eslint --stdin --stdin-filename "$file" --quiet # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "ESLint failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run eslint."
    isBad=true
  fi
done
if [ "$isBad" = true ]; then
    exit 1 # exit with failure status
fi 