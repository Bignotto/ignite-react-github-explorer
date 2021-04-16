import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss';

const repository = {
    name: 'James',
    description: "James is a reporting robot.",
    link: 'https://github.com/bignotto/james'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios:</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>

            </ul>
        </section>
    )
}