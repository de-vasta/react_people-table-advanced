import { Person } from '../../types';
import PeopleTable from '../../components/PeopleTable';
import { Loader } from '../../components/Loader';
import { FilterParam } from '../../types/filterParams';
import { useSearchParams } from 'react-router-dom';

interface Props {
  isLoading: boolean;
  hasError: boolean;
  people: Person[];
  slug?: string;
}

const PeopleContent = ({ people, slug, isLoading, hasError }: Props) => {
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <Loader />;
  }

  if (hasError) {
    return (
      <p data-cy="peopleLoadingError" className="has-text-danger">
        Something went wrong
      </p>
    );
  }

  const filter = {
    name: searchParams.get(FilterParam.Name)?.toLocaleLowerCase() ?? '',
    sex: searchParams.get(FilterParam.Sex),
    category: searchParams.getAll(FilterParam.Century),
  };

  const visiblePeople = (() => {
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
  })();

  return (
    <>
      <PeopleTable people={visiblePeople} selectedPersonSlug={slug} />
      {!people.length && (
        <p data-cy="noPeopleMessage">There are no people on the server</p>
      )}
    </>
  );
};

export default PeopleContent;
