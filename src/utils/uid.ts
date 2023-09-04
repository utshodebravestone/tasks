const uid = (range = 100000): number =>
  Math.floor(Math.random() * range) * Date.now();

export default uid;
