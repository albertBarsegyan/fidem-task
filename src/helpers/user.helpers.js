export const getFilteredUsers = (users, searchBy, value) => {
  return users.filter((user) => {
    return user[searchBy].toLowerCase().startsWith(value.toLowerCase());
  });
};
