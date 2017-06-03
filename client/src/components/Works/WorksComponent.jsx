import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Tabs, Tab} from 'material-ui/Tabs';
import c from 'material-ui/styles/MuiThemeProvider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CategoryContainer from '../Category/CategoryContainer';
import ImageContainer from '../Image/ImageContainer';
import {updateGallery} from '../../pages/Gallery/redux/Gallery.actions';
import MultiSelectPhotographer from '../MultiSelectPhotographer';
import MultiSelectCategory from "../MultiSelectCategory";
import RaisedButton from 'material-ui/RaisedButton';

class WorksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePhotographers = this.onChangePhotographers.bind(this);
        this.onChangeCategories = this.onChangeCategories.bind(this);
        this.state = {
            selectedCategories: [],
            selectedPhotographers: []
        };
    }

    componentWillReceiveProps(nextProps) {
        const { categories,photographers } = this.props;
        if (categories.length !== nextProps.categories.length && photographers.length !== nextProps.photographers.length) {
            const selectedCategories = _.map(nextProps.categories, (category) => category.name);
            const selectedPhotographers = _.map(nextProps.photographers, (category) => category.id);
            this.setState({
                selectedCategories,
                selectedPhotographers
            })
        } else if (categories.length !== nextProps.categories.length) {
            const selectedCategories = _.map(nextProps.categories, (category) => category.name);
            this.setState({
                selectedCategories
            })
        } else if (photographers.length !== nextProps.photographers.length) {
            const selectedPhotographers = _.map(nextProps.photographers, (category) => category.id);
            this.setState({
                selectedPhotographers
            })
        }
    }

    onChangePhotographers(event, index, value) {
        this.setState({
            selectedPhotographers: value
        })
    }

    onChangeCategories(event, index, value) {
        this.setState({
            selectedCategories: value
        })
    }

    render() {
        const {
            selectedCategories,
            selectedPhotographers
        } = this.state;
        const { dispatch } = this.props;
        const { photographers,categories,images } = this.props;
        return (
            <div>
                    <Col md={3} style={{ marginTop: '50px', float: 'left !important' }}>
                        <div style={{ margin: '10px 0 10px 0' }}>
                           <span className="diplom-span">
                        Фотографы
                     </span>
                            <MuiThemeProvider>
                                <MultiSelectPhotographer
                                    photographers={photographers}
                                    onChange={this.onChangePhotographers}
                                    value={selectedPhotographers}
                                    style={{ marginLeft: '10px' }}
                                />
                            </MuiThemeProvider>
                        </div>
                        <div style={{ margin: '10px 0 10px 0' }}>
                            <span className="diplom-span">
                            Категории
                        </span>
                            <MuiThemeProvider>
                                <MultiSelectCategory
                                    categories={categories}
                                    onChange={this.onChangeCategories}
                                    value={selectedCategories}
                                />
                            </MuiThemeProvider>
                        </div>
                        <div className="diplom-filter">
                            <MuiThemeProvider>
                                <RaisedButton
                                    label="Фильтр"
                                    onClick={() => dispatch(updateGallery(selectedPhotographers,selectedCategories))}
                                />
                            </MuiThemeProvider>
                        </div>

                    </Col>
                    <Col md={8}>
                        <MuiThemeProvider>
                            <ImageContainer
                                images={images}
                                style={{ margin: '0 auto'}}
                            />
                        </MuiThemeProvider>
                    </Col>
            </div>

        );
    }
}

WorksComponent.propsTypes = {
    photographers: PropTypes.object,
    categories: PropTypes.array,
    images: PropTypes.object
};

const mapStateToProps = state => ({
    dispatch: state.dispatch
});

export default connect(mapStateToProps)(WorksComponent);
