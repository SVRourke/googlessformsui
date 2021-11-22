const BASEURL = "http://localhost:3000";

// exports.formIndex = async (userId) => {
//   const endpoint = `${BASEURL}/users/${userId}/forms`;
//   const req = await fetch(endpoint, { method: "GET" });
//   return req.json()
// };

export const createUser = async (info) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: info }),
  };

  const req = await fetch("http://localhost:3000/users", options);

  return req.json();
};
