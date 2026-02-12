import { SearchParamKey } from '../../types/searchParams';
import { useSearchParams } from 'react-router-dom';
import SexFilter from './SexFilter';
import CenturyFilter from './CenturyFilter';
import { SearchLink } from '../SearchLink';
import { getSearchWith, SearchParams } from '../../utils/searchHelper';
import SearchFilter from './SearchFilter';
import classNames from 'classnames';

export const PeopleFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const clearSearchParams = {
    [SearchParamKey.Name]: null,
    [SearchParamKey.Sex]: null,
    [SearchParamKey.Century]: null,
  };

  const handleSearchParamsChange = (params: SearchParams) => {
    setSearchParams(getSearchWith(searchParams, params));
  };

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>
      <SexFilter searchParams={searchParams} />
      <SearchFilter
        searchParams={searchParams}
        onSearchParamsChange={handleSearchParamsChange}
      />
      <CenturyFilter searchParams={searchParams} />
      <div className="panel-block">
        <SearchLink
          className={classNames('button is-link is-outlined is-fullwidth')}
          params={clearSearchParams}
        >
          Reset all filters
        </SearchLink>
      </div>
    </nav>
  );
};
