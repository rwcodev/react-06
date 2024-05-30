import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import OtherHotels from "../components/HotelIdPage/OtherHotels";
import FormReservations from "../components/HotelIdPage/FormReservations";

const HotelIdPage = () => {

    const { id } = useParams()

    const [ hotel, ] = useFetch()

    useEffect(() => {
        const url = `https://hotels-api.academlo.tech/hotels/${id}`
        getHotel(url)
    }, [id])

    console.log(hotel)

    
    return (
        <section>
        <h2>{hotel?.name}</h2>
        <div>
            <i className='bx-bxs-star'></i>
            <i className='bx-bxs-star'></i>
            <i className='bx-bxs-star'></i>
            <i className='bx-bxs-star-half'></i>
            <i className='bx-bxs-star'></i>
            <span>{hotel?.rating}</span>
        </div>
        <div>
            <img src={hotel?.images[0].url} alt=""/>
        </div>
        {
        hotel && (
            <MapHotel 
                lat={hotel?.lat}
                lon={hotel?.lon}
            />
            )
        }
        <div>{hotel?.city.name}, {hotel?.city.country}</div>
        <div>
            <i className='bx bx-map'></i>
            <address>{hotel?.address}</address>
        </div>        
        <p>{hotel?.description}</p>
            <section>
                <FormReservations
                HotelId={id}
                />
            </section>
        <OtherHotels
            city={hotel?.city}
            />
        </section>    
    )
}

export default HotelIdPage