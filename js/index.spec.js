describe('object and array methods', () => {
  let book, productPrices, ages, fruitInventory;

  beforeEach(() => {
    // Set up test data before each test
    book = {
      titulo: 'El señor de los anillos',
      autor: 'J.R.R. Tolkien',
      genero: 'Fantasía',
    };
    productPrices = {
      laptop: 800,
      phone: 600,
      tablet: 400,
      headphones: 100,
    };
    ages = {
      Alice: 25,
      Bob: 30,
      Charlie: 28,
      David: 35,
    };
    fruitInventory = {
      Apple: 5,
      Banana: 15,
      Orange: 8,
      Grape: 12,
    };
  });

  it('should sum the prices values', () => {
    const result = getTotalPrice(productPrices);
    expect(result).toBe(1900);
  });

  it('should return the average age', () => {
    const result = getAverageAge(ages);
    expect(result).toBe(29.5);
  });

  it('should return an array of people', () => {
    const result = getPeopleArray(ages);
    expect(result).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 28 },
      { name: 'David', age: 35 },
    ]);
  });

  it('should return an array of abundant fruits', () => {
    const result = getAbundantFruits(fruitInventory);
    expect(result).toEqual([
      { fruit: 'Banana', quantity: 15 },
      { fruit: 'Grape', quantity: 12 },
    ]);
  });

  it('should count the sum of object key/value', () => {
    const result = getCharacterCount(book);
    expect(result).toEqual(62);
  });
});
