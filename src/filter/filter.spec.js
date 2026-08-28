const { filterCountires, filterPeople, filterAnimals } = require('./filter.js');

describe('filter', () => {

  describe('filterAnimals', () => {
    const animals = [
      { name: 'Caracal' },
      { name: 'Anteater' },
      { name: 'Oryx' }
    ];

    test('does nothing on empty array', () => {
      expect(filterAnimals([], 'ry')).toStrictEqual([]);
    })

    test('retrun empty array when no filter are given', () => {
      expect(filterAnimals(animals, '')).toStrictEqual([])
    });

    test('return empty array when filter match nothing', () => {
      expect(filterAnimals(animals, 'lorem')).toStrictEqual([])
    });

    test('return filtered arrays when filter match', () => {
      expect(filterAnimals(animals, 'ry')).toStrictEqual([{ name: 'Oryx' }])
    });
  });

  describe('filterPeople', () => {

    const people = [
      {
        name: 'Ernest Conte',
        animals:
          [{ name: 'Bird' },
          { name: 'Asian Elephant' }]
      },
      {
        name: 'Anthony Bruno',
        animals: [
          { name: 'Anteater' },
          { name: 'Oryx' }]
      }
    ];

    test('does nothing on empty array', () => {
      expect(filterPeople([], 'ry')).toStrictEqual([]);
    })

    test('retrun empty array when no filter are given', () => {
      expect(filterPeople(people, '')).toStrictEqual([])
    });

    test('return empty array when filter match nothing', () => {
      expect(filterPeople(people, 'lorem')).toStrictEqual([])
    });

    test('return filtered arrays when filter match', () => {
      expect(filterPeople(people, 'ry')).toStrictEqual([{
        name: 'Anthony Bruno',
        animals: [{ name: 'Oryx' }]
      }])
    });
  });

  describe('filterCountries', () => {
    const countries = [
      {
        name: 'Dillauti',
        people: []
      },
      {
        name: 'Satanwi',
        people: [{
          name: 'Ernest Conte',
          animals:
            [{ name: 'Bird' },
            { name: 'Asian Elephant' }]
        },
        {
          name: 'Anthony Bruno',
          animals: [
            { name: 'Anteater' },
            { name: 'Oryx' }]
        }]
      }
    ]

    test('does nothing on empty array', () => {
      expect(filterCountires([], 'ry')).toStrictEqual([]);
    })

    test('retrun empty array when no filter are given', () => {
      expect(filterCountires(countries, '')).toStrictEqual([])
    });

    test('return empty array when filter match nothing', () => {
      expect(filterCountires(countries, 'lorem')).toStrictEqual([])
    });

    test('return filtered arrays when filter match', () => {
      expect(filterCountires(countries, 'ry')).toStrictEqual([
        {
          name: 'Satanwi',
          people:
            [{
              name: 'Anthony Bruno',
              animals: [{ name: 'Oryx' }]
            }]
        }
      ])
    });
  });
});