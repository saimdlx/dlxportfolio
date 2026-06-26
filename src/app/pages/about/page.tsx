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
                                <Link href="/">About</Link>
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
                        i'm a junior computer science student studying at uc berkeley. <br></br> 
                        i believe software (and technology entirely) should seek to be beautiful, efficient, and helpful to humanity. <br></br>
                        right now, i'm current an ai engineering intern at cadabra ai (berkeley skydeck) <br></br>
                     </main>
                </div>
            </div>
        </div>
    );
}
