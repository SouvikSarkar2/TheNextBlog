import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>The page doesnt exist</p>
      <Link href="/">Return home</Link>
    </div>
  );
};

export default NotFound;
