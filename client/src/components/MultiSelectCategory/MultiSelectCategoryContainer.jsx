import React, { PropTypes } from 'react';
import _ from 'lodash';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MultiSelectCategoryContainer extends React.Component {

    render() {
        const { categories,onChange,value } = this.props;
        const data = _.map(categories, (single) => (
            <MenuItem value={single.name} key={single.id} primaryText={single.name} />
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

MultiSelectCategoryContainer.propsTypes = {
    categories: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.array
};

export default MultiSelectCategoryContainer;
