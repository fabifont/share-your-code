# share-your-code

Simple code pasting website.

## Install
### Clone the git repository
```https://github.com/xFabifont/share-your-code.git```

### Install npm modules
Run ```npm install``` inside the project folder

## Run the server
### Start mongo daemon
```systemctl start mongodb```
Make sure you created a collection named 'share-your-code' or change it inside the server.js file

### Start 
Run ```npm start``` inside the project folder

## Try the docker version
### Change branch
Run ```git checkout docker``` inside the project folder

### Start docker daemon
```systemctl start docker```

### Run 
Run ```docker-compose up``` or ```docker-compose up -d``` (to execute it in background) inside the project folder
