import {
  GET_ONE_ARTICLE_COMMENTS_DATA,
  GET_ONE_ARTICLE_DATA,
  POST_USER_FOCUS_STATUS
} from './action_types';
import { x_get, x_post } from '../../../plugs/axios';
import { api_get_comments, api_get_one_article, api_post_focus } from '../../../api';


export const getArticleCommentDataAction = (article_id = 0, page = 0) => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_get_comments + "?a_id=" + article_id + "&page=" + page);

    if (err) return;

    const { data } = res;

    dispatch({
      type: GET_ONE_ARTICLE_COMMENTS_DATA,
      data: data.data
    });
  }
}


export const getOneArticleDataAction = (article_id = 0) => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_get_one_article + "?a_id=" + article_id);

    if (err) return;

    const { data } = res;

    dispatch({
      type: GET_ONE_ARTICLE_DATA,
      data: data.data
    });
  }
}

export const getOneUserFocusAction = (u_id) => {

  return async (dispatch) => {
    const [res, err] = await x_post(api_post_focus, {
      u_id
    });
    if (err) return;

    const { status } = res;
    if (status)
      dispatch({
        type: POST_USER_FOCUS_STATUS
      });

  }

}
