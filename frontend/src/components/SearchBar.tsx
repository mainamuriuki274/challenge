import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { FC, useContext } from "react";
import SearchBarCard from "./SearchBarCard";
import { ReadingListContext } from "../contexts/ReadingListContext";

interface Props {
  books: Book[];
}

const SearchBar: FC<Props> = ({ books }) => {
  const { readingList, setReadingList } = useContext(ReadingListContext);
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option: Book) => option.title + " " + option.author,
  });

  return (
    <Autocomplete
      disablePortal
      options={books}
      getOptionLabel={(option: Book) => option.title}
      filterOptions={filterOptions}
      sx={{
        width: "100%",
        "& .MuiAutocomplete-popper": {
          borderRadius: "30px",
        },
      }}
      onChange={(_, book: Book | null) => {
        if (!book) {
          return;
        }

        if (readingList.includes(book)) {
          setReadingList(readingList.filter((b) => b !== book));
        } else if (!readingList.includes(book)) {
          setReadingList([...readingList, book]);
        }
      }}
      renderOption={(props, book) => <SearchBarCard book={book} {...props} />}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "30px",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "30px",
                borderColor: "var(--steel-blue)",
              },
            },

            "& .MuiInputLabel-root": {
              color: "var(--steel-blue)",
            },
          }}
          label="Search books"
        />
      )}
    />
  );
};

export default SearchBar;
