import SEO from "@/components/seo";

export default function Home() {
  return (
    <>
      <SEO />
      <main className="content_main">
        <article>
          <h1 className="article_title">Home Page</h1>
          <p>🖖 Hello</p>
          <p>🧑‍💻 My name is Miguel</p>
          <p>🌐 Welcome to my web page.</p>
        </article>
      </main>
    </>
  );
}
