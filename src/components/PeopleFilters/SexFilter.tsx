import { SearchLink } from '../SearchLink';
import { SearchParamKey } from '../../types/searchParams';
import { Sex } from '../../types';
import classNames from 'classnames';

type SexFilterOptions = 'Male' | 'Female' | 'All';

type SexTab = {
  name: SexFilterOptions;
  params: { [SearchParamKey.Sex]: Sex | null };
};

const sexTabs: SexTab[] = [
  { name: 'All', params: { [SearchParamKey.Sex]: null } },
  { name: 'Male', params: { [SearchParamKey.Sex]: Sex.Male } },
  { name: 'Female', params: { [SearchParamKey.Sex]: Sex.Female } },
];

interface Props {
  searchParams: URLSearchParams;
}

const SexFilter = ({ searchParams }: Props) => {
  const selectedSexParam = searchParams.get(SearchParamKey.Sex);

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
