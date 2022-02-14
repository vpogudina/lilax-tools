#!/bin/bash

function display_usage() {
  echo "Usage ./runner.sh [start|stop]"
  echo "    start    Start client and server"
  echo "    stop     Stop client and server"
}

function start() {
  tmux new-session -d -s CLIENT
  tmux new-session -d -s SERVER

  tmux send-keys -t CLIENT "cd client; npm start" C-m
  tmux send-keys -t SERVER "cd server; npx nodemon server.js" C-m
}

function stop() {
  tmux kill-session -t CLIENT
  tmux kill-session -t SERVER
}

if [[ "$1" == "start" ]]; then
  start
elif [[ "$1" == "stop" ]]; then
  stop
else
  display_usage
fi
