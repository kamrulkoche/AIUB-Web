import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// const Layout = dynamic(() => import('./Layout/layout'), { ssr: false })
const Title = dynamic(() => import('./Layout/layout'), { ssr: false })

export default function Home() {
  return (
    <>
      <Title page="Home"></Title>
      <h1 className="bg-dark">Hello</h1>
    </>
  );
}
