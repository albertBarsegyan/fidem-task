export const getUsersReq = () => {
  return fetch("/api/users", {
    method: "GET",
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
