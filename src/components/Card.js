import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="preview">
        <div className="container-infos">
          <div className="superTrunfo-name">
            <p data-testid="name-card">{ cardName }</p>
            { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
          </div>
          <img
            className="img-card"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p className="rare-card" data-testid="rare-card">{ cardRare }</p>
          <p
            className="description"
            data-testid="description-card"
          >
            { cardDescription }

          </p>
          <div className="atributs-all">
            <div className="attr">
              <p>Atk</p>
              <p data-testid="attr1-card">{ cardAttr1 }</p>
            </div>
            <div className="attr">
              <p>Def</p>
              <p data-testid="attr2-card">{ cardAttr2 }</p>
            </div>
            <div className="attr">
              <p>Vel</p>
              <p data-testid="attr3-card">{ cardAttr3 }</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
