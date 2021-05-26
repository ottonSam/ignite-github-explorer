type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {

  return (
    <li>
      <strong>{props.repository?.name ?? 'Default name'}</strong>
      <p>{props.repository?.description ?? 'Default description'}</p>

      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}