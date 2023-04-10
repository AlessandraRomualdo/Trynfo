import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <form>
        <h1>ADICIONE NOVA CARTA</h1>
        <label htmlFor="nome">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            id="nome"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricao">
          <textarea
            data-testid="description-input"
            id="descricao"
            cols="30"
            rows="5"
            maxLength="190"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Attr1:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Attr2:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Attr3:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="img">
          Imagem:
          <input
            data-testid="image-input"
            id="img"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="">
          Raridade:
          <select
            data-testid="rare-input"
            name="cardRare"
            id=""
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="">
          Super Trunfo:
          { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id=""
            checked={ cardTrunfo }
            onChange={ onInputChange }
          /> }
        </label>

        <button
          type="button"
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
