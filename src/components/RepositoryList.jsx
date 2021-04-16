import { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';
import '../styles/repository.scss';

//https://api.github.com/users/Bignotto/repos

const repository = {
  name: 'James',
  description: 'James is a reporting robot.',
  link: 'https://github.com/bignotto/james',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Bignotto/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios:</h1>
      <ul>
        {repositories.map(item => {
          return (
            <RepositoryItem
              key={item.name}
              repository={{
                name: item.name,
                description: item.description,
                link: item.html_url,
              }}
            />
          );
        })}
      </ul>
    </section>
  );
}
