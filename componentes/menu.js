function Menu() {
    return (
        <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "15px" }}>
                <li><a href="/">Menu</a></li>
                <li><a href="/locacao">Locações</a></li>
                <li><a href="/clientes">Clientes</a></li>
                <li><a href="/cadastro">Cadastros</a></li>
                <li><a href="/pagamentos">Pagamento</a></li>
            </ul>
        </nav>
    );
}

export default Menu;
