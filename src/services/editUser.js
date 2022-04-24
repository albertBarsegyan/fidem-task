export const editUserReq = (userData) => {
  return fetch("/api/users", {
    method: "PUT",
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => res.json());
};
