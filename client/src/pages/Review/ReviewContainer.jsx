import React, { PropTypes } from 'react';
import ReviewComponent from './ReviewComponent';
import Layout from '../../components/Layout';

const style = {
    minHeight: '800px',
};

class ReviewContainer extends React.Component {
    render() {
        return (<Layout title="Обзор">
                <div style={style}>
                    <ReviewComponent />
                </div>
            </Layout>
        );
    }
}

export default ReviewContainer;
