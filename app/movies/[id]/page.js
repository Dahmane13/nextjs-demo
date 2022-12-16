"use client";
import React, { useEffect, useState } from "react";
import MoviePoster from "../../(components)/MoviePoster";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import Image from "next/image";
function MovieDetail({ params }) {
  console.log(params);
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(null);
  console.log(movie);
  useEffect(() => {
    const getMovie = async (id) => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=15d7a80a7c308b752bb115e6b0ff1757&language=en-US`
      );

      const data = await res.json();
      console.log(res);
      setMovie(data);
    };
    const getImages = async (id) => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=15d7a80a7c308b752bb115e6b0ff1757`
      );

      const data = await res.json();
      console.log(res);
      const imagesArr = new Array();
      data["backdrops"]?.slice(0, 9).map((image) => {
        imagesArr.push({
          src: `https://image.tmdb.org/t/p/original${image.file_path}`,
          alt: "test",
        });
      });
      setImages(imagesArr);
    };
    getMovie();
    getImages();
  }, [params.id]);
  console.log(movie);
  console.log(images);
  return (
    <div>
      {movie && images ? (
        <div>
          <MoviePoster
            image={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
            poster={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            title={movie.title}
            runtime={movie.runtime}
            year={movie.release_date}
            rating={movie.vote_average}
            voters={movie.vote_count}
            tagline={movie.tagline}
            genres={movie.genres}
          />
          <div className="mx-24 flex my-5 ">
            <div className="pt-24 flex flex-col gap-2 flex-1">
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-500 uppercase">
                  Title
                </span>
                <span>{movie.title}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-500 uppercase">
                  Tagline
                </span>
                <span>{movie.tagline}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-500 uppercase">
                  Relise date
                </span>
                <span>{movie.release_date}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-500 uppercase">
                  popularity
                </span>
                <span>{movie.popularity}</span>
              </div>
            </div>
            <div className=" pt-4 flex-auto w-1/2 flex flex-col gap-2">
              <h2 className="text-xl font-medium text-gray-500 uppercase border-l-4 pl-2 border-l-[#E3A61C]">
                overview
              </h2>
              <p>{movie.overview}</p>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-gray-500 uppercase border-l-4 pl-2 border-l-[#E3A61C]">
                  Gallery
                </h2>
                {images && (
                  <SlideshowLightbox
                    lightboxIdentifier="lightbox1"
                    framework="next"
                    images={images}
                    className="container grid grid-cols-3 gap-2 mx-auto"
                  >
                    {images?.map((image) => (
                      <Image
                        src={image.src}
                        alt={"test"}
                        height={300}
                        width={300}
                        data-lightboxjs="lightbox1"
                        quality={80}
                      />
                    ))}
                  </SlideshowLightbox>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w.full h-screen flex justify-center items-center">
          <img src="/loading.gif" className=" w-56" />
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
