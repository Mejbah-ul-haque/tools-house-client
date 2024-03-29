import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://evening-dawn-30046.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return [reviews, setReviews]
}

export default useReviews;