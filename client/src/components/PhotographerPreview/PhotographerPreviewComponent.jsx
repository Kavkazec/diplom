import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

class PhotographerPreviewComponent extends React.Component {

    render() {
        const { photographers, setId, dispatch } = this.props;
        const preview = photographers.map((photographer) => {
            return (
                <div className="preview-window">
                    <Col md={4}>
                        <img src={`data:image/jpg;base64, ${photographer.imageAsByte}`} className="img-responsive" alt="Cinque Terre" />
                    </Col>
                    <Col md={8} style={{ paddingTop: '90px', paddingBottom: '50px' }}>
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
                        <div className="preview-window-field pull-right" style={{ paddingTop: '60px'}}>
                            <MuiThemeProvider>
                                <RaisedButton
                                    label="Подробнее..."
                                    labelPosition="before"
                                    href="http://localhost:8080/personal-page"
                                    onClick={() => dispatch(setId(photographer.id))}
                                />
                            </MuiThemeProvider>
                        </div>

                    </Col>
                </div>
            )
        });
        return (<Col md={12}>
            { preview }
        </Col>
        );
    }
}

PhotographerPreviewComponent.propsTypes = {
    photographers: PropTypes.array,
    setId: PropTypes.func
};

const mapStateToProps = state => ({
    dispatch: state.dispatch
});

export default connect(mapStateToProps)(PhotographerPreviewComponent);
