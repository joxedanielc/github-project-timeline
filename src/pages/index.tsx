import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TimelineCards from "./components/timelineCards";
import { TimelineDetail } from "@/utils";

export default function Home() {
  const projectName = "Github Project Timeline";
  const data: TimelineDetail[] = [
    {
      time: "8pm",
      description: "Prueba",
    },
    {
      time: "9pm",
      description: "Prueba 2",
    },
  ];

  return (
    <>
      <Head>
        <title>{projectName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container text-center">
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1>{projectName}</h1>
            </div>
          </div>
          <TimelineCards timelineData={data} />
        </div>
      </main>
    </>
  );
}
