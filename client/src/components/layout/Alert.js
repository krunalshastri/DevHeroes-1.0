import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Alert(props) {
  return (
    props.alert !== null &&
    props.alert.length > 0 &&
    props.alert.map((al) => (
      <div key={al.id} className={`alert alert-${al.alertType}`}>
        {al.msg}
      </div>
    ))
  );
}

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
