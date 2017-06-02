import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import Layout from '../../components/Layout';
import {
    loadPhotographer
} from './redux/PersonalPage.actions';
import FullPreviewContainer from '../../components/FullPreview/FullPreviewContainer';

class PersonalPageContainer extends React.Component {

    componentWillMount() {
        const { dispatch,routing } = this.props;
        const id = Number(_.last(routing.pathname.replace(new RegExp('/', 'g'),'').split('photographer')));
        dispatch(loadPhotographer(id));
    }

    render() {
        return (<Layout title="Персональная страница">
                <div>
                    <FullPreviewContainer />
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    dispatch: state.dispatch,
    routing: state.routing.locationBeforeTransitions
});

export default connect(mapStateToProps)(PersonalPageContainer);
