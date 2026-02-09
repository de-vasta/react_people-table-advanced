import { PeopleFilters } from '../../components/PeopleFilters';
import PeopleContent from './PeopleContent';

const PeoplePage = () => {
  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="columns is-desktop is-flex-direction-row-reverse">
          <div className="column is-7-tablet is-narrow-desktop">
            <PeopleFilters />
          </div>

          <div className="column">
            <div className="box table-container">
              <PeopleContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
