# boingoChatBotUI
* Running on docker
  - Build
  
    "docker build -t ui ."
    
  - Run
  
    "docker run -p 3000:3000 -v "$PWD"/dist/:/usr/share/nginx/html/ ui"
