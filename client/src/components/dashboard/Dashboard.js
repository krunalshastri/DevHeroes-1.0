import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';

const Dashboard = (props) => {
  useEffect(() => {
    props.getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <h1 className='large text-primary'> Dashboard </h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome{' '}
        {props.auth.user && props.auth.user.name}
      </p>

      {!props.profile.loading &&
        (props.profile.profile !== null ? (
          <Fragment>
            <DashboardActions />
          </Fragment>
        ) : (
          <Fragment>
            <p>You haven't added a profile yet.</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              {' '}
              Create Profile{' '}
            </Link>
          </Fragment>
        ))}

      <div
        className={
          !props.profile.loading && props.profile.profile !== null
            ? 'my-2'
            : 'my-1'
        }
      >
        <button
          className='btn btn-danger'
          onClick={() => props.deleteAccount()}
        >
          <i className='fas fas-user-minus'></i> Delete My Account
        </button>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
