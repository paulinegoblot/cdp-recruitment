const filterCountires = (countries, filter) => {
  if (!filter) {
    return []
  }

  return countries.reduce(
    (acc, currentCountry) => {
      const matchingPeople = filterPeople(currentCountry.people, filter);

      if (!matchingPeople.length) {
        return acc
      }

      return [
        ...acc,
        {
          ...currentCountry,
          people: matchingPeople
        }
      ];
    },
    []
  );
}

const filterPeople = (people, filter) => {
  if (!filter) {
    return []
  }

  return people.reduce(
    (acc, currentPerson) => {
      const matchingAnimals = filterAnimals(currentPerson.animals, filter);

      if (!matchingAnimals.length) {
        return acc;
      }

      return [
        ...acc,
        {
          ...currentPerson,
          animals: matchingAnimals
        }
      ];
    },
    []
  );
}

const filterAnimals = (animals, filter) => {
  if (!filter) {
    return []
  }
  return animals.filter(
    (animal) => animal.name.includes(filter)
  );
}

module.exports = {
  filterCountires,
  filterPeople,
  filterAnimals
}