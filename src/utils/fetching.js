export const fetchHotel = async (id) => {
  //const res = await fetch(`http://localhost:3001/hotels/${id}`); json-server
  const res = await fetch(`https://apimocha.com/hootels/hotels/${id}`);
  if (!res.ok) {
    throw new Error("Network response was not OK!");
  }
  return res.json();
};

export const fetchHotels = async () => {
  //const res = await fetch("http://localhost:3001/hotels"); json-server
  const res = await fetch("https://apimocha.com/hootels/hotels");
  if (!res.ok) {
    throw new Error("Network response was not OK");
  }

  return res.json();
};
