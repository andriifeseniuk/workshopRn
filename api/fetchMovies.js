import axios from 'axios';
import { AsyncStorage } from 'react-native';

const apikey = '2f3933e4';
const endpoint = `http://www.omdbapi.com/?apikey=${apikey}`;
const fakeTimeout = 0;

const fetchMovies = async (page, filter) => {
  console.log('fetch', page);
  filter = filter ?? 'apple';
  const response = await axios(`${endpoint}&s=*${filter}*&page=${page}`);
  try {
    await AsyncStorage.setItem(endpoint, JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
  return response.data.Search;
};

export default fetchMovies;
