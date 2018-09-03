import { Store } from '../stores/appStore';
import { appAction } from '../actions/appAction';
import indexOf from 'lodash/indexOf';
import without from 'lodash/without';
import find from 'lodash/find';

const shouldAddItem = (collection, data) => {
  const isChecked = data.checked;
  const itemDoesNotExists = indexOf(collection, data.id) === -1
  return itemDoesNotExists && isChecked
}

const shouldRemovedItem = (collection, data) => {
  const isChecked = data.checked;
  const itemExists = indexOf(collection, data.id) > -1
  return itemExists && !isChecked;
}

export const filterItems = (collection, data) => {
  if (shouldRemovedItem(collection, data)) {
    return without(collection, data.id);
  } else if ( shouldAddItem(collection, data) ) {
    return [...collection, data.id];
  } else {
    return collection;
  }
}

export const updateCategories = (categories) => {
  Store.categories = [...Store.categories, ...categories.categories];
  appAction.emit('store:updated');
}

export const updateCuisines = (cuisines) => {
  Store.cuisines = [...Store.cuisines, ...cuisines.cuisines];
  appAction.emit('store:updated');
}

export const filterCategories = (data) => {
  Store.filters.selectedCategories = filterItems(Store.filters.selectedCategories, data)
  appAction.emit('filters:updated');
}

export const filterCuisines = (data) => {
  Store.filters.selectedCuisines = filterItems(Store.filters.selectedCuisines, data)
  appAction.emit('filters:updated');
}

export const setPrice = (price) => {
  Store.filters.price = price;
  appAction.emit('filters:updated');
}

export const setRating = (rating) => {
  Store.filters.rating = rating;
  appAction.emit('filters:updated');
}

export const updateRestaurants = (data) => {
  Store.restaurants =  [...data.restaurants];
  appAction.emit('store:updated');
}

export const updateFetch = (toggle) => {
  Store.fetching = toggle;
  appAction.emit('store:updated');
}

export const setRestaurant = (data) => {
  const restaurant = find(Store.restaurants, (item) => item.restaurant.id === data.id );
  Store.restaurant = restaurant.restaurant;
  appAction.emit('store:updated');
}