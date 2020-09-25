import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

/**
 *
 * @param {campsite {} from redux} campsite
 * Returns card with image and name from campsite object.
 * Called within a map callback function in Directory component, variable directory.
 * Clicking on a particular campsite's card links to `/directory/${campsite.id}`
 */
function RenderDirectoryItems({ campsite }) {
  return (
    <Card>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg
          width="100%"
          src={baseUrl + campsite.image}
          alt={campsite.name}
        />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
/**
 *
 * @param {campsite {} from redux} props
 * grabs campsites data objects. Map takes each campsite object and passes data to RenderDirectoryItems.
 * RenderDirectoryItems renders 4 unique cards.
 * Loading component returned if isLoading = true
 * Error displayed if errMess = !null
 */
function Directory(props) {
  const directory = props.campsites.campsites.map(campsite => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItems campsite={campsite} />
      </div>
    );
  });

  if (props.campsites.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.campsites.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.campsites.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Directory</BreadcrumbItem>
          </Breadcrumb>
          <h2>Directory</h2>
          <hr />
        </div>
      </div>
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
