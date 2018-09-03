import { appAction } from '../actions/appAction';
import {
  filterCategories,
  filterCuisines,
  updateCategories,
  updateCuisines,
  setRating,
  setPrice
} from '../reduces/storeReducer';

export const Store = {
  categories: [],
  cuisines: [],
  selectedCategories: [],
  selectedCuisines: [],
  price: [],
  rating: []
}

window.Store = Store;

appAction.on('store:updated', () => console.log(Store));

appAction.on('rating:update', setRating );
appAction.on('price:update', setPrice );

appAction.on('category:update', filterCategories);
appAction.on('cuisines:update', filterCuisines);

appAction.on('categories:updated', updateCategories);
appAction.on('cuisines:updated', updateCuisines);