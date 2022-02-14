# LILAX TOOLS
Soon here will be many tools to make lilax team life easier

## Downloading tools from git
```sh
$ git clone https://github.com/vpogudina/lilax-tools.git
$ cd lilax-tools
```

## Installing tools
You have two options to install - manual, or using script

### Using script
Script will install tmux to run client and server, and it will be easier to start and stop both processes at the same time

After cloning repo from GitHub you need to run ./install.sh to install node_modules in both client and server side. You only need to run it once. After that run ./runner.sh start |stop each time you want to start or stop the application. Runner will open application on localhost:3000
```sh
$ ./install.sh
$ ./runner.sh start
$ ./runner.sh stop
```

### Manual installation
Server side will be running on port 8000, client side on port 3000, don't forget to stop both after you are done :)
```sh
$ cd server
$ npm install
$ npx nodemon server.js
$ cd ../client
$ npm install
$ npm start
```

## List of tools
So far only one tiny tool that however can help a lot I hope :)
Our canary generate logs in CloudWatch, and in the event of error also generate agent log chunks. To easily get those logs in the format that https://ccplogparser.connectdemo.com/ understands: 
- Open **Log events**
- Click on **Actions** dropdown
- Select **Download search results (CSV)**

On the **localhost:3000** 
- drag-and-drop, or upload this csv (you can upload multiple csv), 
- click **Submit**, 
- click on the blue button with filename that appeared after submit 
- download starts automatically, and it can be multiple files, if there was more that one group of log chunks

Csv file will be added to /server/public folder, but will not get deleted automatically, so you may need to clean it from time to time, until I'll update this tool.

