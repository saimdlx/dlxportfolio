import "../../properties.css";
import Link from "next/link"

export default function Projects() {
    return (
        <div className="root">
            <div className="home-wrapper">
                <div className="home-container">
                    <div className="sidebar">

                        <header>
                            <h1>
                                <Link href="/">Projects</Link>
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
                        <ul>
                            <div>
                                <li>
                                    <Link className="" href="">vitalis (openai gpt-oss hackathon)</Link>
                                </li>
                                <li>
                                    <Link className="" href="">clovis (for the interaction company of california)</Link>
                                </li>
                            </div>
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    );
}
