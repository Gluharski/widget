import { NavLink } from "react-router-dom";

const MoreDetails = (data) => {

    console.log(data);

    const onClickHandler = () => {
        console.log('fired');
    }

    return (
        <div className="more-details">
            <div className='inner-nav'>
                <NavLink>Stats</NavLink>
            </div>
        </div>
    )
}

export default MoreDetails;