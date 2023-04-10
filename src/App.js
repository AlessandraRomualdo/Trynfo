import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
    hasTrunfo: false,
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cartoes: [{
      cardName: 'Luna',
      cardImage: 'https://64.media.tumblr.com/6a25519456a9da6db72f13b77e972d12/d29fbf257db3ae36-89/s500x750/2625730deb24e40e06d9a73d576c6c3b1868ab03.gifv',
      cardDescription: 'Em sua forma de gato, Luna é preta com a pele lustrosa e tem uma lua crescente em sua testa. Ela é muito pequena, e tem longos bigodes.',
      cardAttr1: '60',
      cardAttr2: '50',
      cardAttr3: '90',
      cardRare: 'raro'
    },{
      cardName: 'Hotaru Tomae',
      cardImage: 'https://64.media.tumblr.com/52f4a03b2b180b3ca3a24a61249bbe83/97d1b121d82b09c7-f9/s500x750/44d23112076d43a3124c610f3d9d683f07f9aec0.gif',
      cardDescription: 'É a identidade civil da atual encarnação da Sailor Saturn fazendo-a assim parte das Guerreiras do exterior do Sistema Solar.',
      cardAttr1: '90',
      cardAttr2: '80',
      cardAttr3: '80',
      cardRare: 'muito raro'
    },{
      cardName: 'Setsuna Meiou',
      cardImage: 'https://media.tenor.com/c4iLHbA1d9MAAAAC/sailor-pluto.gif',
      cardDescription: 'É a sexta guerreira Senshi a ser introduzida, e é também a encarnação da Sailor Pluto fazendo-a assim parte das Guerreiras do Sistema Solar.',
      cardAttr1: '95',
      cardAttr2: '40',
      cardAttr3: '80',
      cardRare: 'muito raro'
    }],
    nameFilter: '',
    raridadeCarta: 'todas',
  };

  handleNameChange = (event) => {
    this.setState({
      nameFilter: event.target.value,
    });
  };

  handleRareChange = (event) => {
    this.setState({
      raridadeCarta: event.target.value,
    });
  };

  validationFiels = () => {
    const valueLimit = 210;
    const maxValue = 90;
    const { cardName,
      cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const InpSz = (cardName.length > 0
      && cardDescription.length > 0 && cardImage.length > 0 && cardRare.length > 0);

    const totalAttr = (
      (parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10))
      <= valueLimit);

    const maxAttr = (parseInt(cardAttr1, 10) <= maxValue
      && parseInt(cardAttr2, 10) <= maxValue && parseInt(cardAttr3, 10) <= maxValue);

    const attrNegative = parseInt(cardAttr1, 10) >= 0
      && parseInt(cardAttr2, 10) >= 0 && parseInt(cardAttr3, 10) >= 0;

    this.setState({
      isSaveButtonDisabled: !(InpSz && totalAttr && maxAttr && attrNegative),
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validationFiels);
  };

  onSaveButtonClick = () => {
    console.log('cliquei');
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, cartoes } = this.state;
    const carta = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({
      cartoes: [...cartoes, carta],
    });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }, this.validationFiels);
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  };

  deleteCard = (index) => {
    const { cartoes } = this.state;
    // hasTrunfo ? this.setState({ hasTrunfo: false }) : this.setState({ hasTrunfo: true });
    if (cartoes[index].cardTrunfo) {
      this.setState({ hasTrunfo: false });
    } else {
      this.setState({ hasTrunfo: true });
    }
    // const removeItem = cartoes.indexOf(index);
    cartoes.splice(index, 1);
    this.setState({
      cartoes,
    });
  };

  render() {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, cartoes,
      nameFilter, raridadeCarta } = this.state;

    const validCard = (cartoes.length > 0);
    return (
      <div className="app">
        <Form
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div className="card-prev">
          <h1>PRÉ-VISUALIZAÇÃO</h1>
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="title-cards">
          <h1>Todas as cartas</h1>
        </div>
        <div className="filtros">
          <div className="filter-name">
            <label htmlFor="filter">Filtre pelo nome: </label>
            <input
              type="text"
              id="filter"
              data-testid="name-filter"
              onChange={ this.handleNameChange }
            />
          </div>
          <div className="filter-rare">
            <label htmlFor="raridade">Raridade: </label>
            <select
              data-testid="rare-filter"
              name="raridade"
              id="raridade"
              onChange={ this.handleRareChange }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>
        </div>
        {validCard && (
          <section className="container-cards">
            {cartoes.filter((carta) => carta.cardName.toLowerCase()
              .includes(nameFilter.toLowerCase()))
              .filter((carta) => {
                if (raridadeCarta === 'todas') return carta;
                return carta.cardRare === raridadeCarta;
              })
              .map((carta, index) => {
                const cartas = (
                  <div className="cards">
                    <Card
                      key={ carta.cardName }
                      cardName={ carta.cardName }
                      cardImage={ carta.cardImage }
                      cardDescription={ carta.cardDescription }
                      cardAttr1={ carta.cardAttr1 }
                      cardAttr2={ carta.cardAttr2 }
                      cardAttr3={ carta.cardAttr3 }
                      cardRare={ carta.cardRare }
                      cardTrunfo={ carta.cardTrunfo }
                    />
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => this.deleteCard(index) }
                    >
                      Excluir
                    </button>
                  </div>);

                return cartas;
              })}

          </section>
        )}
      </div>
    );
  }
}

export default App;
