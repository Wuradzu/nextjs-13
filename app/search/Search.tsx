'use client'
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}`)
  }
  return (
    <div className="border-2 rounded-md bg-slate-300 p-2">
      <form onSubmit={handleSearch}>
        <input
          value={search}
          type='text'
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none rounded-md p-2 mr-4 w-1/3"
        />
        <button type="submit" className="bg-slate-900 text-white p-2 rounded-md opacity-90 hover:opacity-100">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
