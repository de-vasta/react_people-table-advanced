import { FilterParam } from '../../types/filterParams';
import { SearchParams } from '../../utils/searchHelper';

interface Props {
  searchParams: URLSearchParams;
  onSearchParamsChange: (params: SearchParams) => void;
}

const SearchFilter = ({ searchParams, onSearchParamsChange }: Props) => {
  const nameQuery = searchParams.get(FilterParam.Name) ?? '';

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const normalized = event.target.value.trim();

    onSearchParamsChange({
      [FilterParam.Name]: normalized || null,
    });
  };

  return (
    <div className="panel-block">
      <p className="control has-icons-left">
        <input
          data-cy="NameFilter"
          type="search"
          className="input"
          placeholder="Search"
          value={nameQuery}
          onChange={handleNameChange}
        />

        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>
      </p>
    </div>
  );
};

export default SearchFilter;
