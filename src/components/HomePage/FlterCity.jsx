import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from "../../store/slices/products.slice"

const FilterCity = () => {

    const [ cities, getCities ] = useFetch()

    useEffect(() => {
        const url = 'https://hotels-api.academlo.tech/cities'
        getCities(url)
    }, [])

    console.log(cities)

    const handleCityFilter = () => {
        const url = `https://hotels-api.academlo.tech/hotels${cityId ? `?cityId=${cityId}` : ''}`
       dispatch( getHotelsThunk(url))
    }

    return (
        <article>
            <h4>Cities</h4>
            <ul>
                <li onClick={() => handleCityFilter()}>All cities</li>
                {
                    cities?.map(city => (
                        <li onClick={() => handleCityFilter()} key={city.id}>{city.name}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCity