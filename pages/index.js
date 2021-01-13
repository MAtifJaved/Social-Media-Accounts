import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My practice React app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Engr. Muhammad Atif Javed Credentials
        </h1>

        <p className="description">
         <b>Social Media Accounts</b>
        </p>

        <p className="description">
         You can contact me via following links
        </p>

        <div className="grid">
          <a href="https://www.facebook.com/atif.javed.902/"target="_blank" rel="noopener noreferrer" className="card">
            <h3>Facebook &rarr;</h3>
            <p>This is the link to my Facebook Profile</p>
          </a>

          <a href="https://www.linkedin.com"target="_blank" rel="noopener noreferrer" className="card">
            <h3>Linkedin &rarr;</h3>
            <p>This will take you the front page of Linkedin</p>
          </a>

          <a
            href="https://web.whatsapp.com/"target="_blank" rel="noopener noreferrer"className="card"
 >
            <h3>Web Whatsapp &rarr;</h3>
            <p>Here You can go to the login page of Web Whatsapp</p>
          </a>

          <a
            href="https://github.com/MAtifJaved"target="_blank" rel="noopener noreferrer"
            className="card"
          >
            <h3>Github &rarr;</h3>
            <p>
              Here you will go to my Github Profile
            </p>
          </a>
        </div>
      </main>

      <header>
        <a
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Engr. Muhammad Atif javed '}
          <img src="https://jobs.newscientist.com/getasset/26915575-b33c-44f8-b30c-d8cb3141fca4/" alt="My React app link" className="logo" />
        </a>
      </header>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 3em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
