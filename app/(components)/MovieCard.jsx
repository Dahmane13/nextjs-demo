import Image from "next/image";
import React from "react";
const getGenres = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=15d7a80a7c308b752bb115e6b0ff1757&language=en-US"
  );

  const data = res.json();
  console.log(data);
  return data;
};
async function MovieCard({ rank, image, title, genres }) {
  const data = await getGenres();
  console.log(data);
  let genresNames = [];
  genres.map((item) => {
    genresNames.push(data["genres"].find((o) => o.id === item)?.name);
  });
  console.log(genresNames);
  return (
    <div className=" bg-white w-fit h-fit shadow-md overflow-hidden">
      <div className="">
        <Image src={image} width={300} height={400} />
      </div>
      <div className="p-3  overflow-hidden whitespace-nowrap w-72 text-ellipsis">
        <span className=" text-lg text-ellipsis ">{title}</span>
        <ul className="flex gap-1 text-[#E3A61C]">
          {genresNames.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          {rank}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
