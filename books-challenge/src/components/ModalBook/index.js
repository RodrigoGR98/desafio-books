import React, { useEffect } from 'react';

import { Container, Modal, Info, Close, ImageNull } from './styles';

import { AiOutlineClose } from "react-icons/ai";
import { MdImage } from "react-icons/md";

function ModalBook({ book, setShow }) {
  useEffect(() => {
    console.log(book);
  }, [])

  return (
    <Container>
      <Modal>
        {book.imageUrl !== null ? (
          <img src={book.imageUrl}></img>
        ) : <ImageNull>
          <MdImage />
        </ImageNull>}
        <Info>
          <h1>{book.title}</h1>
          <h2>{ }</h2>
        </Info>
      </Modal>
      <Close type="button" onClick={() => { setShow(false) }}>
        <AiOutlineClose />
      </Close>
    </Container>
  )
};

export default ModalBook;