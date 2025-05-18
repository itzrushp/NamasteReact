export const SearchBar = () => {
    console.log("SearchBar rendered");
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search..." />
            <button className="searchbtn">Search</button>
        </div>
    );
};
