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

#### One to Many Relation - City Person Refrence Document
![Screenshot](./Screenshots/Screenshot40.png?raw=true "Screenshot")

#### One to Many Relation - City Person Refrence Document Query
![Screenshot](./Screenshots/Screenshot41.png?raw=true "Screenshot")

#### Many to Many Relation - Customers products 
![Screenshot](./Screenshots/Screenshot42.png?raw=true "Screenshot")

#### Many to Many Relation - Customers products Refrence Driven Approach
![Screenshot](./Screenshots/Screenshot43.png?raw=true "Screenshot")

#### Many to Many Relation - Customers products Embedded Driven Approach
![Screenshot](./Screenshots/Screenshot44.png?raw=true "Screenshot")

#### Many to Many Relation - Book Author Refrence Driven Approach
![Screenshot](./Screenshots/Screenshot45.png?raw=true "Screenshot")

#### Many to Many Relation - Book Author Refrence Driven Approach Query
![Screenshot](./Screenshots/Screenshot46.png?raw=true "Screenshot")

#### Relation Options
![Screenshot](./Screenshots/Screenshot47.png?raw=true "Screenshot")

#### $lookup - Aggregate Function
![Screenshot](./Screenshots/Screenshot48.png?raw=true "Screenshot")

#### $lookup & $unwind - Aggregate Function Query
![Screenshot](./Screenshots/Screenshot49.png?raw=true "Screenshot")

#### Blog Project 
![Screenshot](./Screenshots/Screenshot50.png?raw=true "Screenshot")

#### Blog Rough Schema Design
![Screenshot](./Screenshots/Screenshot51.png?raw=true "Screenshot")

#### Schema Validation
![Screenshot](./Screenshots/Screenshot52.png?raw=true "Screenshot")

#### Level of Schema Validation
![Screenshot](./Screenshots/Screenshot53.png?raw=true "Screenshot")

#### Schema Validation Error 
![Screenshot](./Screenshots/Screenshot54.png?raw=true "Screenshot")

#### Data Modelling and Structure - Things to Consider
![Screenshot](./Screenshots/Screenshot55.png?raw=true "Screenshot")

#### Modeling a Schema and Database
![Screenshot](./Screenshots/Screenshot56.png?raw=true "Screenshot")

#### mongod --help
![Screenshot](./Screenshots/Screenshot57.png?raw=true "Screenshot")

#### For setting database path
![Screenshot](./Screenshots/Screenshot58.png?raw=true "Screenshot")

#### For setting log path
![Screenshot](./Screenshots/Screenshot59.png?raw=true "Screenshot")

#### Setting Config File
![Screenshot](./Screenshots/Screenshot60.png?raw=true "Screenshot")

#### Help Command
![Screenshot](./Screenshots/Screenshot61.png?raw=true "Screenshot")

#### DB Help Command
![Screenshot](./Screenshots/Screenshot62.png?raw=true "Screenshot")

#### Collection Help Command
![Screenshot](./Screenshots/Screenshot63.png?raw=true "Screenshot")

#### Create Document
![Screenshot](./Screenshots/Screenshot64.png?raw=true "Screenshot")

#### Write Concern
![Screenshot](./Screenshots/Screenshot65.png?raw=true "Screenshot")

#### Write Concern Queries
![Screenshot](./Screenshots/Screenshot66.png?raw=true "Screenshot")

#### Atomicity
![Screenshot](./Screenshots/Screenshot67.png?raw=true "Screenshot")

#### Write Operation Summary
![Screenshot](./Screenshots/Screenshot68.png?raw=true "Screenshot")

#### Reading DataSets Terms
![Screenshot](./Screenshots/Screenshot69.png?raw=true "Screenshot")

#### Methods, Filters & Operators
![Screenshot](./Screenshots/Screenshot70.png?raw=true "Screenshot")

#### Operators
![Screenshot](./Screenshots/Screenshot71.png?raw=true "Screenshot")

#### How Operators impact our data
![Screenshot](./Screenshots/Screenshot72.png?raw=true "Screenshot")

#### Query Selectors & Projection Operators
![Screenshot](./Screenshots/Screenshot73.png?raw=true "Screenshot")

#### findOne Query
![Screenshot](./Screenshots/Screenshot74.png?raw=true "Screenshot")

#### Query and Projection Operators Query
![Screenshot](./Screenshots/Screenshot75.png?raw=true "Screenshot")

#### Query Selectors - Comparison
![Screenshot](./Screenshots/Screenshot76.png?raw=true "Screenshot")

#### Querying Embedded Fields
![Screenshot](./Screenshots/Screenshot77.png?raw=true "Screenshot")

#### Querying Embedded Array
![Screenshot](./Screenshots/Screenshot78.png?raw=true "Screenshot")

#### Querying Embedded Array Exact
![Screenshot](./Screenshots/Screenshot79.png?raw=true "Screenshot")

#### $in Operator
![Screenshot](./Screenshots/Screenshot80.png?raw=true "Screenshot")

#### $nin Operator
![Screenshot](./Screenshots/Screenshot81.png?raw=true "Screenshot")

#### $or Operator
![Screenshot](./Screenshots/Screenshot82.png?raw=true "Screenshot")

#### $nor Operator
![Screenshot](./Screenshots/Screenshot83.png?raw=true "Screenshot")

#### $and Operator
![Screenshot](./Screenshots/Screenshot84.png?raw=true "Screenshot")

#### Why there is need of $and Operator
![Screenshot](./Screenshots/Screenshot85.png?raw=true "Screenshot")

#### $not Operator
![Screenshot](./Screenshots/Screenshot86.png?raw=true "Screenshot")

#### $exists  Operator
![Screenshot](./Screenshots/Screenshot87.png?raw=true "Screenshot")

#### $exists and not equal to null
![Screenshot](./Screenshots/Screenshot88.png?raw=true "Screenshot")

#### $type operator 
![Screenshot](./Screenshots/Screenshot89.png?raw=true "Screenshot")

#### $type operator multiple type
![Screenshot](./Screenshots/Screenshot90.png?raw=true "Screenshot")

#### $regex operator
![Screenshot](./Screenshots/Screenshot91.png?raw=true "Screenshot")

#### $expr operator
![Screenshot](./Screenshots/Screenshot92.png?raw=true "Screenshot")

#### Complex Querie with $expr 
![Screenshot](./Screenshots/Screenshot93.png?raw=true "Screenshot")

#### Querying Array as Embedded Document  
![Screenshot](./Screenshots/Screenshot94.png?raw=true "Screenshot")

#### Querying Array - $size operator
![Screenshot](./Screenshots/Screenshot95.png?raw=true "Screenshot")

#### Querying Array - $all operator
![Screenshot](./Screenshots/Screenshot96.png?raw=true "Screenshot")

#### Querying Array - $elemMatch operator
![Screenshot](./Screenshots/Screenshot97.png?raw=true "Screenshot")

#### Cursors
![Screenshot](./Screenshots/Screenshot98.png?raw=true "Screenshot")

#### Operating with Cursors
![Screenshot](./Screenshots/Screenshot99.png?raw=true "Screenshot")

#### Operating with Cursors
![Screenshot](./Screenshots/Screenshot100.png?raw=true "Screenshot")

#### Operating with Cursors - Sorting
![Screenshot](./Screenshots/Screenshot101.png?raw=true "Screenshot")

#### Operating with Cursors - Multiple Sorting
![Screenshot](./Screenshots/Screenshot102.png?raw=true "Screenshot")

#### Operating with Cursors - Skipping  Limiting Cursor Results
![Screenshot](./Screenshots/Screenshot103.png?raw=true "Screenshot")

#### Operating with Cursors - Projection
![Screenshot](./Screenshots/Screenshot104.png?raw=true "Screenshot")

#### Operating with Cursors - Projection in Array
![Screenshot](./Screenshots/Screenshot105.png?raw=true "Screenshot")

#### Operating with Cursors - Projection in Array with Condition
![Screenshot](./Screenshots/Screenshot106.png?raw=true "Screenshot")
![Screenshot](./Screenshots/Screenshot107.png?raw=true "Screenshot")

#### Operating with Cursors - $slice
![Screenshot](./Screenshots/Screenshot108.png?raw=true "Screenshot")

#### Update
![Screenshot](./Screenshots/Screenshot109.png?raw=true "Screenshot")

#### Update One
![Screenshot](./Screenshots/Screenshot110.png?raw=true "Screenshot")

#### Update Many
![Screenshot](./Screenshots/Screenshot111.png?raw=true "Screenshot")

#### $inc Operator
![Screenshot](./Screenshots/Screenshot112.png?raw=true "Screenshot")

#### $max Operator
![Screenshot](./Screenshots/Screenshot113.png?raw=true "Screenshot")

#### $min Operator
![Screenshot](./Screenshots/Screenshot114.png?raw=true "Screenshot")

#### $mul Operator
![Screenshot](./Screenshots/Screenshot115.png?raw=true "Screenshot")

#### $unset Operator
![Screenshot](./Screenshots/Screenshot116.png?raw=true "Screenshot")

#### $rename Operator
![Screenshot](./Screenshots/Screenshot117.png?raw=true "Screenshot")

#### upsert
![Screenshot](./Screenshots/Screenshot118.png?raw=true "Screenshot")

#### Updating Matched Array Elements
![Screenshot](./Screenshots/Screenshot119.png?raw=true "Screenshot")
![Screenshot](./Screenshots/Screenshot120.png?raw=true "Screenshot")

#### Adding a new field from result of previous query.
![Screenshot](./Screenshots/Screenshot121.png?raw=true "Screenshot")

#### Updating All Array Elements
![Screenshot](./Screenshots/Screenshot122.png?raw=true "Screenshot")

#### Finding  Updating Specific Fields
![Screenshot](./Screenshots/Screenshot123.png?raw=true "Screenshot")

#### Adding Elements to Arrays
![Screenshot](./Screenshots/Screenshot124.png?raw=true "Screenshot")

#### Adding Elements to Arrays Result
![Screenshot](./Screenshots/Screenshot125.png?raw=true "Screenshot")

#### $pull Operator
![Screenshot](./Screenshots/Screenshot126.png?raw=true "Screenshot")

#### $pop Operator
![Screenshot](./Screenshots/Screenshot127.png?raw=true "Screenshot")

#### $addToSet Operator(Does not add Duplicate Value)
![Screenshot](./Screenshots/Screenshot128.png?raw=true "Screenshot")

#### Update Summary
![Screenshot](./Screenshots/Screenshot129.png?raw=true "Screenshot")

#### Delete One
![Screenshot](./Screenshots/Screenshot130.png?raw=true "Screenshot")

#### Delete Many, Drop Collection, Drop Database
![Screenshot](./Screenshots/Screenshot131.png?raw=true "Screenshot")

#### Indexes
![Screenshot](./Screenshots/Screenshot132.png?raw=true "Screenshot")

#### Why Indexes
![Screenshot](./Screenshots/Screenshot133.png?raw=true "Screenshot")

#### Don't Use too many Indexes
![Screenshot](./Screenshots/Screenshot134.png?raw=true "Screenshot")

#### mongoimport
![Screenshot](./Screenshots/Screenshot135.png?raw=true "Screenshot")

#### explain()
![Screenshot](./Screenshots/Screenshot136.png?raw=true "Screenshot")

#### explain("executionStats")
![Screenshot](./Screenshots/Screenshot137.png?raw=true "Screenshot")

#### createIndex
![Screenshot](./Screenshots/Screenshot138.png?raw=true "Screenshot")

#### Diagram of a query that uses an index to select and return sorted results.
![Screenshot](./Screenshots/Screenshot139.svg?raw=true "Screenshot")

#### compoundIndex
![Screenshot](./Screenshots/Screenshot140.png?raw=true "Screenshot")

#### compoundIndex Query
![Screenshot](./Screenshots/Screenshot141.png?raw=true "Screenshot")

#### Using Indexes for Sorting
![Screenshot](./Screenshots/Screenshot142.png?raw=true "Screenshot")

#### Available Indexes of the collection
![Screenshot](./Screenshots/Screenshot143.png?raw=true "Screenshot")

#### Configuring Indexes (Unique Indexes)
![Screenshot](./Screenshots/Screenshot144.png?raw=true "Screenshot")

#### Partial Indexes
![Screenshot](./Screenshots/Screenshot145.png?raw=true "Screenshot")

#### Partial Indexes Query
![Screenshot](./Screenshots/Screenshot146.png?raw=true "Screenshot")

#### Applying the Partial Index with $exists
![Screenshot](./Screenshots/Screenshot147.png?raw=true "Screenshot")

#### Time-To-Live (TTL) Index
![Screenshot](./Screenshots/Screenshot148.png?raw=true "Screenshot")

#### Query Diagnosis & Query Planning
![Screenshot](./Screenshots/Screenshot149.png?raw=true "Screenshot")

#### Efficient Query and Covered Queries
![Screenshot](./Screenshots/Screenshot150.png?raw=true "Screenshot")

#### Covered Queries
![Screenshot](./Screenshots/Screenshot151.png?raw=true "Screenshot")

#### Rejected Plan
![Screenshot](./Screenshots/Screenshot152.png?raw=true "Screenshot")

#### Winning Plan
![Screenshot](./Screenshots/Screenshot153.png?raw=true "Screenshot")

#### Clearing the winning plan from cache
![Screenshot](./Screenshots/Screenshot153.png?raw=true "Screenshot")

#### Clearing the winning plan from cache
![Screenshot](./Screenshots/Screenshot154.png?raw=true "Screenshot")

#### allPlansExecutions
![Screenshot](./Screenshots/Screenshot155.png?raw=true "Screenshot")

#### Multi-Key Indexes
![Screenshot](./Screenshots/Screenshot156.png?raw=true "Screenshot")

#### Multi-Key Indexes Case
![Screenshot](./Screenshots/Screenshot157.png?raw=true "Screenshot")

#### Text Index
![Screenshot](./Screenshots/Screenshot158.png?raw=true "Screenshot")

#### Text Index Query
![Screenshot](./Screenshots/Screenshot159.png?raw=true "Screenshot")

#### Text Score Query
![Screenshot](./Screenshots/Screenshot160.png?raw=true "Screenshot")

#### Multiple Text Index in a collection
![Screenshot](./Screenshots/Screenshot161.png?raw=true "Screenshot")

#### Combine Text Index
![Screenshot](./Screenshots/Screenshot162.png?raw=true "Screenshot")

####  Text Indexes to Exclude Words.
![Screenshot](./Screenshots/Screenshot163.png?raw=true "Screenshot")

####  Text Indexes with $caseSensitive
![Screenshot](./Screenshots/Screenshot164.png?raw=true "Screenshot")

####  Text Indexes with textScore
![Screenshot](./Screenshots/Screenshot165.png?raw=true "Screenshot")

####  Building Index
![Screenshot](./Screenshots/Screenshot166.png?raw=true "Screenshot")

####  Background Index
![Screenshot](./Screenshots/Screenshot167.png?raw=true "Screenshot")

####  Geospatial Data
![Screenshot](./Screenshots/Screenshot168.png?raw=true "Screenshot")

####  Inserting GeoJSON Data
![Screenshot](./Screenshots/Screenshot169.png?raw=true "Screenshot")

#### Quering with $near attribute
![Screenshot](./Screenshots/Screenshot170.png?raw=true "Screenshot")

#### Query After creating GeoSpatial Index
![Screenshot](./Screenshots/Screenshot171.png?raw=true "Screenshot")

#### Query After creating GeoSpatial Index with $maxDistance and $minDistance
![Screenshot](./Screenshots/Screenshot172.png?raw=true "Screenshot")

#### Added Additional Locations
![Screenshot](./Screenshots/Screenshot173.png?raw=true "Screenshot")

#### Added Additional Locations
![Screenshot](./Screenshots/Screenshot174.png?raw=true "Screenshot")

#### Finding Places Inside a Certain Area using type of Polygon
![Screenshot](./Screenshots/Screenshot175.png?raw=true "Screenshot")

#### Finding Out If a User Is Inside a Specific Area
![Screenshot](./Screenshots/Screenshot176.png?raw=true "Screenshot")

#### Creating Polygon on Map to make Queries
![Screenshot](./Screenshots/Screenshot177.png?raw=true "Screenshot")

#### Finding Places Within a Certain Radius
![Screenshot](./Screenshots/Screenshot178.png?raw=true "Screenshot")

#### Geospatial Summary
![Screenshot](./Screenshots/Screenshot179.png?raw=true "Screenshot")

#### Geospatial Query Operator
![Screenshot](./Screenshots/Screenshot180.png?raw=true "Screenshot")

#### Aggregation Framework
![Screenshot](./Screenshots/Screenshot181.png?raw=true "Screenshot")

#### what is Aggregation Framework
![Screenshot](./Screenshots/Screenshot182.png?raw=true "Screenshot")

#### $match (aggregation)
![Screenshot](./Screenshots/Screenshot183.png?raw=true "Screenshot")

#### $group (aggregation)
![Screenshot](./Screenshots/Screenshot184.png?raw=true "Screenshot")

#### $sort (aggregation)
![Screenshot](./Screenshots/Screenshot185.png?raw=true "Screenshot")

#### $project (aggregation) - 1
![Screenshot](./Screenshots/Screenshot186.png?raw=true "Screenshot")

#### $project (aggregation) - 2
![Screenshot](./Screenshots/Screenshot187.png?raw=true "Screenshot")

#### Aggregation Pipeline
![Screenshot](./Screenshots/Screenshot188.png?raw=true "Screenshot")

#### $toUpper (aggregation) - 2
![Screenshot](./Screenshots/Screenshot189.png?raw=true "Screenshot")

#### $substrCP, strLenCP (aggregation) - 3
![Screenshot](./Screenshots/Screenshot190.png?raw=true "Screenshot")

#### Map Reduce
![Screenshot](./Screenshots/Screenshot191.png?raw=true "Screenshot")

#### Turning the Location Into a geoJSON Object
![Screenshot](./Screenshots/Screenshot192.png?raw=true "Screenshot")

#### Using Shortcuts for Transformations
![Screenshot](./Screenshots/Screenshot193.png?raw=true "Screenshot")

#### No. of person born in same year
![Screenshot](./Screenshots/Screenshot194.png?raw=true "Screenshot")

#### No. of person born in same year with $sort
![Screenshot](./Screenshots/Screenshot195.png?raw=true "Screenshot")

#### $project vs $group
![Screenshot](./Screenshots/Screenshot196.png?raw=true "Screenshot")

#### Pushing Elements Into Newly Created Arrays($push Aggregation)
![Screenshot](./Screenshots/Screenshot197.png?raw=true "Screenshot")

#### $unwind
![Screenshot](./Screenshots/Screenshot198.png?raw=true "Screenshot")

#### Eliminating Duplicate Values.($addToSet)
![Screenshot](./Screenshots/Screenshot199.png?raw=true "Screenshot")

#### $slice
![Screenshot](./Screenshots/Screenshot200.png?raw=true "Screenshot")

#### $size(Getting the Length of an Array)
![Screenshot](./Screenshots/Screenshot201.png?raw=true "Screenshot")

#### $filter
![Screenshot](./Screenshots/Screenshot202.png?raw=true "Screenshot")

#### Applying Multiple Operations to our Array.
![Screenshot](./Screenshots/Screenshot203.png?raw=true "Screenshot")

#### $bucket
![Screenshot](./Screenshots/Screenshot204.png?raw=true "Screenshot")

#### $bucketAuto
![Screenshot](./Screenshots/Screenshot205.png?raw=true "Screenshot")

## Diving Into Additional Stages (e.g. pagination)
![Screenshot](./Screenshots/Screenshot206.png?raw=true "Screenshot")

####  Writing Pipeline Results Into a New Collection.
![Screenshot](./Screenshots/Screenshot207.png?raw=true "Screenshot")

#### Working with the geoNear Stage($Aggregation)
![Screenshot](./Screenshots/Screenshot208.png?raw=true "Screenshot")

#### Summary ($Aggregation)
![Screenshot](./Screenshots/Screenshot209.png?raw=true "Screenshot")

#### Integers, Long & Doubles
![Screenshot](./Screenshots/Screenshot210.png?raw=true "Screenshot")

#### NumberLong
![Screenshot](./Screenshots/Screenshot211.png?raw=true "Screenshot")

#### NumberDecimal
![Screenshot](./Screenshots/Screenshot212.png?raw=true "Screenshot")

#### NumberDecimal with $inc
![Screenshot](./Screenshots/Screenshot213.png?raw=true "Screenshot")

#### MongoDB Security Checklist
![Screenshot](./Screenshots/Screenshot214.png?raw=true "Screenshot")

#### Authentication vs Authorization
![Screenshot](./Screenshots/Screenshot215.png?raw=true "Screenshot")

#### Authentication & Authorization
![Screenshot](./Screenshots/Screenshot216.png?raw=true "Screenshot")

#### Role Based Access Control in MongoDB
![Screenshot](./Screenshots/Screenshot217.png?raw=true "Screenshot")

#### Why Role
![Screenshot](./Screenshots/Screenshot218.png?raw=true "Screenshot")

#### Built in Roles
![Screenshot](./Screenshots/Screenshot219.png?raw=true "Screenshot")

#### Authenticate a User 
![Screenshot](./Screenshots/Screenshot220.png?raw=true "Screenshot")

#### Authenticate a User for a database 
![Screenshot](./Screenshots/Screenshot221.png?raw=true "Screenshot")

#### Update a User part I
![Screenshot](./Screenshots/Screenshot222.png?raw=true "Screenshot")

#### Update a User part II
![Screenshot](./Screenshots/Screenshot223.png?raw=true "Screenshot")

#### Update a User part III
![Screenshot](./Screenshots/Screenshot224.png?raw=true "Screenshot")



### IMP Links

[What is difference between partial indexes and sparse indexes mongodb?](https://stackoverflow.com/questions/43798252/what-is-difference-between-partial-indexes-and-sparse-indexes-mongodb)

[Model One-to-Many Relationships with Document References](https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/)

[The MongoDB Manual](https://docs.mongodb.com/manual/)

[Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)

[Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)

[Database References](https://docs.mongodb.com/manual/reference/database-references/)

[Application Design Tips](https://www.oreilly.com/library/view/50-tips-and/9781449306779/ch01.html)

[MongoDB relationships: embed or reference?](https://stackoverflow.com/questions/5373198/mongodb-relationships-embed-or-reference)

[Jumpstart MongoDB: A Collection of Resources](https://dzone.com/articles/jumpstart-mongodb-collection)

[Why You Should Never Use MongoDB](http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/)

[Advanced Node.js Development: Master Node.js by building real-world applications](https://books.google.co.in/books?id=25lUDwAAQBAJ&pg=PA28&lpg=PA28&dq=MongoDB+important+Links&source=bl&ots=AC1MQJU93P&sig=KLi2FrJxFE2odWhv_VbIgKN3AxE&hl=en&sa=X&ved=2ahUKEwjrtqKYgs_fAhUH3o8KHZpNDkUQ6AEwEXoECAEQAQ#v=onepage&q=MongoDB%20important%20Links&f=false)

[Using JOINs in MongoDB NoSQL Databases](https://www.sitepoint.com/using-joins-in-mongodb-nosql-databases/)

[A Basic introduction to Mongo DB](https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html)

[MongoDB in 2018 - A Year in Review](https://severalnines.com/blog/mongodb-2018-year-review)

[How to Investigate MongoDB Query Performance](https://studio3t.com/knowledge-base/articles/mongodb-query-performance/)

[MongoSchema](http://learnmongodbthehardway.com/schema/schemabasics/)

[Survival guide to Backup & Restore MongoDB](https://weknowinc.com/blog/how-to-backup-restore-mongodb)

[How to monitor MongoDB database performance](https://www.infoworld.com/article/3209092/application-development/how-to-monitor-mongodb-database-performance.html)

[Webinar: Processing High Volume Data Feeds with MongoDB - FIX, FpML and Swift in association with C24](https://www.slideshare.net/mongodb/webinar-processing-high-volume-data-feeds-with-mongodb-fix-fpml-and-swift-in-association-with-c24)

[MongoDB: The Database for Big Data Processing](https://www.edureka.co/blog/mongodb-the-database-for-big-data-processing/)

[IJSER](https://www.ijser.org/onlineResearchPaperViewer.aspx?Inclusive-Assessment-of-SQL-Database-And-MongoDB-Database-With-Latest-Evaluation.pdf)

[Partial Indexes and Validation](https://www.compose.com/articles/deeper-on-3-2-partial-indexes-validation/)

[Slow query behaviour using $exists with mongodb on fields with an index](https://stackoverflow.com/questions/42378355/slow-query-behaviour-using-exists-with-mongodb-on-fields-with-an-index)

[MongoDB Partial Indexes – Is it time to rethink your indexing strategy?](https://www.objectrocket.com/blog/mongodb/mongodb-partial-indexes/)

[MongoDB 3.2 goodies coming your way: Partial Indexes](https://plusnconsulting.com/post/MongoDB-3-2-goodies-coming-your-way-Partial-Indexes/)

[Expire Data from Collections by Setting TTL](https://docs.mongodb.com/manual/tutorial/expire-data/)

[Working with MongoDB TTL (Time-To-Live) Index](http://hassansin.github.io/working-with-mongodb-ttl-index)

[how can I use ttl (time to live) on mongodb with collection.update?](https://stackoverflow.com/questions/48048982/how-can-i-use-ttl-time-to-live-on-mongodb-with-collection-update)

[MongoDB Time To Live (TTL) Collections](https://www.codeproject.com/Tips/467689/MongoDB-Time-To-Live-TTL-Collections)

[Working with MongoDB TTL (Time-To-Live) Index](https://bl.ocks.org/hassansin/bcb7cdfdcdb74f7c2427b7a0a23686b6)

[Time-to-Live Collections with MongoDB](https://dzone.com/articles/time-live-collections-mongodb)

[Analyze Query Performance](https://docs.mongodb.com/manual/tutorial/analyze-query-plan/)

[MongoDB: Investigate Queries With explain() and Index Usage (Part 2)](https://dzone.com/articles/mongodb-investigate-queries-with-explain-and-index)

[Covered Queries in MongoDB](https://dzone.com/articles/covered-query-mongodb)

[MongoDB - Covered Queries](https://www.tutorialspoint.com/mongodb/mongodb_covered_queries.htm)

[mongodb indexes covered queries](https://stackoverflow.com/questions/16522288/mongodb-indexes-covered-queries)

[Covered query in MongoDB](https://www.javamadesoeasy.com/2017/04/covered-query-in-mongodb.html)

[Indexes](http://mongodb.github.io/node-mongodb-native/schema/chapter4/)

[Getting Started with Geospatial Data in MongoDB](https://www.slideshare.net/mongodb/getting-started-with-geospatial-data-in-mongodb)

[Geospatial Queries](https://docs.mongodb.com/manual/geospatial-queries/)

[2dsphere Indexes](https://docs.mongodb.com/manual/core/2dsphere/)

[Introduction to MongoDB Geospatial feature](http://tugdualgrall.blogspot.com/2014/08/introduction-to-mongodb-geospatial.html)

[GeoFile: Everything in the Radius with MongoDB Geospatial Queries](https://www.compose.com/articles/geofile-everything-in-the-radius-with-mongodb-geospatial-queries/)

[using $and with $match in mongodb](https://stackoverflow.com/questions/20469712/using-and-with-match-in-mongodb)

[MongoDB Aggregation Stages Operator - $match](https://www.w3resource.com/mongodb/aggregation/mongodb-aggregatrion-match-operator.php)

[MongoDB SELECT COUNT GROUP BY](https://stackoverflow.com/questions/23116330/mongodb-select-count-group-by)

[Group By in MongoDB(with $group)](http://www.tothenew.com/blog/group-by-in-mongodbwith-group/)

[MongoDB group by and count](https://whiletrue.run/2016/09/30/mongodb-group-by-and-count/)

[Aggregations in MongoDB by Example](https://www.compose.com/articles/aggregations-in-mongodb-by-example/)

[$project (aggregation)](https://docs.mongodb.com/manual/reference/operator/aggregation/project/)

[Project Fields to Return from Query](https://docs.mongodb.com/v3.2/tutorial/project-fields-from-query-results/)

[MongoDB Aggregation Stages Operator - $project](https://www.w3resource.com/mongodb/aggregation/mongodb-aggregatrion-project-operator.php)

[MongoDB: aggregate $project add field with static value](https://stackoverflow.com/questions/15110822/mongodb-aggregate-project-add-field-with-static-value)

[Mongo Aggregations in 5 Minutes](https://engineering.universe.com/mongo-aggregations-in-5-minutes-b8e1d9c274bb)

[$substrCP (aggregation)](https://docs.mongodb.com/manual/reference/operator/aggregation/substrCP/)

[$convert (aggregation)](https://docs.mongodb.com/manual/reference/operator/aggregation/convert/)

[how to convert string to numerical values in mongodb](https://stackoverflow.com/questions/29487351/how-to-convert-string-to-numerical-values-in-mongodb)

[MongoDB Best Practices for UUID Data](https://studio3t.com/knowledge-base/articles/mongodb-best-practices-uuid-data/)

[$concat (aggregation)](https://docs.mongodb.com/manual/reference/operator/aggregation/concat/)

[Select records matching concat value of two fields in mongodb](https://stackoverflow.com/questions/24662413/select-records-matching-concat-value-of-two-fields-in-mongodb)

[Creating new fields with $project](http://nicholasjohnson.com/mongo/course/exercises/aggregation-dynamic-project/)

[Aggregation Pipeline Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/)

[stupid-tricks-with-mongodb](http://www.kamsky.org/stupid-tricks-with-mongodb/category/aggregation)

[Interacting with cursors](http://nicholasjohnson.com/mongo/course/exercises/cursors/)

[How to filter by year and week in MongoDB](https://stackoverflow.com/questions/47690858/how-to-filter-by-year-and-week-in-mongodb)

[$isoWeekYear (aggregation)](https://docs.mongodb.com/manual/reference/operator/aggregation/isoWeekYear/)

