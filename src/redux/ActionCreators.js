import * as ActionTypes from './ActionTypes';
// import { baseUrl } from '../shared/baseUrl';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

/**
 * Redux Action creators
 */

// campsites
export const fetchCampsites = () => dispatch => {
  dispatch(campsitesLoading());

  setTimeout(() => {
    dispatch(addCampsites(CAMPSITES));
  }, 2000);

  /* return fetch(baseUrl + 'campsites')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(campsites => dispatch(addCampsites(campsites)))
    .catch(error => dispatch(campsitesFailed(error.message))); */
};

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = errMess => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const addCampsites = campsites => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});

// comments
export const fetchComments = () => dispatch => {
  setTimeout(() => {
    dispatch(addComments(COMMENTS));
  }, 2000);

  /* return fetch(baseUrl + 'comments')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message))); */
};

export const commentsFailed = errMess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {
  const newComment = {
    campsiteId: campsiteId,
    rating: rating,
    author: author,
    text: text,
  };
  newComment.date = new Date().toISOString();

  alert(
    `Thank you for your comment, ${newComment.author}:
Rating: ${newComment.rating}/5
Comment: "${newComment.text}"`
  );

  /* return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log('post comment', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
    }); */
};

// promotions
export const fetchPromotions = () => dispatch => {
  dispatch(promotionsLoading());

  setTimeout(() => {
    dispatch(addPromotions(PROMOTIONS));
  }, 2000);

  /* return fetch(baseUrl + 'promotions')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(promotions => dispatch(addPromotions(promotions)))
    .catch(error => dispatch(promotionsFailed(error.message))); */
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = errMess => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess,
});

export const addPromotions = promotions => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

// partners
export const partnersLoading = () => ({
  type: ActionTypes.PARTNERS_LOADING,
});

export const partnersFailed = errMess => ({
  type: ActionTypes.PARTNERS_FAILED,
  payload: errMess,
});

export const addPartners = partners => ({
  type: ActionTypes.ADD_PARTNERS,
  payload: partners,
});

export const fetchPartners = () => dispatch => {
  dispatch(partnersLoading());

  setTimeout(() => {
    dispatch(addPartners(PARTNERS));
  }, 2000);

  /* return fetch(baseUrl + 'partners')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(partners => dispatch(addPartners(partners)))
    .catch(error => dispatch(partnersFailed(error.message))); */
};

// feedback
export const postFeedback = (
  firstName,
  lastName,
  phoneNum,
  email,
  agree,
  contactType,
  feedback
) => () => {
  const newFeedback = {
    firstName,
    lastName,
    phoneNum,
    email,
    agree,
    contactType,
    feedback,
  };
  newFeedback.date = new Date().toISOString();

  alert(`Thank you for your feedback, ${newFeedback.firstName}:
Feedback: "${newFeedback.feedback}"`);

  /* return (
    fetch(baseUrl + 'feedback', {
      method: 'POST',
      body: JSON.stringify(newFeedback),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(
        response => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        error => {
          throw error;
        }
      )
      .then(response => response.json())
      // .then(response => dispatch(addFeedback(response)))
      .then(() => alert('Thank you for your feedback', newFeedback))
      .catch(error => {
        console.log('post feedback', error.message);
        alert('Your feedback could not be posted\nError: ' + error.message);
      })
  ); */
};
