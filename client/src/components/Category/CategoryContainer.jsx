import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';
import _ from 'lodash';

class CategoryContainer extends React.Component {
    render() {
        const {
            categories,
            isSelectedAll,
            changeSelectAllState,
            changeSingleSelect,
            selectedCategories
        } = this.props;

        let colorForAll = 'rgb(224, 224, 224)';
        if(isSelectedAll === true) {
            colorForAll = '#02b0fe';
        }
        const chips = categories.map((category) => {
          let color = 'rgb(224, 224, 224)';
          if(_.includes(selectedCategories, category.id)){
              color = '#02b0fe';
          }
          return  (
              <Chip
                  key={category.id}
                  onTouchTap={() => changeSingleSelect(category.id)}
                  style={{ backgroundColor: color }}
              >
                  {category.name}
              </Chip>
          )
        });
        return (<div style={{
                flexWrap: 'wrap'
            }}>
                <Chip
                    key="0"
                    onTouchTap={changeSelectAllState}
                    style={{
                        backgroundColor: colorForAll,
                        marginBottom: '5px'
                    }}
                >
                    all
                </Chip>
                {chips}
            </div>
        );
    }
}

CategoryContainer.propTypes ={
    categories: PropTypes.array,
    isSelectedAll: PropTypes.bool,
    changeSelectAllState: PropTypes.func,
    changeSingleSelect: PropTypes.func,
    selectedCategories: PropTypes.array
};

export default CategoryContainer;
