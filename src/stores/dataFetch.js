import { appAction } from '../actions/appAction';
import { zomatoGet } from '../utils/api';

const ADELAIDE_CITY_ID = '297';

zomatoGet('categories')
  .then( data => appAction.emit('categories:updated', data) );

zomatoGet(`cuisines?city_id=${ADELAIDE_CITY_ID}`)
  .then( data => appAction.emit('cuisines:updated', data) );