import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CategoryContainer from '../Category/CategoryContainer';
import ImageContainer from '../Image/ImageContainer';
import InfoContainer from '../Info/InfoContainer';
import {loadImagesByCategory} from '../../pages/PersonalPage/redux/PersonalPage.actions';
injectTapEventPlugin();

class FullPreviewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.changeSelectAllState = this.changeSelectAllState.bind(this);
        this.changeSingleSelect = this.changeSingleSelect.bind(this);
        this.state = {
            value: 'a',
            isSelectedAll: true,
            categories: [],
            selectedCategories: [],
            needReload: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const {categories} = this.props;
        if (categories.length !== nextProps.categories.length) {
            const selectedCategories = _.map(nextProps.categories, (category) => category.id);
            this.setState({
                categories: nextProps.categories,
                selectedCategories,
                needReload: false
            })
        } else {
            this.setState({
                needReload: false
            })
        }
    }


    componentWillUpdate(nextProps, nextState) {
        const { dispatch } = this.props;
        if(nextState.needReload === true){
            dispatch(loadImagesByCategory(nextProps.photographer.id,
                _.map(nextState.selectedCategories, (cat) => _.find(nextState.categories, (category) => category.id === cat).name)));
        }
    }

    changeSingleSelect(id) {
        const {
            isSelectedAll,
            categories,
            selectedCategories
        } = this.state;
        let isAll;
        let selected;

        if(isSelectedAll === true) {
            isAll = false;
        }

        if(_.includes(selectedCategories,id)){
            selected = _.filter(selectedCategories,(value) => value != id);
        } else {
            selected = _.concat(selectedCategories,id);
            if(_.map(categories, (category) => category.id).length === selected.length) {
                isAll = true;
            } else {
                isAll = false;
            }
        }

        this.setState({
            isSelectedAll: isAll,
            selectedCategories: selected,
            needReload: true
        })

    }

    changeSelectAllState()  {
        const {isSelectedAll, categories} = this.state;
        let selected = [];
        if(isSelectedAll === false) {
            selected = _.map(categories,(category) => category.id);
        }
        this.setState({
            isSelectedAll: !isSelectedAll,
            selectedCategories: selected,
            needReload: true
        })
    }

    handleChange(value){
        this.setState({
            value: value
        });
    };

    render() {
        const {
            categories,
            isSelectedAll,
            selectedCategories
        } = this.state;
        const { photographer,images } = this.props;
        return (
            <MuiThemeProvider>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="О фотографе" value="a">
                        <Col mdOffset={1} md={8} style={{ marginTop: '20px' }}>
                            <InfoContainer
                                photographer={photographer}
                            />
                        </Col>
                    </Tab>
                    <Tab label="Работы" value="b">
                        <Col mdOffset={1} md={2} style={{ marginTop: '50px', float: 'left !important' }}>
                            <CategoryContainer
                                categories={categories}
                                isSelectedAll={isSelectedAll}
                                changeSelectAllState={this.changeSelectAllState}
                                changeSingleSelect={this.changeSingleSelect}
                                selectedCategories={selectedCategories}
                            />
                        </Col>
                        <Col md={8} style={{ marginTop: '50px', float: 'right !important' }}>
                            <ImageContainer
                                images={images}
                            />
                        </Col>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

FullPreviewComponent.propsTypes = {
    photographer: PropTypes.object,
    categories: PropTypes.array,
    images: PropTypes.object
};

const mapStateToProps = state => ({
    dispatch: state.dispatch
});

export default connect(mapStateToProps)(FullPreviewComponent);
