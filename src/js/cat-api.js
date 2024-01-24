import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_eedEBIhSa1Zz96n6kEJ4AN8kcMgPva3zDP62EgDebovjszetJvu8mLFCWJ8MUFs7';

/**
 * Fetches all cat breeds
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

/**
 * Fetches a cat by breed
 * @param {string} breedId
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchCatByBreed(breedId) {
  const query = new URLSearchParams({ breed_ids: breedId });
  return axios.get(`https://api.thecatapi.com/v1/images/search?${query}`);
}

export { fetchBreeds, fetchCatByBreed };
