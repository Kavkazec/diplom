import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import _ from 'lodash';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CategoryContainer from '../Category/CategoryContainer';
import Paper from 'material-ui/Paper';
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
            selectedCategories: []
        };
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
            selectedCategories: selected
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
            selectedCategories: selected
        })
    }

    componentWillReceiveProps(nextProps){
        const selectedCategories = _.map(nextProps.categories,(category) => category.id);
        this.setState({
            categories: nextProps.categories,
            selectedCategories
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
        const { photographer } = this.props;
        return (
            <MuiThemeProvider>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="О фотографе" value="a">
                        <Col mdOffset={1} md={8} style={{ marginTop: '20px' }}>

                            <div>
                                <Col md={4}>
                                    <Paper zDepth={1}>
                                    <img src={`data:image/jpg;base64, ${photographer.imageAsByte}`} className="img-responsive-big" alt="Cinque Terre" />
                                    </Paper>
                                </Col>
                                <Col mdOffset={1} md={7} style={{ paddingTop: '90px', paddingBottom: '50px' }}>
                                    <div className="preview-window-field">
                    <span className="farfetch-font">
                        Имя:
                    </span>
                                        {photographer.firstName}
                                    </div>
                                    <div className="preview-window-field">
                       <span className="farfetch-font">
                        Фамилия:
                    </span>
                                        {photographer.surname}
                                    </div>
                                    <div className="preview-window-field">
                       <span className="farfetch-font">
                        Возраст:
                    </span>
                                        {photographer.age}
                                    </div>
                                    <div className="preview-window-field">
                       <span className="farfetch-font">
                        Дополнительная информация:
                    </span>
                                        {photographer.description}
                                    </div>
                                </Col>
                            </div>
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
                            Polyana
                        </Col>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

FullPreviewComponent.propsTypes = {
    photographer: PropTypes.object,
    categories: PropTypes.array
};

export default FullPreviewComponent;
