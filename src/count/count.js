const addCountToCountries = (countries) => {
    return countries.map(
        (country) => addPeopleCountToCountry(country)
    );
}

const addPeopleCountToCountry = (country) => {
    const count = country.people?.length || 0;
    return {
        ...country,
        name: `${country.name} [${count}]`,
        people: country.people.map(
            (person) => addAnimalsCountToPerson(person)
        )
    };

}

const addAnimalsCountToPerson = (person) => {
    const count = person.animals?.length || 0
    return {
        ...person,
        name: `${person.name} [${count}]`,
    }
}

module.exports = {
    addCountToCountries,
    addPeopleCountToCountry,
    addAnimalsCountToPerson,
}