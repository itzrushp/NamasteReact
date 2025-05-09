
export const Cards = (props) => {
    const resData = props.restaurant.data;

    return (
        <div className="card">
            <img src={resData?.cloudinaryImageId} alt="food" className="card-image" />
            <h2 className="card-title">{resData?.name}</h2>
            <p className="card-para">{resData?.address}</p>
            <button className="card-button">Order Now</button>
        </div>
    );
};

