export const getFact = async () => {
  const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};
