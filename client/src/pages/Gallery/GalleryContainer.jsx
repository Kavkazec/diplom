import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import {
    loadGallery
} from './redux/Gallery.actions';
import Works from '../../components/Works';

class GalleryContainer extends React.Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(loadGallery());
    }

    render() {
        return (<Layout title="Работы">
                <div>
                    <Works/>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    dispatch: state.dispatch
});

export default connect(mapStateToProps)(GalleryContainer);
