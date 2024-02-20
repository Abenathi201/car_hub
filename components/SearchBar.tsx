"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { SearchManufacturer } from ".";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`ml-10 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying-glass"
            height={40}
            width={40}
            className="object-contain"
        />
    </button>
)

const SearchBar = ({ setManuFacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState("");
    const [searchModel, setsearchModel] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer === "" && searchModel === "") {
            return ('Please fill in the search bar')
        }

        setManuFacturer(searchManufacturer);
        setModel(searchModel);
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>

            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt="Car Model"
                    width={25}
                    height={25}
                    className="absolute w-[-20px] h-[20px] ml-4"
                />

                <input
                    type="text"
                    name="model"
                    value={searchModel}
                    onChange={(e) => setsearchModel(e.target.value)}
                    placeholder="Trigun"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}

export default SearchBar
