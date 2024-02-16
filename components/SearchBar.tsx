"use client";

import { useState } from "react";

import { SearchManufacturer } from ".";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`ml-10 z-10 ${otherClasses}`}></button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");

    const handleSearch = () => {};

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />

                <SearchButton otherClasses="sm:hidden" />
            </div>
        </form>
    )
}

export default SearchBar
