import { useMyContextHook } from '../Context/CityContext'
import styled from 'styled-components'

function Search() {
    const { city, setCity, cities } = useMyContextHook();


    let citiesList =
    cities.length > 0 &&
    cities.map((item, i) => {
      return (
        <option key={i} value={item.name}>
          {item.name}
        </option>
      );
    }, this);


     const changeCity = (e) =>{
        for (let i = 0; i < cities.length; i++) {
            if(e.target.value === cities[i].name){
                setCity(cities[i]);
            }
        }
    } 

    return (
        <div className="search">
            <select value={city.name} onChange={changeCity} >{citiesList}</select>
        </div>
    )
}



export default Search
