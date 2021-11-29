/*import React from 'react';

const ApiKey = 'bc2a7ca25b3a9f44a1243275cb4420f0';

export const getWeather = async () => {       
    const apiUrl = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkov&appid=${ApiKey}&units=metric`);
      const weatherData = await apiUrl.json();
      console.log(weatherData);
}*/
import React from 'react';
const ApiKey = 'bc2a7ca25b3a9f44a1243275cb4420f0';
export const GetWeather = async () => {       
    const apiUrl = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkov&appid=${ApiKey}&units=metric`);
      const weatherData = await apiUrl.json();
      const mainInfo = weatherData.main;          
      console.log(mainInfo);
      console.log('Температура = ' + mainInfo.temp);
      return(
          <div>
                Температура = 
          </div>
        
      );
};
const Form = () => {  
    return(
        <div id="form">
                Form for weather
                <form>
                    <input type="text" name="city" placeholder="Ваш город" />
                    <button onClick={GetWeather()}>Узнать погоду</button>
                </form>
               
                
        </div>
    );
}
export default Form;
