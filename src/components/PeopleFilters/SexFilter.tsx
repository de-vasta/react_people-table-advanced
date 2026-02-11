import { SearchLink } from '../SearchLink';
import { FilterParam } from '../../types/filterParams';
import { Sex } from '../../types';
import classNames from 'classnames';

type SexFilterOptions = 'Male' | 'Female' | 'All';

type SexTab = {
  name: SexFilterOptions;
  params: { [FilterParam.Sex]: Sex | null };
};

const sexTabs: SexTab[] = [
  { name: 'All', params: { [FilterParam.Sex]: null } },
  { name: 'Male', params: { [FilterParam.Sex]: Sex.Male } },
  { name: 'Female', params: { [FilterParam.Sex]: Sex.Female } },
];

interface Props {
  searchParams: URLSearchParams;
}

const SexFilter = ({ searchParams }: Props) => {
  const selectedSexParam = searchParams.get(FilterParam.Sex);

  const selectedSex: SexFilterOptions = (() => {
    switch (selectedSexParam) {
      case Sex.Male:
        return 'Male';
      case Sex.Female:
        return 'Female';
      default:
        return 'All';
    }
  })();

  return (
    <p className="panel-tabs" data-cy="SexFilter">
      {sexTabs.map(({ name, params }) => (
        <SearchLink
          key={name}
          className={classNames({
            'is-active': selectedSex === name,
          })}
          params={params}
        >
          {name}
        </SearchLink>
      ))}
    </p>
  );
};

export default SexFilter;
