install:
	cd ./client && yarn
	cd ./server && yarn

build:
	cd ./client && yarn build
	cd ./server && yarn build

dev-client:
	cd ./client && yarn dev

dev-server:
	cd ./server && yarn dev
