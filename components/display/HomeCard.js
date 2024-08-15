import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCards = (props) => {
  const { MovieCard } = props;
  const { show } = MovieCard
  const { id, image, name } = show

  let poster_path = image
    ? image.medium
    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"

  return (
    <div className="w-64 h-96 sm:w-52 sm:h-72 bg-grey m-3 hover:opacity-75 shadow-md">
      <Link key={id} href="/movie/[id]" as={`/movie/${id}`} title={name}>
        <Image
          src={poster_path}
          alt={name}
          className="rounded w-full h-full"
          width={208}
          height={288}
          unoptimized
        />
      </Link>
    </div>
  );
};

export default HomeCards;
