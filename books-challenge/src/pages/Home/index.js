import React, { useEffect, useState } from 'react';

import { Container, Header, Filter, Books, Pagination } from './styles';

//Componentes
import BookCard from '../../components/BookCard';

//Arquivos
import bgHome1 from '../../assets/bgHome1.png';
import bgHome2 from '../../assets/bgHome2.png';
import logoHome from '../../assets/logoHome.png';
import { FiLogOut, FiChevronLeft, FiChevronRight } from "react-icons/fi";

//Services
import apiBooks from '../../services/api-books';
import { clearSession, isLogged, sessionGet, sessionSet } from '../../session';

function Home() {

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [atualPage, setAtualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!isLogged()) {
      window.location = '/';
      return;
    }
  }, [])

  useEffect(() => {
    getBooks();
  }, [page])

  const getBooks = async () => {
    try {
      const response = await apiBooks.get(`/books?page=${page}&amount=16`, { headers: { 'Authorization': `Bearer ${sessionGet('auth')}` } });
      if (response.status === 200) {
        setBooks(response.data.data);
        setAtualPage(response.data.page);
        setTotalPages(Math.ceil(response.data.totalPages));
      }

    } catch (error) {
      if (error.response.status === 401) {
        const response = await apiBooks.post('/auth/refresh-token', { refreshToken: sessionGet('refresh') }, { headers: { 'Authorization': `Bearer ${sessionGet('auth')}` } });
        const dados = {
          name: sessionGet('name'),
          refresh: response.headers["refresh-token"],
          auth: response.headers.authorization
        }
        sessionSet(dados);
        getBooks();
      }
    }
  }

  const nextPage = () => {
    console.log(totalPages);
    if (page !== totalPages) {
      setPage(page + 1);
    }
  }

  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  const logout = () => {
    clearSession();
    window.location.href = "/";
  }

  return (
    <Container bg1={bgHome1} bg2={bgHome2}>
      <Header>
        <div className="left-header">
          <img alt="logo" src={logoHome}></img>
          <span>Books</span>
        </div>
        <div className="right-header">
          <span>Bem {sessionGet('gender') === 'M' ? 'vindo' : 'vinda'}, <strong>{sessionGet('name')}</strong></span>
          <FiLogOut onClick={() => { logout() }} />
        </div>
      </Header>
      <Filter>

      </Filter>
      <Books>
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </Books>
      <Pagination>
        <span>Página <strong>{atualPage}</strong> de <strong>{totalPages}</strong></span>
        <button type="button" name="Página anterior" onClick={() => { previousPage() }} className={page === 1 ? 'disabled' : ''} disabled={page === 1 ? true : false}><FiChevronLeft /><span>Página anterior</span></button>
        <button type="button" name="Próxima página" onClick={() => { nextPage() }} className={page === totalPages ? 'disabled' : ''} disabled={page === totalPages ? true : false}><FiChevronRight /><span>Próxima página</span></button>
      </Pagination>
    </Container>
  );
}

export default Home;