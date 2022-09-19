const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  
  const TheaterIXX = await promiseTheaterIXX();
  const TheaterVGC = await promiseTheaterVGC();
  const semuaFilm = [...TheaterIXX, ...TheaterVGC];
  const result = semuaFilm.filter((e) => e.hasil === emosi);
  return result.length;

};

module.exports = {
  promiseOutput,
};
