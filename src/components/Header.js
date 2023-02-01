import { ReactSVG } from "react-svg";
import logo from "./logo.svg";

export default function Header () {
    return (
        <header>
            <ReactSVG src={logo}/>
            <h1 id="title"> Ofek's travel journal.</h1>
        </header>
    )
}