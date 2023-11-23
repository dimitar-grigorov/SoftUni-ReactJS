const baseUrl = "http://localhost:303/jsonstore";

export const create = (gameData) => {
  const response = fetch(`${baseUrl}/games`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameData),
  });
  const result = response.json();

  return result;
};
