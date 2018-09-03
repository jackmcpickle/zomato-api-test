import { appAction } from '../actions/appAction';
import {
  filterCategories,
  filterCuisines,
  updateCategories,
  updateCuisines,
  setRating,
  setPrice,
  updateRestaurants,
  updateFetch,
  setRestaurant
} from '../reduces/storeReducer';

import { searchRestaurants } from './dataFetch';

export const Store = {
  fetching: false,
  categories: [],
  cuisines: [],
  restaurants: [],
  filters: {
    selectedCategories: [],
    selectedCuisines: [],
    price: [],
    rating: []
  },
  restaurant: null
}

window.Store = Store;

appAction.on('api:fetching', () => updateFetch(true) );
appAction.on('api:fetched', () => updateFetch(false) );

appAction.on('store:updated', () => console.log(Store));
appAction.on('filters:updated', searchRestaurants );

appAction.on('restaurant:select', setRestaurant)

appAction.on('rating:update', setRating );
appAction.on('price:update', setPrice );

appAction.on('category:update', filterCategories);
appAction.on('cuisines:update', filterCuisines);

appAction.on('categories:updated', updateCategories);
appAction.on('cuisines:updated', updateCuisines);
appAction.on('restaurants:updated', updateRestaurants);