import "../../properties.css";
import Link from "next/link"

export default function About() {
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
                                    <Link className="" href="/pages/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link className="" href="">Contact</Link>
                                </li>
                                <li>
                                    <Link className="" href="">Blog</Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <main>
                        work in progress, this is a project after all :)
                    </main>
                </div>
            </div>
        </div>
    );
}
