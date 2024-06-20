import React, { createContext, useState, ReactNode, FC } from "react";

// Define the shape of the context
interface ReadingListContextType {
  readingList: Book[];
  setReadingList: React.Dispatch<React.SetStateAction<Book[]>>;
}

// Create the context with a default value
const ReadingListContext = createContext<ReadingListContextType>({
  readingList: [],
  setReadingList: () => {},
});

// Create the provider component
const ReadingListProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  return (
    <ReadingListContext.Provider value={{ readingList, setReadingList }}>
      {children}
    </ReadingListContext.Provider>
  );
};

export { ReadingListContext, ReadingListProvider };
