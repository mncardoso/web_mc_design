import { type AppType } from "next/dist/shared/lib/utils";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="main">
      <div className="header">
        <Nav />
      </div>
      <div className="content">
        <Component {...pageProps} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default MyApp;
