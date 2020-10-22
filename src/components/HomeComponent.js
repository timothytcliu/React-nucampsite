import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

/**
 *
 * Renders card from props from Home component.
 * Picture, Title, Description
 * or, Loading component
 * or, Error message
 */
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: 'scale(1.05) translateY(1%)' }}
    >
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

/**
 *
 * Homepage displays three Card components,
 * from props data: campsites, promotions, partners
 */
function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <RenderCard
            item={props.campsite}
            isLoading={props.campsitesLoading}
            errMess={props.campsitesErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promotionLoading}
            errMess={props.promotionErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.partner}
            isLoading={props.partnersLoading}
            errMess={props.partnersErrMess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
