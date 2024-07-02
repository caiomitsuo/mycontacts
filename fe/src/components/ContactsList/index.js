import { Container, Header, ListContainer, ListBody } from "./style"

import arrow from '../../assets/images/icons/arrow.svg'

export default function ContactList() {
    return  (
        <Container>
          <Header>
            <strong>3 contatos</strong>
            <a href="/">Novo contato</a>    
          </Header>

          <ListContainer>
            <header>
              <button type="button">
                <span>Nome</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </header>
            
          </ListContainer>
        </Container>
    )
}