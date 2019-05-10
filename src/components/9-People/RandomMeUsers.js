import DataComponentFunc from './DataComponent';
import PeopleList from './PeopleList';

const RandomMeUsers = DataComponentFunc(
  PeopleList,
  'https://randomuser.me/api/',
);

export default RandomMeUsers;
