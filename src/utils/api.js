const ZOMATO_URL = 'https://developers.zomato.com/api/v2.1/';

const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('user-key', '56c7d984cb0e2be817ee1c92947d40e6');

const fetchConfig = {
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default'
}

const localStorageExists = () => typeof(localStorage) !== undefined;

class ZomatoAPI {

  constructor(asset) {
    this.request = new Request(`${ZOMATO_URL}${asset}`);
  }

  get() {
    return this._hasCache() ? this._getCached() : this._fetch();
  }

  _hasCache() {
    return localStorageExists() && localStorage.getItem(this.request.url) !== null;
  }

  _getCached() {
    return new Promise( (resolve, reject) => {
      return resolve( JSON.parse( localStorage.getItem(this.request.url) ) );
    });
  }

  _store(store) {
    if (localStorageExists()) localStorage.setItem(this.request.url, JSON.stringify( store ));
    return store;
  }

  _fetch() {
    return fetch(this.request, fetchConfig).then( (response) => response.json() ).then( this._store.bind(this) );
  }
}

export const zomatoGet = (asset) => {
  const zomatoAPI = new ZomatoAPI(asset);
  return zomatoAPI.get();
}
