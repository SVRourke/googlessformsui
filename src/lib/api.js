const BASEURL = "http://localhost:3000";

exports.formIndex = async (userId) => {
  const endpoint = `${BASEURL}/users/${userId}/forms`;
  const req = await fetch(endpoint, { method: "GET" });
  return req.json()
};
