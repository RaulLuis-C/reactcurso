import { useState } from "react";
import { searchService } from "./SearchService";

export async function SearchTermBox() {
  const [search, setSearch] = useState();
  const response = await searchService.searchTerms();
  return (
    <>
      <label>{search}</label>
      {/* <input
        id="searchBox"
        value={value}
        onInput={(evt) => onInputChange(evt.target.value)}
      ></input> */}
      {response ? response.map((x) => <p>{x.title}</p>) : ""}
    </>
  );
}
