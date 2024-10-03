PROJECT_NAME=front-app

DOCKER_COMPOSE_FILE_BASE=./docker-compose.base.yml

COMMAND=docker-compose -f $(DOCKER_COMPOSE_FILE_BASE) -p $(PROJECT_NAME)

start-dev:
	$(COMMAND) -f ./docker-compose.dev.yml up -d

start-prod: 
	$(COMMAND) -f ./docker-compose.prod.yml up -d

restart:
	$(COMMAND) restart

stop:
	$(COMMAND) stop

down:
	$(COMMAND) down

logs:
	docker logs -f front-app

start-dev-logs: 
	$(MAKE) start-dev && $(MAKE) logs

start-prod-logs: 
	$(MAKE) start-prod && $(MAKE) logs
