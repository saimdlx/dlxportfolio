'use client'

import './properties.css';


export default function Home() {

  return (
    <div className="root">
      <div className="home-wrapper">
        <div className="home-container">
          <div className="sidebar">

            <header>
              <h1>
                <a href="/">saim's</a>
              </h1>
            </header>

            <nav>
              <ul>
                <li>
                  <a className="" href="/">Home</a>
                </li>
                <li>
                  <a className="" href="">About</a>
                </li>
                <li>
                  <a className="" href="">Projects</a>
                </li>
                <li>
                  <a className="" href="">Contact</a>
                </li>
                <li>
                  <a className="" href="">Blog</a>
                </li>

              </ul>
            </nav>
          </div>

          <main>
            <img src="/waves.gif"/>
          </main>
        </div>
      </div>
    </div>
  );
}
