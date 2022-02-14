#!/bin/bash

PLATFORM=`uname`

# Install node modules for the client
echo -n "Installing node modules for the client..."
#(cd client; npm install) &> /dev/null
echo "done!"

# Install node modules for the server
echo -n "Installing node modules for the server..."
#(cd server; npm install) &> /dev/null
echo "done!"

if [[ $PLATFORM = "Darwin" ]]; then
  brew list tmux &> /dev/null
  if [[ $? -eq 1 ]]; then
    echo -n "No tmux found. Installing..."
    brew install tmux &> /dev/null
    echo "done!"
  fi
else
  echo "TODO: finish for other platforms"
fi
