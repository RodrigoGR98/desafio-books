import React, { useEffect, useState } from 'react';

import { Container, Image, NullImage, Info, Title, Author, Details } from './styles';

import ModalBook from '../ModalBook';

import { MdImage } from "react-icons/md";

function BookCard({ book }) {
  const [authors, setAuthors] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    var autores = '';
    book.authors.map((author, index) => {
      if ((index + 1) !== book.authors.length) {

        autores = autores + author + ", ";
      } else {
        autores = autores + author;
      }
    })
    setAuthors(autores);
  }, [])

  return (
    <Container >
      <div className="wrap" onClick={() => { setShow(true) }}>
        {book.imageUrl !== null ? (
          <Image alt={`Capa ${book.title}`} src={book.imageUrl} />
        ) :
          <NullImage><MdImage /></NullImage>
        }
        <Info>
          <Title>{book.title}</Title>
          <Author>{authors}</Author>
          <Details>
            <span>{book.pageCount} páginas</span>
            <span>Editora {book.publisher}</span>
            <span>Publicado em {book.published}</span>
          </Details>
        </Info>
      </div>
      {show && (<ModalBook book={book} setShow={setShow} />)}
    </Container >
  );
}

export default BookCard;