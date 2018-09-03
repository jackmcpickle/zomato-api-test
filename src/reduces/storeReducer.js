import { Store } from '../stores/appStore';
import { appAction } from '../actions/appAction';
import indexOf from 'lodash/indexOf';
import without from 'lodash/without';

const shouldAddItem = (collection, data) => {
  const isChecked = data.checked;
  const itemDoesNotExists = indexOf(collection, data.name) === -1
  return itemDoesNotExists && isChecked
}

const shouldRemovedItem = (collection, data) => {
  const isChecked = data.checked;
  const itemExists = indexOf(collection, data.name) > -1
  return itemExists && !isChecked;
}

export const filterItems = (collection, data) => {
  if (shouldRemovedItem(collection, data)) {
    return without(collection, data.name);
  } else if ( shouldAddItem(collection, data) ) {
    return [...collection, data.name];
  } else {
    return collection;
  }
}


export const updateCategories = (categories) => {
  console.log(categories);
  Store.categories = [...Store.categories, ...categories.categories];
  appAction.emit('store:updated');
}

export const updateCuisines = (cuisines) => {
  console.log(cuisines);
  Store.cuisines = [...Store.cuisines, ...cuisines.cuisines];
  appAction.emit('store:updated');
}

export const filterCategories = (data) => {
  Store.selectedCategories = filterItems(Store.selectedCategories, data)
  appAction.emit('store:updated');
}

export const filterCuisines = (data) => {
  Store.selectedCuisines = filterItems(Store.selectedCuisines, data)
  appAction.emit('store:updated');
}

export const setPrice = (price) => {
  Store.price = price;
  appAction.emit('store:updated');
}

export const setRating = (rating) => {
  Store.rating = rating;
  appAction.emit('store:updated');
}
