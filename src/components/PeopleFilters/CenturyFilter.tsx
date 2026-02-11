import classNames from 'classnames';
import { SearchLink } from '../SearchLink';
import { FilterParam } from '../../types/filterParams';

const centuriesButtons = ['16', '17', '18', '19', '20'];

interface Props {
  selectedCenturies: string[];
}

const CenturyFilter = ({ selectedCenturies }: Props) => {
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
              params={{ [FilterParam.Century]: toggleCentury(century) }}
            >
              {century}
            </SearchLink>
          ))}
        </div>

        <div className="level-right ml-4">
          <SearchLink
            data-cy="centuryALL"
            className="button is-success is-outlined"
            params={{ [FilterParam.Century]: null }}
          >
            All
          </SearchLink>
        </div>
      </div>
    </div>
  );
};

export default CenturyFilter;
