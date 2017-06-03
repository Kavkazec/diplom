import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WorksComponent from './WorksComponent';

class WorksContainer extends React.Component {

    render() {
        const { gallery } = this.props;
        return (<div style={{ margin: '0 10px 0 10px'}}>
                <WorksComponent
                    photographers={gallery.photographers}
                    categories={gallery.categories}
                    images={gallery.images}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gallery: state.gallery
});

export default connect(mapStateToProps)(WorksContainer);
