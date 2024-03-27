

const ListagemProdutos = ({ products }) => {
  
  const produtosOrdenados = products.slice().sort((a, b) => a.valor - b.valor);

  return (
    <div>
      <h2>Listagem de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {produtosOrdenados.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.value}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemProdutos;
