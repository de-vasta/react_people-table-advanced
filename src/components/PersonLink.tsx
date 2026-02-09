import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Person, Sex } from '../types';

const FEMALE_CLASS_NAME = 'has-text-danger';

const getPersonClassName = (gender: Sex) => {
  return classNames({ [FEMALE_CLASS_NAME]: gender === Sex.Female });
};

interface Props {
  person: Person;
}

const PersonLink = ({ person: { name, sex, slug } }: Props) => {
  return (
    <Link to={`./${slug}`} className={getPersonClassName(sex)}>
      {name}
    </Link>
  );
};

export default PersonLink;
