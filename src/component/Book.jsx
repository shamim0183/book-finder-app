import { useState } from 'react';
import { FaRegHeart, FaHeart, FaStar } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";

const Book = ({ ...bookdata }) => {
  const {
    book_name,
    publish_year,
    author_name,
    book_price,
    book_image_url,
    isFavorite,
    rating
  } = bookdata;

  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const renderStars = () => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} className="text-yellow-500" />
    ));
    return stars;
  };

  return (
    <div>
      {/* <!-- Book Item --> */}
      <div className="space-y-3">
        {/* <!-- thumbnail --> */}
        <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
          <img className="max-w-[144px]" src={book_image_url} alt={book_name} />
        </div>
        {/* <!-- info --> */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold lg:text-xl">
            {book_name} <span>{publish_year}</span>
          </h4>
          <p className="text-xs lg:text-sm">
            By : <span>{author_name}</span>
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold lg:text-xl">${book_price}</h4>
            {/* <!-- stars --> */}
            <div className="flex items-center space-x-1">
              {renderStars()}
              <span className="text-xs lg:text-sm">({rating} Star)</span>
            </div>
            {/* <!-- stars ends --> */}
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-sm">
            <button
              className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
            >
              <IoCartOutline />
              Add to Cart
            </button>
            <button
              onClick={toggleFavorite}
              className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${favorite
                ? 'bg-[#DC2954] text-white'
                : 'bg-[#1C4336]/[14%] text-[#1C4336]'
                } py-1.5 transition-all hover:bg-${favorite ? '[#DC2954]/[24%]' : '[#1C4336]/[24%]'} lg:py-1.5`}
            >
              {favorite ? <FaHeart color='white' /> : <FaRegHeart />}
              Favourite
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Book Item Ends --> */}
    </div>
  );
};

export default Book;


