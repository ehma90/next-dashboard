import Head from "next/head";
import BarChart from "./components/BarChart";

import Header from "./components/Header";
import RecentOrder from "./components/RecentOrder";
import TopCards from "./components/TopCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Dashboard</title>
        <meta name="Next-dashboard" content="next dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart/>
          <RecentOrder/>
        </div>
      </main>
    </>
  );
}
