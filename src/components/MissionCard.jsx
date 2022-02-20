import React from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missionsCard" data-testid="mission-card">
        <p className="nameMission" data-testid="mission-name">
          { name }
        </p>
        <p className="yearMission" data-testid="mission-year">
          { year }
        </p>
        <p className="country" data-testid="mission-country">
          { country }
        </p>
        <p className="destination" data-testid="mission-destination">
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
