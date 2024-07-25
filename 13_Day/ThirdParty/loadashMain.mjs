// Task-6
import _ from 'lodash';

const users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
  ];
  

  const youngUsers = _.filter(users, user => user.age < 40);

  console.log(youngUsers);