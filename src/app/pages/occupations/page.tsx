import "../../properties.css";
import Link from "next/link"

export default function Occupations() {
    return (
        <div className="root">
            <div className="home-wrapper">
                <div className="home-container">
                    <div className="sidebar">

                        <header>
                            <h1>
                                <Link href="/">Work</Link>
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
                                    <Link target="_blank" rel="noopener noreferrer" href="https://truehue.app/">frontend intern - truehue vision inc.</Link>
                                </li>
                                <li>
                                    <Link target="_blank" rel="noopener noreferrer" href="https://www.sponsorpair.com/">founding engineer - sponsorpair</Link>
                                </li>
                                <li>
                                    <Link target="_blank" rel="noopener noreferrer" href="https://cadabrai.com/">ai/ml engineering intern - cadabra ai</Link>
                                </li>
                            </div>
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    );
}
