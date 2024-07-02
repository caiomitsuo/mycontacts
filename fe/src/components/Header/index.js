/* eslint-disable jsx-a11y/alt-text */
import { Container, InputSearchContainer } from "./style";
import logo from '../../assets/images/logo.svg'

export default function Header() {
    return (
      <Container>
          <img src={logo} alt='MyContacts' width="251px"/>

          <InputSearchContainer>
            <input type="text" placeholder="Pesquise pelo nome..."/>
          </InputSearchContainer>
      </Container>
    )
}