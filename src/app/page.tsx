'use client'
import './properties.css';
import Link from "next/link"

export default function Home() {

  return (
    <div className="root">
      <div className="home-wrapper">
        <div className="home-container">
          <div className="sidebar">

            <header>
              <h1>
                <Link href="/">saim's</Link>
              </h1>
            </header>

            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pages/about">About</Link>
                </li>
                <li>
                  <Link href="/pages/occupations">Work</Link>
                </li>
                <li>
                  <Link href="/pages/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/pages/contact">Contact</Link>
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
