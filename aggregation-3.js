db.friends.aggregate([
    { $project: {_id:0, examScore: {$slice: ["$examScores",2,1]}}}
]).pretty();

db.friends.aggregate([
    { $project: {_id:0, numScore: {$size: "$examScores"}}}
]).pretty();


db.friends.aggregate([
    { $project: {_id:0, score: {$filter: {input: "$examScores", as:"sc", cond:{$gt: ["$$sc.score",60]}}}}}
]).pretty();



db.friends.aggregate([
    { $unwind: "$examScores" },
    { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
    { $sort: { score: -1 } },
    { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
    { $sort: { maxScore: -1 } }
  ]).pretty();

