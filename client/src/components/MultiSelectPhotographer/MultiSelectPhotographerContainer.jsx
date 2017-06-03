import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MultiSelectPhotographerContainer extends React.Component {
    render() {
        const {
            photographers,
            onChange,
            value
        } = this.props;
        const data = _.map(photographers, (single) => (
            <MenuItem value={single.id} key={single.id} primaryText={single.fullName} />
        ));
        return (
            <div>
                <SelectField
                    value={value}
                    onChange={onChange}
                    maxHeight={200}
                    multiple={true}
                >
                    {data}
                </SelectField>
            </div>
        );
    }
}

MultiSelectPhotographerContainer.propsTypes = {
    photographers: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.array
};

export default MultiSelectPhotographerContainer;
