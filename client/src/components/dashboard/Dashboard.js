import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom'
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])
    return loading && profile === null ? <Spinner /> :
        <Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user text-primary"></i>{' '}
                Welcome {user && user.name}
            </p>
            {profile !== null ?
                (<Fragment>
                    <DashboardActions />
                    <Experience experience={profile.experience}/>
                    <Education education={profile.education}/>
                    <div className="my-2">
                        <button className="btn btn-danger" onClick={() => deleteAccount()}>
                            <i className="fas fa-user-minus"></i>{' '}Delete my Account
                        </button>
                    </div>
                </Fragment>) :
                (<Fragment>
                    <p>You have not yet setup a profile, please asome info</p>
                    <Link to='/create-profile' className="btn btn-primary my-1">
                        <i className="fas fa-address-card"></i>{' '}
                        Create Profile
                </Link>
                </Fragment>)}
        </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapstateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapstateToProps, { getCurrentProfile, deleteAccount })(Dashboard)

