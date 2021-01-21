// import cartIcon from '../../assets/icons/cart.svg';
import './style.css';

function Newsletter() {

  const apiUrl = 'https://corebiz-test.herokuapp.com/api';

  const submitForm = (ev) => {
    const {
      name: { value: nameValue },
      email: { value: emailValue },
    } = ev.target.elements;
    const url = `${apiUrl}/v1/newsletter`;
    const data = {
      name: nameValue,
      email: emailValue,
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(r => r.json())
      .then(r => {
        showSuccess();
      })
      .catch(e => {
        console.log('error', e);
      })
    ev.preventDefault();
    return false;
  }

  const showSuccess = () => {
    document.querySelector('.newsLetterComponent form').style.display = 'none';
    document.querySelector('.newsLetterComponent .success').style.display = 'flex';
  }

  const backToForm = () => {
    document.querySelector('.newsLetterComponent .success').style.display = 'none';
    document.querySelector('.newsLetterComponent form').style.display = 'flex';
  }

  return (
    <div className="newsLetterComponent">
      <div className="container">
        <h2 className="title">Paticipe de nossas news com promoções e novidades!</h2>
        <form onSubmit={(ev) => submitForm(ev)}>
          <div className="col-auto"> 
            <input name="name" type="text" placeholder="Digite seu nome"  required/>
          </div>
          <div className="col-auto">
            <input name="email" type="Email" placeholder="Digite seu email" required/>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn">Eu quero!</button>
          </div>
        </form>
        <div className="success" style={{ display: 'none' }}>
          <p>
            Seu e-mail foi cadastrado com sucesso!
          </p>
          <p>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </p>
          <button className="btn" onClick={() => backToForm()}>
            Cadastrar novo email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
