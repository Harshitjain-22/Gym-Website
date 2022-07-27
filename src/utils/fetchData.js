export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b4cc61b47emshdde0d5d4fe4567dp1203a2jsn8fac5d03baf1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };