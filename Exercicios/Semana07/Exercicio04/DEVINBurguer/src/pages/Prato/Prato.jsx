import './prato.css';
import PropType from 'prop-types';

export const Prato =({nome, pratos, subcategoria}) => {
    function verificaSubcategoria(subcategoria,subcategoria2){
        if (subcategoria.toLowerCase()===subcategoria2)
        return true;
    }
    return(
        <>
            <ul className='listaPratos'>
                {pratos.map((prato) => (
                    <>
                    {
                       (verificaSubcategoria(subcategoria,prato.subcategoria))?
                    <li key={prato.id} className="cardPrato">

                        <div className='fotoPrato'>
                            <img src={prato.foto}>
                            </img>
                            <h2>{prato.nome}</h2>
                             {prato.tempoPreparo?<p>Tempo preparo:<strong>{prato.tempoPreparo}</strong></p>:''}
                        </div>
                    </li>:''}
                    </>
                ))}
            </ul>
        </>
    )
  }
Prato.propTypes ={
     nome: PropType.string.isRequired,
     pratos: PropType.array.isRequired,
     subcategoria: PropType.string.isRequired,
}