import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectTeams } from './selectors';
import * as actions from './actions';
import TeamCard from '../../components/TeamCard';


const TeamsWrapper = styled.section`
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
`;

export class Teams extends React.PureComponent {

  componentDidMount = () => this.props.fetchTeams();

  render = () =>
    <TeamsWrapper>
      {this.props.teams.map((t) => (
        <TeamCard key={t.id} team={t} />
      ))}
    </TeamsWrapper>
    ;
}

Teams.propTypes = {
  teams: React.PropTypes.array,

  fetchTeams: React.PropTypes.func,
};

Teams.defaultProps = {
  teams: [],

  fetchTeams: () => {},
};

const mapStateToProps = createStructuredSelector({
  teams: makeSelectTeams(),
});

export default connect(mapStateToProps, actions)(Teams);
