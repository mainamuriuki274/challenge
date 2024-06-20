.PHONY: help build up_detached up down install run

#@-- help command to show usage of make commands --@#
help:
	@echo "----------------------------------------------------------------------------"
	@echo "-                     Available docker commands                             -"
	@echo "----------------------------------------------------------------------------"
	@echo "---> make build         - To build the docker image"
	@echo "---> make up_detached   - To create and start containers in detached mode"
	@echo "---> make up            - To create and start containers in attached mode"
	@echo "---> make down          - To stop and remove containers"
	@echo "----------------------------------------------------------------------------"
	@echo "-                     Available shell commands                             -"
	@echo "----------------------------------------------------------------------------"
	@echo "---> make install       - To install the application dependencies"
	@echo "---> make run         - To run the application"

#@========================== Running without docker ======================================@#

# Command to install application dependencies using npm
install:
	npm install

# Command to run the application in development mode using npm
run:
	npm run dev

#@========================== Docker local/staging Commands ======================================@#

# Command to build the Docker image
build:
	@ echo "Building image..."
	@ docker compose -f compose.yaml build --force-rm

# Command to create and start containers in detached mode
up_detached:
	@ echo "Creating and starting containers in detached mode..."
	@ docker compose -f compose.yaml up -d

# Command to create and start containers in attached mode
up:
	@ echo "Creating and starting containers..."
	@ docker compose -f compose.yaml up

# Command to stop and remove containers
down:
	@ echo "Stopping and removing containers..."
	@ docker compose -f compose.yaml down
