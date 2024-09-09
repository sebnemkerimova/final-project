import React from "react";
import PostsCard from "./PostsCard";

const Posts = () => {
  return (
    <div className="flex gap-6 bg-white my-10">
      <PostsCard
        image={"/images/OurBlogs/Sansiveria.svg"}
        title={" Cactus &Sucullent Care Tips"}
        time={"September 12 I Read in minutes"}
        description={
          "Cacti are succulents are easy care plants for any home or patio. "
        }
        href={"Read More/"}
      />

      <PostsCard
        image={"/images/OurBlogs/Monstera.svg"}
        title={"Top 10 Succulents for Your Home"}
        time={"September 13 I Read in 2 minutes"}
        description={"Best in hanging baskets. Prefers medium to high light."}
        href={"Read More/"}
      />

      <PostsCard
        image={"/images/OurBlogs/Epipremnum.svg"}
        title={" Cactus &Sucullent Care Tips"}
        time={"September 15 I Read in 3 minute"}
        description={
          "Cacti and succulents thrive in containers and because most are.."
        }
        href={"Read More/"}
      />
      <PostsCard
        image={"/images/OurBlogs/Skkulents.svg"}
        title={"Best Houseplants Room by Room"}
        time={"September 15 I Read in 2 minutes"}
        description={"The benefits of houseplants are endless. In addition to."}
        href={"Read More/"}
      />
    </div>
  );
};

export default Posts;
