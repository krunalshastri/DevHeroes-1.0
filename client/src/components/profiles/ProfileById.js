import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProfileById } from '../../actions/profile';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileById = ({
  getProfileById,
  match,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <p>Loading.....</p>
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuth && !auth.loading && auth.user._id === profile.user._id && (
            <Link to='/edit-profile' className='btn btn-dark'>
              Edit Profile
            </Link>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

ProfileById.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(ProfileById);
