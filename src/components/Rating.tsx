import { FaStar } from "react-icons/fa";

type Props = {
    productRating: number
}

const Rating = ({ productRating }: Props) => {
    const ratings = [1, 2, 3, 4, 5];
    const starFilling = (starIndex: number, rate: number) => {
        let className = "star-icon ";
        const difference = rate - starIndex;

        if (difference === 0.5) {
            className += "filled half-filled";
        } else if (difference >= 0.3) {
            className += "filled";
        } else {
            className += "outlined";
        }

        return className;
    };
    return (
        <div className="stars">
            {
                ratings.map((i) => (
                    <FaStar key={i} className={starFilling(i, productRating)} />
                ))
            }
        </div>
    );
}

export default Rating;