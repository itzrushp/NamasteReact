

export const Title = () => {
    return (
        <div className="title">
            <h1>FoodVilla , where food matters hehe</h1>
        </div>
    )
}

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


const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className='logo'>FoodVilla</div>
            
                <ul className='nav-items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </>
    )
}

export default Header;

