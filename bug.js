```javascript
//Incorrect usage of $in operator
db.collection('users').find({age: {$in: [20, 25, "thirty"]}});
```