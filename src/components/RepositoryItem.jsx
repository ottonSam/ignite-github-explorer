export function RepositoryItem(props) {


  return (
    <li>
      <strong>{ props.repository || 'Unform' }</strong>
      <p>Forms in reactJS</p>

      <a href="#">Acessar repositório</a>
    </li>
  )
}