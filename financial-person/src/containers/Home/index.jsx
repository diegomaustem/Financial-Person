import './styles.css'
function Home() {
    return (
        <>
            <div className="container">

                <div className="painel-top">
                    <h3>Financial Person - Beta</h3>
                </div>

                <div className="painel-cards">
                    <div className="card-saldo">
                        <p className="saldo">Saldo</p>
                        <p className="saldo">R$ 3000</p>
                    </div>
                    <div className="card-entrada">
                        <p className="saldo">Entrada</p>
                        <p className="saldo">R$ 3000</p>
                    </div>

                    <div className="card-saida">
                        <p className="saldo">Saída</p>
                        <p className="saldo">R$ 3000</p>
                    </div>
                </div>

                <div className="painel-inputs">
                    <span className=''>
                        <input name="name" type="text" placeholder="R$ Entrada"/><button type="button" onClick="">Register</button>
                    </span>
                    <span className=''>
                        <input name="name" type="text" placeholder="R$ Saída"/><button type="button" onClick="">Register</button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Home