import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PhotographerPreviewComponent from './PhotographerPreviewComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Col } from 'react-bootstrap';

class PhotographerPreviewContainer extends React.Component {
    render() {
        const { review } = this.props.review;
        return (<Col mdOffset={2} md={8} style={{ marginTop: '20px' }}>
                <MuiThemeProvider>
                    <PhotographerPreviewComponent
                        photographers={review.data}
                    />
                </MuiThemeProvider>
                </Col>
        );
    }
}

PhotographerPreviewContainer.propsTypes = {
    photographers: PropTypes.array
};

const mapStateToProps = state => ({
    review: state.review
});

export default connect(mapStateToProps)(PhotographerPreviewContainer);
