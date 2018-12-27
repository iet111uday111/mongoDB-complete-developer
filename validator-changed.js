db.runCommand({
    collMod: 'posts',
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
    },
    validationAction: 'warn'
});