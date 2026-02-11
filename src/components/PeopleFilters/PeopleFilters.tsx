import { FilterParam } from '../../types/filterParams';
import { useSearchParams } from 'react-router-dom';
import SexFilter from './SexFilter';
import CenturyFilter from './CenturyFilter';
import { SearchLink } from '../SearchLink';

export const PeopleFilters = () => {
  const [searchParams] = useSearchParams();

  const selectedSexParam = searchParams.get(FilterParam.Sex);
  const selectedCenturies = searchParams.getAll(FilterParam.Century);

  const clearSearchParams = {
    [FilterParam.Name]: null,
    [FilterParam.Sex]: null,
    [FilterParam.Century]: null,
  };

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>
      <SexFilter selectedSexParam={selectedSexParam} />
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            data-cy="NameFilter"
            type="search"
            className="input"
            placeholder="Search"
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>
      <CenturyFilter selectedCenturies={selectedCenturies} />
      <div className="panel-block">
        <SearchLink
          className="button is-link is-outlined is-fullwidth"
          params={clearSearchParams}
        >
          Reset all filters
        </SearchLink>
      </div>
    </nav>
  );
};
