import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Blocky Rewards</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="">{children}</div>
    </div>
  );
}
