import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Col } from 'react-bootstrap';

class InfoContainer extends React.Component {
    render() {
        const { photographer } = this.props;
        return (
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
        );
    }
}

InfoContainer.propTypes ={
    photographer: PropTypes.object
};

export default InfoContainer;
