db.createCollection("posts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['tittle', 'text', 'creator', 'comments'],
            properties: {
                tittle: {
                    bsonType: "string",
                    description: "Must be string and is required"
                },
                text: {
                    bsonType: "string",
                    description: "Must be string and is required"
                },
                creator: {
                    bsonType: "objectId",
                    description: "Must be objectId and is required"
                },
                comments: {
                    bsonType: "array",
                    description: "Must be string and is required",
                    items: {
                        bsonType: "object",
                        required: ['text', 'author'],
                        properties: {
                            text: {
                                bsonType: "string",
                                description: "Must be string and is required"
                            },
                            author: {
                                bsonType: "objectId",
                                description: "Must be objectId and is required"
                            }
                        }
                    }
                }
            }
        }
    }
});


db.posts.insertOne({
    tittle: "My FIrst post", 
     text: "This is my first post, I hope you will like it", 
     tags: ["new", "tech"], 
     creator: ObjectId("5c24baa64276918b05d82bce"), 
     comments: [{ text: "I like post", author: ObjectId("5c24baa64276918b05d82bcd") }]
})