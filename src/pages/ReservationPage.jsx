import { useEffect } from "react"
import useCrud from "../hooks/useCrud"
import BookCard from "../components/ReservationPage/BookCard"

const ReservationPage = () => {

    const [ reservations, getReservations ] = useCrud()

    useEffect(() => {
        const url='https://hotels-api.academlo.tech/bookings'
        getReservations(url, true)
    }, [])

    console.log(reservations)

    return (
        <article>
            <h2>Active Reservations</h2>
            <div>
                {
                    reservations?.map(book=> (
                        <BookCard 
                        key={book.id}
                        book={book}/>
                    ))
                }
            </div>
        </article>
    )
}

export default ReservationPage