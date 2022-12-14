import React from 'react'
import PropTypes from "prop-types"
import styles from './FiltroSecao.module.css'
export const FiltroSecao = ({secoes = [],onSelecionarSecao}) => {
  return (
    <div>
        <ul className={styles.filtroSecao}>
            {
                secoes.map(secao => (
                    <li className={styles.titleContainer}>
                        <button onClick={()=>{onSelecionarSecao(secao.nome)}}>{secao.nome}</button>
                    </li>
                ))
            }
           
        </ul>
    </div>
  )
}

FiltroSecao.propTypes = {
    onSelecionarSecao: PropTypes.func.isRequired,
    secoes: PropTypes.arrayOf(
        PropTypes.shape({
            nome: PropTypes.string,
        })
    )

}