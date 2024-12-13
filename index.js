// 1
// const users = [
//     { id: 1, name: 'Bil', balance: 20000 },
//     { id: 2, name: 'Kat', balance: 1000 },
//     { id: 3, name: 'Wil', balance: 300 },
//     { id: 4, name: 'K@ril', balance: 1 },
//     { id: 5, name: 'Emal', balance: 25 },
//   ];
// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => total + user.balance, 0);
// };
// console.log(calculateTotalBalance(users));
// 2
// const getUsersWithFriend = (users, friendName) => {
//     return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
// };
// const users = [
//     { id: 1, name: 'Jammes Pie', friends: ['George Deevil','Kyril Hoddakov'] },
//     { id: 2, name: 'Kyril Hoddakov', friends: ['George Deevil', 'Emil Mamisto', 'Jammes pie'] },
//     { id: 3, name: 'Emil Mamisto', friends: ['Kyril Hoddakov', 'George Deevil'] },
//     { id: 4, name: 'George Deevil', friends: ['Kyril Hoddakov', 'Emil Mamisto', 'Jammes pie'] },
//   ];
//   console.log(getUsersWithFriend(users,"Kyril Hoddakov"));
// 3
// const getNamesSortedByFriendsCount = users => {
//     return users
//     .slice()
//     .sort((a, b) => b.friends.length - a.friends.length)
//     .map(user => user.name)
// }; 
// const users = [
//     { id: 1, name: 'Moore Hensley', friends: ['Laylla Shubledog','Emil Mamisto'] },
//     { id: 1, name: 'Laylla Shubledog', friends: ['Moore Hensley','Kyril Hoddakov', 'Emil Mamisto'] },
//     { id: 1, name: 'Kyril Hoddakov', friends: ['Laylla Shubledog','Emil Mamisto'] },
//     { id: 1, name: 'Emil Mamisto', friends: ['Laylla Shubledog','Moore Hensley','Kyril Hoddakov'] },
//   ];
//   console.log(getNamesSortedByFriendsCount(users));
// 4
const getSortedUniqueSkills = users => {
    return users
    .flatMap(user => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();

};
const users = [
    { id: 1, name: 'John', skills: ['Sleeping', 'Super-Jump', 'Breath in any Gas'] },
    { id: 2, name: 'Alex', skills: ['Over-Wright Omniverse'] },
    { id: 3, name: 'John II', skills: ['Telekinesis', 'Super Speed'] },
  ];

  console.log(getSortedUniqueSkills(users));
  