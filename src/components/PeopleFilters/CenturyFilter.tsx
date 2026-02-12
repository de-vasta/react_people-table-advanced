import classNames from 'classnames';
import { SearchLink } from '../SearchLink';
import { SearchParamKey } from '../../types/searchParams';

const centuriesButtons = ['16', '17', '18', '19', '20'];

interface Props {
  searchParams: URLSearchParams;
}

const CenturyFilter = ({ searchParams }: Props) => {
  const selectedCenturies = searchParams.getAll(SearchParamKey.Century);

  const toggleCentury = (century: string) => {
    return selectedCenturies.includes(century)
      ? selectedCenturies.filter(c => c !== century)
      : [...selectedCenturies, century];
  };

  return (
    <div className="panel-block">
      <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
        <div className="level-left">
          {centuriesButtons.map(century => (
            <SearchLink
              key={century}
              data-cy="century"
              className={classNames('button mr-1', {
                'is-info': selectedCenturies.includes(century),
              })}
              params={{ [SearchParamKey.Century]: toggleCentury(century) }}
            >
              {century}
            </SearchLink>
          ))}
        </div>

        <div className="level-right ml-4">
          <SearchLink
            data-cy="centuryALL"
            className={classNames('button is-success', {
              'is-outlined': searchParams.getAll(SearchParamKey.Century).length,
            })}
            params={{ [SearchParamKey.Century]: null }}
          >
            All
          </SearchLink>
        </div>
      </div>
    </div>
  );
};

export default CenturyFilter;
