"use client";

import { FC } from "react";
import { Box, Grid } from "@mui/material";
import BookCard from "./BookCard";

interface Props {
  books: Book[];
}

const ListBooks: FC<Props> = ({ books }) => {
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 4 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {books.map((book: Book) => (
          <Grid item xs={2} sm={4} md={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListBooks;
