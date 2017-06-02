import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class FullPreviewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'a'
        };
    }

    handleChange(value){
        this.setState({
            value: value
        });
    };

    render() {
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
                                    <img src={`data:image/jpg;base64, ${photographer.imageAsByte}`} className="img-responsive-big" alt="Cinque Terre" />
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
                        <Col mdOffset={1} md={8} style={{ marginTop: '20px' }}>
                        <div>
                            <p>
                                This is another example of a controllable tab. Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                            </p>
                        </div>
                        </Col>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

FullPreviewComponent.propsTypes = {
    photographer: PropTypes.object
};

export default FullPreviewComponent;
