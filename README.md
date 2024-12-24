# Incorrect Usage of $in Operator in MongoDB

This repository demonstrates a common error when using the `$in` operator in MongoDB queries. The `$in` operator is used to match a field against multiple values, but it's crucial that the data types of the field and the values in the array are consistent.

The `bug.js` file contains a query with an incorrect usage of the `$in` operator. The `age` field is a number, but the value "thirty" is a string, causing the query to fail to return the expected results.  The `bugSolution.js` demonstrates the correct usage.