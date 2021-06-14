import './Profil.css'
const Profil = () => {

    return (
        <div className="main">
            <div>
                <img src="" alt="profil-avatar" />
                <h2>Sixten Kaffsson</h2>
                <p>sixten.kaffsson@zocom.se</p>
            </div>
            <div>
                <h3>OrderHistorik</h3>
                <ul>
                    <li>
                        <div>
                            <span>#1245125</span>
                            <span>Total ordersummar</span>
                        </div>
                    </li>
                           <li>
                        <div>
                            <span>#1245125</span>
                            <span>Total ordersummar</span>
                        </div>
                    </li>
                           <li>
                        <div>
                            <span>#1245125</span>
                            <span>Total ordersummar</span>
                        </div>
                    </li>
                    <div>
                        <span>Totalt spenderat</span>
                        <span> 1849kr</span>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Profil
