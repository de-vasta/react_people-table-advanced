import PeopleTable from '../../components/PeopleTable';
import { Loader } from '../../components/Loader';
import { useParams } from 'react-router-dom';
import { usePeople } from '../../hooks/usePeople';

const PeopleContent = () => {
  const { people, isLoading, hasError } = usePeople();
  const { slug } = useParams();

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
