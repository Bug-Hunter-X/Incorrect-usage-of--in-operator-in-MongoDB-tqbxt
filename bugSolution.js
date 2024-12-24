```javascript
//Correct usage of $in operator
db.collection('users').find({age: {$in: [20, 25, 30]}});
```