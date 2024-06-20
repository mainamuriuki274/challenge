import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC, useContext } from "react";
import { ReadingListContext } from "../contexts/ReadingListContext";

interface Props {
  book: Book;
}

const BookCard: FC<Props> = ({ book }) => {
  const { readingList, setReadingList } = useContext(ReadingListContext);

  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: "100%", width: "100%" }}
        image={`/src/${book.coverPhotoURL}`}
        title={book.title}
      />
      <CardContent sx={{ flexGrow: 1, p: 0, pt: 1 }}>
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
      </CardContent>
      <CardActions
        sx={{
          px: 0,
        }}
      >
        {readingList.includes(book) ? (
          <Button
            onClick={() => {
              setReadingList(readingList.filter((item: Book) => item !== book));
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
      </CardActions>
    </Card>
  );
};

export default BookCard;
