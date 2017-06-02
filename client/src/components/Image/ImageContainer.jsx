import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';
import _ from 'lodash';
import { Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';

class ImageContainer extends React.Component {
    render() {
        const { images } = this.props;
        let array;
        if(!_.isEmpty(images)) {
            array = Object.keys(images);
        } else {
            array = [];
        }
        const all = _.map(array, (category) => {
            const imgArray = images[category];
            const ost = imgArray.length % 4;
            const height = ost === 0
                ? (Math.floor(imgArray.length/4) * 300) + 'px'
                : ((Math.floor(imgArray.length/4) + 1) * 300) + 'px';
            const imgs = _.map(imgArray, (img) => (
                <Col md={3} style={{ height: '250px', padding: '5px' }}>
                    <Paper zDepth={1} style={{ height: 'inherit' }}>
                        <img
                            src={`data:image/jpg;base64, ${img.imageAsByteArray}`}
                            style={{ height: 'inherit', width: '230px'}}
                            alt={img.imageName} />
                    </Paper>
                </Col>
            ));
            return (
                <div>
                    <div style={{ borderBottom: '1px solid black', margin: '5px 0 15px 0' }}>
                     <span className="diplom-category-font">
                        {category}
                     </span>
                    </div>
                    <div style={{ height: height}}>
                        {imgs}
                    </div>
                </div>
            )
        });
        return (<div>
                {all}
            </div>
        );
    }
}

ImageContainer.propTypes ={
    images: PropTypes.object
};

export default ImageContainer;
