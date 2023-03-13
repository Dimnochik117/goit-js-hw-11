import axios from 'axios';

export async function getImg(searchValue, page) {
  const params = new URLSearchParams({
    key: '34274198-1b27f1c863d3c5a4964bc7023',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });

  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?${params}`,
    });
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}