import React, { useState } from 'react';
import "./App.css";
import "./Weather.css";
// import { useState } from 'react'

// key: "e252026dfe191c8d78de4f150bda65ba",
import 'bootstrap/dist/css/bootstrap.min.css';


const api = {
    key: "e252026dfe191c8d78de4f150bda65ba",


    base: "https://api.openweathermap.org/data/2.5/",

  };
  



  

  function App() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const [text, setText] = useState('')
    /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
    const searchPressed = () => {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    };
    
    
    return (
      <div className="home-html-1">
      <center>
     <div className='weather'>Weather App</div>
    
   
            {/* Search Box - Input + Button  */}
            <div className="col-md-6 search">
            
              <input  className="form-control add"
                type="text"
                required
                placeholder="Enter city/town..."
                onChange={(e) => setSearch(e.target.value)} onInput ={event => setText(event.target.value)}
                
              />
             
            </div>
   
        
            <br/>
     
            <br/>
        
    
       
            
            <button type="submit" className="btn btn-success" onClick={searchPressed} disabled={!text} enabled={text}>Search</button>
         
            {/* If weather is not undefined display results from API */}

           
          
            

            {typeof weather.main !== "undefined" ? (
              <div className="result">
              <br/>
              <img alt='kochu' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="80px" align='center'/> 
                   <br/><br/>
                <p  className='result-1'>{weather.name}</p>
    
             
              
              
 
 <p className='result-1' >{weather.main.temp}°C</p>
                 
  
               
                <p  className='result-1'>{weather.weather[0].main}</p>
                <p  className='result-1'>({weather.weather[0].description})</p>
                <br/>
              </div>
            
            ) : (
              ""
            )}
        </center>
      
                      
                     
</div>
      );
      
    }
    
    export default App;

