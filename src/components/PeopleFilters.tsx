import { useState } from 'react';
import { Sex } from '../types';
import classNames from 'classnames';
import { SearchLink } from './SearchLink';
import { FilterParam } from '../types/filterParams';

type SexFilter = 'Male' | 'Female' | 'All';

type SexTab = {
  name: SexFilter;
  params: { [FilterParam.Sex]: Sex | null };
};

export const PeopleFilters = () => {
  const [selectedSex, setSelectedSex] = useState<SexFilter>('All');

  const sexTabs: SexTab[] = [
    { name: 'All', params: { [FilterParam.Sex]: null } },
    { name: 'Male', params: { [FilterParam.Sex]: Sex.Male } },
    { name: 'Female', params: { [FilterParam.Sex]: Sex.Female } },
  ];

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter">
        {sexTabs.map(({ name, params }) => (
          <SearchLink
            key={name}
            className={classNames({
              'is-active': selectedSex === name,
            })}
            onClick={() => {
              setSelectedSex(name);
            }}
            params={params}
          >
            {name}
          </SearchLink>
        ))}
      </p>

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

      <div className="panel-block">
        <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
          <div className="level-left">
            <a
              data-cy="century"
              className="button mr-1"
              href="#/people?centuries=16"
            >
              16
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=17"
            >
              17
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=18"
            >
              18
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=19"
            >
              19
            </a>

            <a
              data-cy="century"
              className="button mr-1"
              href="#/people?centuries=20"
            >
              20
            </a>
          </div>

          <div className="level-right ml-4">
            <a
              data-cy="centuryALL"
              className="button is-success is-outlined"
              href="#/people"
            >
              All
            </a>
          </div>
        </div>
      </div>

      <div className="panel-block">
        <a className="button is-link is-outlined is-fullwidth" href="#/people">
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
