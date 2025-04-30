import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import {Title} from './components/Header';
import {Cards} from './components/Header';


const data = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "1",
            "name": "Pizza Hut",
            "city": "Delhi",
            "area": "Connaught Place",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            "cuisines": ["Italian", "Pizza"],
            "costForTwo": 500,
            "deliveryTime": 30,
            "address": "Connaught Place, Delhi",
            "locality": "Connaught Place",
            "parentId": 12345,
        },
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "2",
            "name": "Burger King",
            "city": "Delhi",
            "area": "Rajouri Garden",
            "totalRatingsString": "200+ ratings",
            "cloudinaryImageId": "https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww",
            "cuisines": ["Burgers", "American"],
            "costForTwo": 400,
            "deliveryTime": 25,
            "address": "Rajouri Garden, Delhi",
            "locality": "Rajouri Garden",
            "parentId": 12346,
        },
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "3",
            "name": "Domino's Pizza",
            "city": "Delhi",
            "area": "Karol Bagh",
            "totalRatingsString": "300+ ratings",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "cuisines": ["Pizza", "Fast Food"],
            "costForTwo": 350,
            "deliveryTime": 20,
            "address": "Karol Bagh, Delhi",
            "locality": "Karol Bagh",
            "parentId": 12347,
        },
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "4",
            "name": "Biryani Blues",
            "city": "Delhi",
            "area": "Saket",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
            "cuisines": ["Biryani", "Hyderabadi"],
            "costForTwo": 600,
            "deliveryTime": 40,
            "address": "Saket, Delhi",
            "locality": "Saket",
            "parentId": 12348,
        },
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "5",
            "name": "Haldiram's",
            "city": "Delhi",
            "area": "Chandni Chowk",
            "totalRatingsString": "800+ ratings",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1612773843298-44dcdd45d865?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "cuisines": ["Indian", "Snacks"],
            "costForTwo": 300,
            "deliveryTime": 15,
            "address": "Chandni Chowk, Delhi",
            "locality": "Chandni Chowk",
            "parentId": 12349,
        },
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "6",
            "name": "KFC",
            "city": "Delhi",
            "area": "Lajpat Nagar",
            "totalRatingsString": "700+ ratings",
            "cloudinaryImageId": "https://plus.unsplash.com/premium_photo-1683139916670-38113db90cb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S0ZDfGVufDB8fDB8fHww",
            "cuisines": ["Fried Chicken", "American"],
            "costForTwo": 450,
            "deliveryTime": 22,
            "address": "Lajpat Nagar, Delhi",
            "locality": "Lajpat Nagar",
            "parentId": 12350,
        },
    }
];

const ListofCards = ()=>{
    return(
        <>  
        <div className="listofcards">
            {data.map((restaurant) => {
               return <Cards key={restaurant.data.id} restaurant={restaurant}/>
            })}
        </div>
        </>
    )
}

const App = () => (
    <>
        <Header />
        <Title />
        <ListofCards/>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
