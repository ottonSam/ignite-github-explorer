const repositoryName = "Unform com interpolação";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in reactJS</p>

          <a href="#">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
}