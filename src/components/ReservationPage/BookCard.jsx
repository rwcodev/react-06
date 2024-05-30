const BookCard = ({ book }) => {
    const initialDate = (new Date(book.chechIn)).getTime()
    const finalDate = (new Date(book.checkOut)).getTime()
    const reservationDays = (finalDate - initialDate) /(1000 * 60 *60  *24)

    const handleDelete = () => {
      const url = `https://hotels-api.academlo.tech/bookings/${book.id}`
      deleteReservation(url, book.id, true)
    }

    const handleRate = () => {

    }

    return (
    <section>
      <header>
        <img className= "img__reservation" src={book.hotel.images[0].url} alt="" />
      </header>
      <h3>{book.hotel.name}</h3>
      <div>{book.hotel.city.name}, {book.hotel.city.country}</div>
      <p>Rate and comment this visit... ¡CLICK HERE!</p>
      <ul>
        <li>
            <span>Reservations Days</span>
            <span>{reservationDays}</span></li>
        <li>
            <span>subtotal Price</span>
            <span>{reservationDays * Number(book.hotel.price)}</span></li>
      </ul>
      <button><i className='bx bx-trash'></i></button>
    </section>
    )
}

export default BookCard