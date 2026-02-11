import { useParams } from 'react-router-dom';
import { PeopleFilters } from '../../components/PeopleFilters';
import PeopleContent from './PeopleContent';
import { usePeople } from '../../hooks/usePeople';

const PeoplePage = () => {
  const { people, isLoading, hasError } = usePeople();
  const { slug } = useParams();

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="columns is-desktop is-flex-direction-row-reverse">
          <div className="column is-7-tablet is-narrow-desktop">
            {!isLoading && <PeopleFilters />}
          </div>

          <div className="column">
            <div className="box table-container">
              <PeopleContent
                hasError={hasError}
                isLoading={isLoading}
                people={people}
                slug={slug}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
