import { Box, Button, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { ReadingListContext } from "../contexts/ReadingListContext";

interface Props {
  book: Book;
}

const SearchBarCard: FC<Props> = ({ book, ...props }) => {
  const { readingList, setReadingList } = useContext(ReadingListContext);

  return (
    <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <img
          loading="lazy"
          width="75"
          height="75"
          src={`/${book.coverPhotoURL}`}
          alt={book.title}
        />
        <Box
          sx={{
            marginLeft: "10px",
          }}
        >
          <Typography
            gutterBottom
            sx={{ fontWeight: 700, fontSize: "16px" }}
            variant="h6"
            component="div"
          >
            {book.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "13px", fontWeight: 600 }}
            color="text.secondary"
          >
            by {book.author}
          </Typography>
          {readingList.includes(book) ? (
            <Button
              onClick={() => {
                setReadingList(
                  readingList.filter((item: Book) => item !== book)
                );
              }}
              size="small"
              sx={{ color: "red", fontSize: "11px", fontWeight: 700 }}
            >
              Remove from reading list
            </Button>
          ) : (
            <Button
              onClick={() => {
                setReadingList([...readingList, book]);
              }}
              size="small"
              sx={{ color: "primary.dark", fontSize: "11px", fontWeight: 700 }}
            >
              Add to reading list
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBarCard;
