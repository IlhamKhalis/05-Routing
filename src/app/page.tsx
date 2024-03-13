import Link from "next/link";

export default function Home() {
    return (
        <div>
          <h1>Welcome to Home</h1>
          <Link href='/profile'>Profile</Link><br />
          <Link href='/about'>About</Link><br />
          <Link href='/blogs'>Blog</Link><br />
          <Link href='/products'>Product</Link>
        </div>
    );
}