import { Post } from "../types";

type Props = {
  post: Post;
};

const PostTile = ({ post }: Props) => {
  return (
    <article className="rounded-md overflow-hidden border-violet-700 border-4 relative transition duration-150 ease-in-out hover:scale-105">
      <img className="w-full block" src={post.url} alt={post.name} />
      <div className="absolute bottom-0 p-2 w-full bg-slate-200/80 h-16">
        <h1>{post.name}</h1>
      </div>
    </article>
  );
};

export default PostTile;
