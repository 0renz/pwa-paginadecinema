import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import FilmeContext from './FilmeContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CampoSelect from '../../comuns/CampoSelect';
import CampoEntradaTextArea from '../../comuns/CampoEntradaTextArea';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, listaDiretores } = useContext(FilmeContext);

    return (
        <Dialogo id="modalEdicao" titulo="Produto"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={8}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msginvalido="Informe o nome"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.data_lancamento ? new Date(objeto.data_lancamento).toISOString().split('T')[0] : ''}
                    id="txtDataLancamento"
                    name="data_lancamento"
                    label="Data de lançamento"
                    tipo="date"
                    onchange={handleChange}
                    msginvalido="Informe a data de lançamento"
                    requerido={true}
                    readonly={false} />

            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.diretor_id}
                    id="txtDiretor" name="diretor_id" label="Diretor"
                    onchange={handleChange}
                    msginvalido="Informe o diretor"
                    requerido={true}>
                    {listaDiretores.map((dir) => (
                        <option key={dir.codigo} value={dir.codigo}>
                            {dir.nome}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
        </Dialogo>
    )
}

export default Formulario;