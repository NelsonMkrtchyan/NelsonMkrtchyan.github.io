import logo from './../../logo.svg'
function Header() {


    return (
        <>
            <header className="header-area overlay">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container">
                        <a href="#" className="navbar-brand"><img src={logo} alt="logo"/></a>

                        <button id='navbar-button' type="button" className="navbar-toggler collapsed" data-toggle="collapse"
                                data-target="#main-nav">
                            <span className="menu-icon-bar"> </span>
                            <span className="menu-icon-bar"> </span>
                            <span className="menu-icon-bar"> </span>
                        </button>

                        <div id="main-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li><a href="#" className="nav-item nav-link active">Գլխավոր</a></li>
                                <li><a href="#" className="nav-item nav-link">Մեր մասին</a></li>
                                <li className="dropdown">
                                    <a href="#" className="nav-item nav-link" data-toggle="dropdown">Ծառայություններ</a>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Dropdown Item 1</a>
                                        <a href="#" className="dropdown-item">Dropdown Item 2</a>
                                        <a href="#" className="dropdown-item">Dropdown Item 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="nav-item nav-link" data-toggle="dropdown">Գրադարան</a>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Dropdown Item 1</a>
                                        <a href="#" className="dropdown-item">Dropdown Item 2</a>
                                        <a href="#" className="dropdown-item">Dropdown Item 3</a>
                                        <a href="#" className="dropdown-item">Dropdown Item 4</a>
                                        <a href="#" className="dropdown-item">Dropdown Item 5</a>
                                    </div>
                                </li>
                                <li><a href="#" className="nav-item nav-link">Կապ</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="banner">
                    <div className="container">
                        <h1>Հայաստանի Ջրագնդակի Ֆեդերացիյա</h1>
                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum*/}
                        {/*    lectus et tempor molestie.</p>*/}
                        {/*<a href="#" className="button button-primary">Տեսնել ավելին</a>*/}
                    </div>
                </div>
            </header>
        </>
    );

}


export default Header;








