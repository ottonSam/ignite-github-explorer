export function RepositoryItem(props) {


  return (
    <li>
      <strong>{ props.repository ?? 'Default' }</strong>
      <p>Forms in reactJS</p>

      <a href="#">Acessar repositório</a>
    </li>
  )
}