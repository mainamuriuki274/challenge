import ListIcon from "@mui/icons-material/List";
import { Box, Drawer, Fab, Grid, Typography } from "@mui/material";
import { ReadingListContext } from "../contexts/ReadingListContext";
import { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";

const ReadingList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { readingList } = useContext(ReadingListContext);

  useEffect(() => {
    if (readingList.length === 0) {
      setOpen(false);
    }
  }, [readingList]);

  return (
    <>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "300px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: "var(--white)",
              zIndex: 100,
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "var(--steel-blue)",
                mb: 1,
              }}
            >
              Reading List ({readingList.length})
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ pb: 2, px: 2 }}>
            {readingList.map((book) => (
              <Grid item>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
      {readingList.length > 0 ? (
        <Fab
          variant="extended"
          color="primary"
          onClick={() => setOpen(true)}
          sx={{ position: "fixed", bottom: "50px", right: "30px" }}
        >
          <ListIcon sx={{ mr: 1 }} />
          Reading List ({readingList.length})
        </Fab>
      ) : null}
    </>
  );
};

export default ReadingList;
