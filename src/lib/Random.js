class Random {
  generate(count, limit) {
    const numbers = [];
    for(let i = 0; i < count; i++) {
      numbers.push(this.random(limit));
    }
    return numbers;
  }

  random(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }
}

export default Random;
