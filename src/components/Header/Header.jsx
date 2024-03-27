import Logo from "../../helper/logo.png"
import "../Header/Header.css"

export default function Header() {

    return (
    <header className="header">
        <img className="header__logo" src={Logo} alt="Logo" />
        <h1 className="header__h1">Lesson Reminder</h1>
    </header>
    )
}
