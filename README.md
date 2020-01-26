* Run `docker-compose up --build`
* Open on `http://localhost/`

* Run `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build` for development
* Run `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build` for production

* Remove container and image `docker container rm user-group__frontend-container user-group__backend-container user-group__db-container user-group__proxy-container && docker image rm user-group__frontend-image user-group__frontend-container user-group__backend-image user-group__db-image user-group__proxy-image`
                              
* Enter frontend shell `docker container run -it user-group__frontend-image sh`
