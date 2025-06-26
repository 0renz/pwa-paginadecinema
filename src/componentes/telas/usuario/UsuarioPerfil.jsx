import { useEffect, useState } from 'react';
import { getUsuarioAPI, atualizaUsuarioAPI } from '../../../servicos/UsuarioServico';
import CampoEntrada from '../../comuns/CampoEntrada';
import Alerta from '../../comuns/Alerta';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function UsuarioPerfil() {
  const [usuario, setUsuario] = useState({});
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    getUsuarioAPI().then(setUsuario);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setUsuario(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    atualizaUsuarioAPI(usuario)
      .then(res => setAlerta({ tipo: "success", mensagem: res.mensagem }))
      .catch(err => setAlerta({ tipo: "danger", mensagem: err.erro }));
  };

  return (
    <Container className="mt-4">
      <h3>Editar dados</h3>
      <Alerta alerta={alerta} />
      <form onSubmit={handleSubmit}>
        <CampoEntrada label="Nome" name="nome" value={usuario.nome || ''} onchange={handleChange} requerido={true} />
        <CampoEntrada label="Email" name="email" value={usuario.email || ''} readonly={true} />
        <CampoEntrada label="Telefone" name="telefone" value={usuario.telefone || ''} onchange={handleChange} requerido={true} />
        <CampoEntrada label="Tipo" name="tipo" value={usuario.tipo || ''} onchange={handleChange} requerido={true} />
        <CampoEntrada label="Senha" name="senha" value={usuario.senha || ''} onchange={handleChange} requerido={true} tipo="password" />
        <Button variant="primary" type="submit" className="mt-2">Salvar</Button>
      </form>
    </Container>
  );
}

export default UsuarioPerfil;
