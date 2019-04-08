import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Table from './table.jsx';
import HighlightAmens from './highlights.jsx';
import BuildingAmens from './building.jsx';
import ListingAmens from './listing.jsx';
import OutdoorAmens from './outdoor.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDescriptionBox: undefined,
      description: '',
      descriptionPreSpan: '',
      descriptionPostSpan: '',
      highlightAmens: [],
      buildingAmens: [],
      listingAmens: [],
      outdoorAmens: [],
      maximizeDescription: false
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  componentDidMount() {
    Axios.get(`/api/description${window.location.pathname}`)
      .then(response => {
        let data = response.data;
        this.setState({
          fullDescriptionBox: data,
          description: data.description,
          highlightAmens: data.highlightAmens,
          buildingAmens: data.buildingAmens,
          listingAmens: data.listingAmens,
          outdoorAmens: data.outdoorAmens
        });
      })
      .catch(err => {
        console.log(
          `ERROR LOADING DESCRIPTION WITH ID ${window.location.pathname}`
        );
        console.log('THIS WAS THE ERR: ', err);
      });
  }

  toggleDescription() {
    document
      .getElementById('description')
      .classList.toggle('minimize-description');
    document
      .getElementById('description')
      .classList.toggle('maximize-description');
    this.setState({ maximizeDescription: !this.state.maximizeDescription });
  }

  render() {
    return (
      <div id="entireDescriptionBox">
        <div>
          <Table />
        </div>
        <div id="descriptionBox">
          <h5 id="descriptionHead">Description </h5>
          <div id="description-text-container">
            <p id="description" className="minimize-description">
              {this.state.description}
            </p>
          </div>
          <div onClick={this.toggleDescription} id="readMore">
            {this.state.maximizeDescription ? 'Read Less' : 'Read More'}
          </div>
        </div>
        <hr className="separator" />
        <div>
          <h5 id="amenitiesHead">Amenities</h5>
          <h5 id="highlightAmens" class="amens">
            Highlights{' '}
          </h5>
          <HighlightAmens highlights={this.state.highlightAmens} />
          <h5 class="amens">Building Amenities </h5>
          <BuildingAmens buildings={this.state.buildingAmens} />
          <h5 class="amens">Listing Amenities </h5>
          <ListingAmens listings={this.state.listingAmens} />
          <h5 class="amens">Outdoor Amenities </h5>
          <OutdoorAmens outdoors={this.state.outdoorAmens} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('description-container'));
