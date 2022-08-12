import './prato.css';
import fotoPrato from '../../assets/bico-de-pao.jpg';
import PropType from 'prop-types';

export const Prato =({titulo}) => {
    return(
        <main className='main'>
            <h2>{titulo}</h2>
            <img src={fotoPrato} width={250} alt='bico'></img>

        </main>
    )
}

Prato.protoTypes ={
    titulo: PropType.string.isRequired,
}