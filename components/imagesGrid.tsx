import Image from "next/image";
import { Post } from "../types";
import PostTile from "./postTile";

type Props = {
  posts: Post[];
};

const ImagesGrid = ({ posts = [] }: Props) => {
  return (
    <div className="img-grid py-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 l:grid-cols-4">
      {posts.map((post) => (
        <PostTile post={post} />
      ))}
    </div>
  );
};

export default ImagesGrid;
