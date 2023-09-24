import { createClient } from "@/prismicio";
import Image from "next/image";

export default async function Home() {
  const client = createClient();

  const results = await client.getSingle("footer");

  console.log(results.data);

  return <main>hullo</main>;
}
