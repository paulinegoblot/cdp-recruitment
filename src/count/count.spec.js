const { addCountToCountries, addPeopleCountToCountry, addAnimalsCountToPerson } = require('./count.js');


describe('count', () => {

  describe('addAnimalsCountToPerson', () => {
    test('add ` [0]` to person name when animals is empty', () => {
      const person = {
        name: 'Anthony Bruno',
        animals: []
      };

      expect(addAnimalsCountToPerson(person)).toStrictEqual({
        name: 'Anthony Bruno [0]',
        animals: []
      });
    });

    test('add animal count on person name', () => {
      const person = {
        name: 'Anthony Bruno',
        animals: [
          { name: 'Anteater' },
          { name: 'Oryx' }
        ]
      };

      expect(addAnimalsCountToPerson(person)).toStrictEqual({
        name: 'Anthony Bruno [2]',
        animals: [
          { name: 'Anteater' },
          { name: 'Oryx' }
        ]
      });
    });
  });


  describe('addPeopleCountToCountry', () => {
    test('add [0] to country name when person is empty', () => {
      const country = {
        name: 'Satanwi',
        people: []
      };

      expect(addPeopleCountToCountry(country)).toStrictEqual({
        name: 'Satanwi [0]',
        people: []
      });
    })

    test('add person count on country name and animals count on person name', () => {
      const country = {
        name: 'Satanwi',
        people: [{
          name: 'Dennis Franci',
          animals: []
        },
        {
          name: 'Anthony Bruno',
          animals: [
            { name: 'Anteater' },
            { name: 'Oryx' }
          ]
        }]
      };

      expect(addPeopleCountToCountry(country)).toStrictEqual({
        name: 'Satanwi [2]',
        people: [{
          name: 'Dennis Franci [0]',
          animals: []
        },
        {
          name: 'Anthony Bruno [2]',
          animals: [
            { name: 'Anteater' },
            { name: 'Oryx' }
          ]
        }]
      });
    });
  });

  describe('addCountToCountries', () => {
    test('does nothing on empty array', () => {
      expect(addCountToCountries([])).toStrictEqual([]);
    })

    test('add person count on country name and animals count on person name for all countries', () => {
      const countries = [
        {
          name: 'Dillauti',
          people: []
        },
        {
          name: 'Satanwi',
          people: [{
            name: 'Dennis Franci',
            animals: []
          },
          {
            name: 'Anthony Bruno',
            animals: [
              { name: 'Anteater' },
              { name: 'Oryx' }
            ]
          }]
        }
      ];
      expect(addCountToCountries(countries)).toStrictEqual([
        {
          name: 'Dillauti [0]',
          people: []
        },
        {
          name: 'Satanwi [2]',
          people: [{
            name: 'Dennis Franci [0]',
            animals: []
          },
          {
            name: 'Anthony Bruno [2]',
            animals: [
              { name: 'Anteater' },
              { name: 'Oryx' }
            ]
          }]
        }
      ]);
    });

    const countries = [
      {
        name: 'Dillauti',
        people: [{
          name: 'Winifred Graham',
          animals:
            [{ name: 'Narwhal' },
            { name: 'Crow' }]
        }, {
          name: 'Philip Murray',
          animals:
            [{ name: 'Buzzard' },
            { name: 'Elephant' },
            { name: 'Dinosaur' }]
        }]
      },
      {
        name: 'Satanwi',
        people: [{
          name: 'Dennis Franci',
          animals: []
        },
        {
          name: 'Anthony Bruno',
          animals: [
            { name: 'Caracal' },
            { name: 'Anteater' },
            { name: 'Oryx' }
          ]
        }
        ]
      }
    ]
    test('add person count on country name and animals count on person name for all countries', () => {
      expect(addCountToCountries(countries)).toStrictEqual([
        {
          name: 'Dillauti [2]',
          people: [{
            name: 'Winifred Graham [2]',
            animals:
              [{ name: 'Narwhal' },
              { name: 'Crow' }]
          }, {
            name: 'Philip Murray [3]',
            animals:
              [{ name: 'Buzzard' },
              { name: 'Elephant' },
              { name: 'Dinosaur' }]
          }]
        },
        {
          name: 'Satanwi [2]',
          people: [{
            name: 'Dennis Franci [0]',
            animals: []
          },
          {
            name: 'Anthony Bruno [3]',
            animals: [
              { name: 'Caracal' },
              { name: 'Anteater' },
              { name: 'Oryx' }
            ]
          }
          ]
        }
      ])
    })
  });
});