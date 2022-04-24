export const removeUserReq = (id) => {
  return fetch("/api/users", {
    method: "DELETE",
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then((res) => res.json());
};
