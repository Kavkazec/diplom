import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FullPreviewComponent from './FullPreviewComponent';

class FullPreviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'a',
        };
    }

    handleChange(value){
        this.setState({
            value: value,
        });
    };

    render() {
        const { person } = this.props;
        return (<div style={{ margin: '0 10px 0 10px'}}>
                <FullPreviewComponent
                    photographer={person.data}
                    categories={person.categories}
                    images={person.images}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    person: state.person
});

export default connect(mapStateToProps)(FullPreviewContainer);
