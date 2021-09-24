import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);
	
	useEffect(() => {
		fetch('https://api.github.com/users/reenanms/repos')
			.then(response => response.json())
			.then(data => 
				setRepositories(
					data.map(d => ({
							name: d.name,
							description: d.description,
							link: d.html_url
						})
					)
				)
			);
	}, [])

	return (
		<section className="repository-list" >
			<h1>Lista de repositórios</h1>
			
			<ul>
				{repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
			</ul>
		</section>
	)
}