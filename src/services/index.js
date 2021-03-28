const fetchRandomCat = async () => {
  const fetchData = await fetch('https://aws.random.cat/meow');
  const response = await fetchData.json();
  return response;
}

export default fetchRandomCat;
