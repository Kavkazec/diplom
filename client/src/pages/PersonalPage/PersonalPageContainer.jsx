import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { loadPhotographer } from './redux/PersonalPage.actions';
import FullPreviewContainer from '../../components/FullPreview/FullPreviewContainer';

class PersonalPageContainer extends React.Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(loadPhotographer(1));
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
    dispatch: state.dispatch
});

export default connect(mapStateToProps)(PersonalPageContainer);
