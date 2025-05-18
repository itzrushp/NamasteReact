import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';  //Default export
import {Title} from './components/Title';  // Named export
import {Cards} from './components/Cards';
import {restaurantData} from './config'; // Named export
import { SearchBar } from './components/SearchBar';

/*
we can do something like this :
import * as obj from "./component/Header";

here * means everything 
and then you can use obj.Header, obj.Title, obj.Cards etc as well 

HOW COOL IS THAT !!! 
 */




const ListofCards = ()=>{
    return(
        <>  
        <div className="listofcards">
            {restaurantData.map((restaurant) => {
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
        <SearchBar />
        <ListofCards/>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
