import { Person } from '../types';
import { SearchParamKey } from '../types/searchParams';

export const getFilteredPeople = (
  people: Person[],
  searchParams: URLSearchParams,
) => {
  const filter = {
    name: searchParams.get(SearchParamKey.Name)?.toLocaleLowerCase() ?? '',
    sex: searchParams.get(SearchParamKey.Sex),
    category: searchParams.getAll(SearchParamKey.Century),
  };

  const hasName = ({ name }: Person) =>
    name.toLocaleLowerCase().includes(filter.name);
  const isSex = (person: Person) => !filter.sex || person.sex === filter.sex;
  const isFromCentury = (person: Person) =>
    !filter.category.length ||
    filter.category.includes(Math.ceil(person.born / 100).toString());

  const filteredPeople = people.filter(
    person => hasName(person) && isSex(person) && isFromCentury(person),
  );

  return filteredPeople;
};
