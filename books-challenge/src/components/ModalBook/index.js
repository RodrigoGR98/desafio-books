import React, { useEffect, useState } from 'react';

import { Container, Modal, Info, Information, Close, ImageNull } from './styles';

import { ImQuotesLeft } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { MdImage } from "react-icons/md";

function ModalBook({ book, setShow }) {
  const [authors, setAuthors] = useState('');

  useEffect(() => {
    console.log(book);

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
    <Container>
      <Modal>
        {book.imageUrl !== null ? (
          <img alt={`Capa ${book.title}`} src={book.imageUrl}></img>
        ) : <ImageNull>
          <MdImage />
        </ImageNull>}
        <Info>
          <h1>{book.title}</h1>
          <h2>{authors}</h2>
          <Information>
            <h3>INFORMAÇÕES</h3>
            <div className="row">
              <span className="title">Páginas</span>
              <span className="info">{book.pageCount} páginas</span>
            </div>
            <div className="row">
              <span className="title">Editora</span>
              <span className="info">{book.publisher}</span>
            </div>
            <div className="row">
              <span className="title">Publicação</span>
              <span className="info">{book.published}</span>
            </div>
            <div className="row">
              <span className="title">Idioma</span>
              <span className="info">{book.language}</span>
            </div>
            <div className="row">
              <span className="title">Título Original</span>
              <span className="info">{book.title}</span>
            </div>
            <div className="row">
              <span className="title">ISBN-10</span>
              <span className="info">{book.isbn10}</span>
            </div>
            <div className="row">
              <span className="title">ISBN-13</span>
              <span className="info">{book.isbn13}</span>
            </div>
            <h3>RESENHA DA EDITORA</h3>
            <p><ImQuotesLeft />{book.description}</p>
          </Information>
        </Info>
      </Modal>
      <Close type="button" onClick={() => { setShow(false) }}>
        <AiOutlineClose />
      </Close>
    </Container>
  )
};

export default ModalBook;