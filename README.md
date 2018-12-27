MongoDB README

Welcome to MongoDB!

### COMPONENTS

  mongod - The database server.
  mongos - Sharding router.
  mongo  - The database shell (uses interactive javascript).

### UTILITIES

  mongodump         - Create a binary dump of the contents of a database.
  mongorestore      - Restore data from the output created by mongodump.
  mongoexport       - Export the contents of a collection to JSON or CSV.
  mongoimport       - Import data from JSON, CSV or TSV.
  mongofiles        - Put, get and delete files from GridFS.
  mongostat         - Show the status of a running mongod/mongos.
  bsondump          - Convert BSON files into human-readable formats.
  mongoreplay       - Traffic capture and replay tool.
  mongotop          - Track time spent reading and writing data.
  install_compass   - Installs MongoDB Compass for your platform.

### BUILDING

  See docs/building.md.

### RUNNING

  For command line options invoke:

    $ ./mongod --help

  To run a single server database:

    $ sudo mkdir -p /data/db
    $ ./mongod
    $
    $ # The mongo javascript shell connects to localhost and test database by default:
    $ ./mongo
    > help

### INSTALLING COMPASS

  You can install compass using the install_compass script packaged with MongoDB:

    $ ./install_compass

  This will download the appropriate MongoDB Compass package for your platform
  and install it.

### DRIVERS

  Client drivers for most programming languages are available at
  https://docs.mongodb.com/manual/applications/drivers/. Use the shell
  ("mongo") for administrative tasks.

### BUG REPORTS

  See https://github.com/mongodb/mongo/wiki/Submit-Bug-Reports.

### PACKAGING

  Packages are created dynamically by the package.py script located in the
  buildscripts directory. This will generate RPM and Debian packages.

### DOCUMENTATION

  https://docs.mongodb.com/manual/

### CLOUD HOSTED MONGODB

  https://www.mongodb.com/cloud/atlas

### MAIL LISTS

  https://groups.google.com/forum/#!forum/mongodb-user

    A forum for technical questions about using MongoDB.

  https://groups.google.com/forum/#!forum/mongodb-dev

    A forum for technical questions about building and developing MongoDB.

### LEARN MONGODB

  https://university.mongodb.com/

### LICENSE

  MongoDB is free and open-source. Versions released prior to October 16,
  2018 are published under the AGPL. All versions released after October
  16, 2018, including patch fixes for prior versions, are published under
  the Server Side Public License (SSPL) v1. See individual files for
  details.

### Screenshots

#### What is MongoDB
![Screenshot](./Screenshots/Screenshot1.png?raw=true "Screenshot")

#### How it Works
![Screenshot](./Screenshots/Screenshot2.png?raw=true "Screenshot")


#### JSON(BSON) Data Format
![Screenshot](./Screenshots/Screenshot3.png?raw=true "Screenshot")

#### Relations
![Screenshot](./Screenshots/Screenshot4.png?raw=true "Screenshot")

#### MongoDB Ecosystem
![Screenshot](./Screenshots/Screenshot5.png?raw=true "Screenshot")

#### Working With MongoDB
![Screenshot](./Screenshots/Screenshot6.png?raw=true "Screenshot")

#### Closer Look on Data Layer of MongoDB
![Screenshot](./Screenshots/Screenshot7.png?raw=true "Screenshot")

#### MongoDB Topics
![Screenshot](./Screenshots/Screenshot8.png?raw=true "Screenshot")

#### Databases, Collections, Documents
![Screenshot](./Screenshots/Screenshot9.png?raw=true "Screenshot")

#### CRUD Operation and MongoDB
![Screenshot](./Screenshots/Screenshot10.png?raw=true "Screenshot")

#### CRUD Queries
![Screenshot](./Screenshots/Screenshot11.png?raw=true "Screenshot")

#### Flight Data Example1
![Screenshot](./Screenshots/Screenshot12.png?raw=true "Screenshot")

#### Delete Many
![Screenshot](./Screenshots/Screenshot13.png?raw=true "Screenshot")

#### Insert Many
![Screenshot](./Screenshots/Screenshot14.png?raw=true "Screenshot")

#### find & findOne
![Screenshot](./Screenshots/Screenshot15.png?raw=true "Screenshot")

#### Update, UpdateOne & UpdateMany
![Screenshot](./Screenshots/Screenshot16.png?raw=true "Screenshot")

![Screenshot](./Screenshots/Screenshot17.png?raw=true "Screenshot")

#### replaceOne
![Screenshot](./Screenshots/Screenshot18.png?raw=true "Screenshot")

#### ForEach with find
![Screenshot](./Screenshots/Screenshot19.png?raw=true "Screenshot")

#### toArray with find
![Screenshot](./Screenshots/Screenshot20.png?raw=true "Screenshot")

#### Projection
![Screenshot](./Screenshots/Screenshot21.png?raw=true "Screenshot")

![Screenshot](./Screenshots/Screenshot22.png?raw=true "Screenshot")

#### Embedded Document
![Screenshot](./Screenshots/Screenshot23.png?raw=true "Screenshot")

#### Array of Embedded Document
![Screenshot](./Screenshots/Screenshot24.png?raw=true "Screenshot")

#### Example of Embedded Document
![Screenshot](./Screenshots/Screenshot25.png?raw=true "Screenshot")

#### Accessing Array Data from a document
![Screenshot](./Screenshots/Screenshot26.png?raw=true "Screenshot")

#### Accessing Object Data from a document
![Screenshot](./Screenshots/Screenshot27.png?raw=true "Screenshot")

#### Summary of CRUD Operation in Mongo
![Screenshot](./Screenshots/Screenshot28.png?raw=true "Screenshot")

#### SchemaLess or Not!
![Screenshot](./Screenshots/Screenshot29.png?raw=true "Screenshot")

#### To Schema or Not to schema!
![Screenshot](./Screenshots/Screenshot30.png?raw=true "Screenshot")

#### SQL Like Approach
![Screenshot](./Screenshots/Screenshot31.png?raw=true "Screenshot")

#### Data Types
![Screenshot](./Screenshots/Screenshot32.png?raw=true "Screenshot")

#### Creting a Document with special commands
![Screenshot](./Screenshots/Screenshot33.png?raw=true "Screenshot")

#### Data Schema and Data Modelling
![Screenshot](./Screenshots/Screenshot34.png?raw=true "Screenshot")

#### Relations
![Screenshot](./Screenshots/Screenshot35.png?raw=true "Screenshot")

#### One to One Relation - Patient Disease Summary Embeeded Document
![Screenshot](./Screenshots/Screenshot36.png?raw=true "Screenshot")

#### One to One Relation - Patient Disease Summary Refrence Document
![Screenshot](./Screenshots/Screenshot37.png?raw=true "Screenshot")

#### One to Many Relation - Thread Answer
![Screenshot](./Screenshots/Screenshot38.png?raw=true "Screenshot")

#### One to Many Relation - Thread Answer Embeeded Document Query
![Screenshot](./Screenshots/Screenshot39.png?raw=true "Screenshot")

