import { appAction } from '../actions/appAction';
import { zomatoGet } from '../utils/api';
import { Store } from './appStore';

const ADELAIDE_CITY_ID = '297';

zomatoGet('categories')
  .then( data => appAction.emit('categories:updated', data) );

zomatoGet(`cuisines?city_id=${ADELAIDE_CITY_ID}`)
  .then( data => appAction.emit('cuisines:updated', data) );

export const searchRestaurants = () => {
  const searchParams = `cuisines=${Store.filters.selectedCuisines.join(',')}&category=${Store.filters.selectedCategories.join(',')}
  `;
  zomatoGet(`search?${searchParams}`, false)
  .then( data => appAction.emit('restaurants:updated', data) );
}