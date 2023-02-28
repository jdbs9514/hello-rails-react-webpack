import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  greeting: state.greeting
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
