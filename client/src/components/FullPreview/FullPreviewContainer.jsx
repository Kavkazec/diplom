import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FullPreviewComponent from './FullPreviewComponent';
import _ from 'lodash';
import {
    loadImagesByCategory
} from '../../pages/PersonalPage/redux/PersonalPage.actions';

class FullPreviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'a',
        };
    }

    /*componentWillMount() {
        const { dispatch,person } = this.props;
        if(!_.isEmpty(person.data)) {
            const id = person.data.id;
            const categories = _.map(person.categories, (category) => category.name);
            dispatch(loadImagesByCategory(id,categories));
        }
    }*/

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
