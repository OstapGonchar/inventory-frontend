import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="intro">
        <span className="title-text-blue">Inventory</span>{" "}
        <span className="title-text"> makes organisation easy.</span>
        <div className="divider"></div>
        <button className="cta">
          <p className="small-text">Try it now. &#8594;</p>
        </button>
        <button className="cta">
          <p className="small-text">Watch the video. &#8594;</p>
        </button>
      </div>

      <div className="intro">
        <span className="title-text">How </span>
        <span className="title-text-blue">Inventory</span>{" "}
        <span className="title-text"> Works</span>
        <div className="divider"></div>
        <button className="cta">
          <p className="small-text">
            See it in action. <span>&#8594;</span>
          </p>
        </button>
      </div>

      <div className="intro">
        <span className="title-text-blue">Inventory </span>{" "}
        <span className="title-text">is developped jointly by []</span>
        <div className="divider"></div>
        <button className="cta">
          <p className="small-text">See their works here. &#8594;</p>
        </button>
      </div>
      <div className="divider"></div>
    </main>
  );
}
