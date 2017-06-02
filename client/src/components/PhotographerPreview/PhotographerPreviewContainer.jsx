import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PhotographerPreviewComponent from './PhotographerPreviewComponent';
import { Col } from 'react-bootstrap';

class PhotographerPreviewContainer extends React.Component {
    render() {
        const { review } = this.props.review;
        const { setId } = this.props;
        return (<Col mdOffset={2} md={8} style={{ marginTop: '20px' }}>
                <PhotographerPreviewComponent
                    photographers={review.data}
                    setId={setId}
                />
                </Col>
        );
    }
}

PhotographerPreviewContainer.propsTypes = {
    photographers: PropTypes.array,
    setId: PropTypes.func
};

const mapStateToProps = state => ({
    review: state.review
});

export default connect(mapStateToProps)(PhotographerPreviewContainer);
