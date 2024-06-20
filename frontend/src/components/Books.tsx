import { Box, CircularProgress, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import ListBooks from "./ListBooks";
import { GET_BOOKS } from "../queries/books";
import { useQuery } from "@apollo/client";

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="red">
          An error occurred! Please try again.
        </Typography>
        ;
      </Box>
    );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 4,
          mx: "auto",
          maxWidth: "600px",
        }}
      >
        <SearchBar books={data.books} />
      </Box>

      <Box sx={{ maxWidth: "900px", mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "secondary.main",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          All Books
        </Typography>
        <ListBooks books={data.books} />
      </Box>
    </>
  );
};

export default Books;
