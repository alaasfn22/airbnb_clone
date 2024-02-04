export const getExplore = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLive = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchResult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResultDate = await res.json();
    return searchResultDate;
  } catch (error) {
    console.log(error);
  }
};
