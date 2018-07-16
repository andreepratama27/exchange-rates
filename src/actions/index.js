import * as types from "@src/constants/actionTypes";

export const showModal = () => {
  return {
    type: types.SHOW_MODAL
  };
};

export const hideModal = () => ({
  type: types.HIDE_MODAL
});
