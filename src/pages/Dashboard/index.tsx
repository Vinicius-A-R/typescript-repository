import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/github-logo.svg';

import { FiChevronRight } from 'react-icons/fi';
import { Container, Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const res = await api.get<Repository>(`repos/${newRepo}`);

    setRepositories([...repositories, res.data]);
    setNewRepo('');
  }

  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />

      <Title>Explore Github Repositories</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="repository name"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">SEARCH</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="#">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={24} />
          </a>
        ))}
      </Repositories>
    </Container>
  );
};

export default Dashboard;
