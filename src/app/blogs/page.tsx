import Link from "next/link";

export default function Blog() {
    return (
          <div>
          <h1>Blog</h1>
          <Link href='/blogs/1'>Blog Pertama</Link><br />
          <Link href='/blogs/2'>Blog Kedua</Link>
        </div>
    );
}