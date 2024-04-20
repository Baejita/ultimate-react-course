import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from "./Spinner"
import Message from "./Message"
function CityList({cities, isLoading}) {
    if(isLoading) <Spinner />
    if(!cities.length) return <Message message="Add your first city by click on a city on the map"/>
    
    return (
        <div>
            <ul className={styles.cityList}>
                {cities.map((city)=> (<CityItem city={city} key={city.id}/>))}
            </ul>
        </div>
    )
}

export default CityList
