import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ userData }) {
  const textStyle = {
    container: {
      display: "flex",
    },
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Dog Treat Pizzas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Dog Treat Pizzas {userData.word}
        </h1>

        <h2>Why Don't You Try A</h2>
        <div style={textStyle.container}>
          <h1 style={{ color: "red", marginRight: ".5rem" }}>
            {userData.pizzaBase}
          </h1>
          <h1> Pizza With </h1>
          <h1
            style={{
              color: "green",
              marginLeft: ".5rem",
              marginRight: ".5rem",
            }}
          >
            {userData.pizzaTopping}
          </h1>
          <h1> and </h1>
          <h1
            style={{
              color: "orange",
              marginLeft: ".5rem",
              marginRight: ".5rem",
            }}
          >
            {userData.pizzaDogTopping}
          </h1>
          <h1
            style={{ color: "blue", marginLeft: ".5rem", marginRight: ".5rem" }}
          >
            {userData.pizzaModifier}
          </h1>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  const userData = await fetch(process.env.API_URL).then((res) => res.json());
  return {
    props: {
      userData,
    },
  };
}
