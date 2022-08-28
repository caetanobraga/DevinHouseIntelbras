import './prato.css';
import PropType from 'prop-types';

export const Prato =({pratos, subcategoria}) => {
    function verificaSubcategoria(subcategoria,subcategoria2){
        if (subcategoria.toLowerCase()===subcategoria2)
        return true;
    }
    return(
            <ul className='listaPratos'>
                {pratos.map((prato) => verificaSubcategoria(subcategoria,prato.subcategoria)?(    
                    <li className="cardPrato" key={prato.id}>
                        <div className='fotoPrato'>
                            <img src={prato.foto}/>
                            <h2>{prato.nome}</h2>
                             {prato.tempoPreparo?<p>Tempo preparo:<strong>{prato.tempoPreparo}</strong></p>:''}
                        </div>
                    </li>):'')}
            </ul>
    )
  }
Prato.propTypes ={
     pratos: PropType.array.isRequired,
     subcategoria: PropType.string.isRequired,
}