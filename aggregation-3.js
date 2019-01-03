db.friends.aggregate([
    { $project: {_id:0, examScore: {$slice: ["$examScores",2,1]}}}
]).pretty();

db.friends.aggregate([
    { $project: {_id:0, numScore: {$size: "$examScores"}}}
]).pretty();


db.friends.aggregate([
    { $project: {_id:0, score: {$filter: {input: "$examScores", as:"sc", cond:{$gt: ["$$sc.score",60]}}}}}
]).pretty();
