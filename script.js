const getFetchin = async () => {

    const city = prompt("Give me a city");
    const key = '4d5adce5ffe449edbcb74550241412';
    const days = 1;

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no`);
        const jsonData = await response.json();
        if(!response.ok) {
            throw new Error(`API failed with status ${response.status}`);
        }
        console.log(jsonData);

    } catch (err){
        console.error('Something went wrong', err);
    }
};
getFetchin();