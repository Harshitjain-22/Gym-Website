// import 'dotenv/config'

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.KEY}`,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };




export const fetchData = async(url , options)=>{
    const response = await fetch(url , options);
    const data = await response.json();
    console.log(data);
    return data;
}
