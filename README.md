## :notebook_with_decorative_cover: Description

Back end for App to record home bookkeeping. Built with with Node.js, Express and database in MongoDB.

## :window: [Front-End](https://github.com/thi-coutinho/projeto14-mywallet-front)

## :gear: How to run
You need to have [mongoDB](https://www.mongodb.com/docs/manual/installation/) installed and a mongo server running. Once you have that, go to the project folder root and run the following to install all dependencies:
```bash
npm install
```
Create a ``` .env``` file based on the ```.env.example``` and entry a port number and the uri for the connection with mongodb. Example: If you have mongodb locally running on default port, with a collection named 'mywallet' the uri would be: 

```bash
DATABASE_URL=mongodb://127.0.0.1:27017/mywallet
```
Now run the mongodb server
```bash
mongod --dbpath ~/.mongo
```
And finally
```bash
npm run dev
```
You should see a log 'Server running at port [#PORT]'