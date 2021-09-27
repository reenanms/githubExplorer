interface RepositoryItemProps {
	repository: {
		name: string;
		description: string;
		html_url: string;
	}
}

export function RepositoryItem(props: RepositoryItemProps) {
	const repository = props.repository ?? {};
	
	return (
		<li>
			<strong>{repository.name}</strong>
			<p>{repository.description}</p>
			<a href={repository.html_url}>
				Acessar repositório
			</a>
		</li>
	)
}