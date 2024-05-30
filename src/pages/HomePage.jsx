
import { useDispatch, useSelector } from "react-redux"
import { getHotelsThunk } from "../store/slices/products.slice" 
import HotelCard from "../components/HomePage/HotelCard"
import './styles/HomePage.css'
import FilterName from "../components/HomePage/FilterName"
import { useEffect, useState } from "react"
import FilterCity from "../components/HomePage/FlterCity"
import FilterPrice from "../components/HomePage/FilterPrice"

const HomePage = () => {

    const [nameSearched, setNameSearched] = useState('')
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const products = useSelector(states => states.products)
    
    console.log({products, nameSearched})

    const dispatch = useDispatch()
    
    useEffect(() => {
        const url ='https://hotels-api.academlo.tech/hotels'
        dispatch(getHotelsThunk(url))            
    }, [])

    const cbFilter = (hotel) => {
        // Filter by Name
        const filterName = hotel.name.toLowerCase().includes(nameSearched)
        // Filter by Price
        const filterByPrice = price >= fromTo.from && price <= fromTo.to
        return filterName && filterByPrice
    }

    return (
        <div className="home">
            <FilterName
            setNameSearched={setNameSearched}
            />
            <div className="home__cards">
                {
                    products?.filter(cbFilter).map(hotel => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                        />
                    ))
                }
            </div>            
        </div>
    )
}

export default HomePage