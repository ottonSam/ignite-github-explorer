export function RepositoryItem(props) {


  return (
    <li>
      <strong>{props.repository?.name ?? 'Default name'}</strong>
      <p>{props.description?.description ?? 'Default description'}</p>

      <a href={props.repository?.html_url ?? '#'}>Acessar repositório</a>
    </li>
  )
}