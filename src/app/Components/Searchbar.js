import "./CSS/Searchbar.css";

const Searchbar =() => {

    return(
        <>
        <div className="searchbar">
            <input type="text" placeholder="Search course"/>
            <button>
                <img src="./Images/icons/search.png" alt="search" />
            </button>
        </div>
        </>
    );
};

export default Searchbar;