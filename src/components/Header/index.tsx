import { useSelector } from 'react-redux'
import * as S from './styles'
import { Game } from '../../App'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'
const Header = () => {
  const itens = useSelector(
    (state: RootReducer) => state.carrinho.itens as Game[]
  )
  const valorTotal = itens.reduce((acc: number, item: Game) => {
    return acc + item.preco
  }, 0)
  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
