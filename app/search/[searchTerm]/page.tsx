import React from "react";

const fetchSearchTerm = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return data;
};

const SearchTerm = async({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const search = await fetchSearchTerm(searchTerm);
  return (
    <div className="p-2">
      <div className="text-center p-2">Your search result for: {searchTerm.split('%20').join(' ')}</div>
      <ol className="flex flex-col gap-2">
        {search && search.organic_results.map((res: any) => {
          return (
            <li key={res.position} className='hadow-md p-2 list-decimal'>
              <div>{res.title}</div>
              <div>{res.snippet}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SearchTerm;
