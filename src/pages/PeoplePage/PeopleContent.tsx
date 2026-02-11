import { Person } from '../../types';
import PeopleTable from '../../components/PeopleTable';
import { Loader } from '../../components/Loader';

interface Props {
  isLoading: boolean;
  hasError: boolean;
  people: Person[];
  slug?: string;
}

const PeopleContent = ({ people, slug, isLoading, hasError }: Props) => {
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

  return (
    <>
      <PeopleTable people={people} selectedPersonSlug={slug} />
      {!people.length && (
        <p data-cy="noPeopleMessage">There are no people on the server</p>
      )}
    </>
  );
};

export default PeopleContent;
