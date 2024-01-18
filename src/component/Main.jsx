import { useState } from 'react';
import Book from './Book';
import SearchBox from './SearchBox';
import Sorting from './Sorting';
import BooksData from '/public/books.json';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const resetSearch = () => {
    setSearchQuery('');
  };

  const handleSortChange = (selectedSortOption) => {
    setSortOption(selectedSortOption);
  };

  const getSortedBooks = () => {
    // Clone the BooksData array
    let sortedBooks = [...BooksData];

    if (sortOption === 'name_asc') {
      sortedBooks.sort((a, b) => a.book_name.localeCompare(b.book_name));
    } else if (sortOption === 'name_desc') {
      sortedBooks.sort((a, b) => b.book_name.localeCompare(a.book_name));
    } else if (sortOption === 'year_asc') {
      sortedBooks.sort((a, b) => a.publish_year - b.publish_year);
    } else if (sortOption === 'year_desc') {
      sortedBooks.sort((a, b) => b.publish_year - a.publish_year);
    }

    // Apply search filter
    sortedBooks = sortedBooks.filter((bookData) =>
      bookData.book_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return sortedBooks;
  };

  return (
    <>
      <main className="my-10 lg:my-14">
        {/* header */}
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            {/* info, title, search */}
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>
              {/* Pass setSearchQuery and resetSearch to SearchBox */}
              <SearchBox setSearchQuery={setSearchQuery} resetSearch={resetSearch} />
            </div>
            {/* Pass handleSortChange to Sorting */}
            <Sorting onSortChange={handleSortChange} />
          </div>
        </header>
        {/* header ends */}
        {/* Book Grid */}
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {getSortedBooks().map((bookData) => (
            <Book
              key={bookData.id}
              {...bookData}
            />
          ))}
        </div>
        {/* Book Grid Ends */}
      </main>
    </>
  );
};

export default Main;
