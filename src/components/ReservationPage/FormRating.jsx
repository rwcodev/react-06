import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormRating = ({bookSelected}) => {
    
    const { handleSubmit, reset, register } = useForm()

    const [ ,,createReview] = useCrud()

    const submit = data => {
    const url = 'https://hotels-api.academlo.tech/reviews'
    const bodyData = {
        ...data,
        hotelId: bookSelected.hotelId
    }
    createReview(url, bodyData, true)
    reset({
        rating: '5',
        comment: ''
    })
} 

    console.log(bookSelected)

    return (
        <div>
            <article>
                <h3>Book</h3>
                <section>
                    <img className="img__reservation" src={bookSelected?.hotel.images[0].url} alt="" />
                    <h4>{bookSelected?.hotel.name}</h4>
                </section>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <span>Rating</span>
                    <select {...register('rating')}>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="1">⭐</option>
                    </select>
                </label>
                <label>
                    <span>Comments</span>
                    <textarea {...register('comment')}/>
                </label>
                <button>Submit</button>
            </form>
            </article>
        </div>
    );
};

export default FormRating; 