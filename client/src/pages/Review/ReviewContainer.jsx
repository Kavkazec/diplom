import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { loadPhotographers, setPhotographerId } from './redux/Review.actions';
import PhotographerPreview from '../../components/PhotographerPreview';

class ReviewContainer extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(loadPhotographers());
    }


    render() {
        return (<Layout title="Обзор">
                <div>
                    <PhotographerPreview
                        setId={setPhotographerId}
                    />
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    dispatch: state.dispatch,
});

export default connect(mapStateToProps)(ReviewContainer);
