export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const setAllVideos = payload => ({
  type: 'SET_ALL_VIDEOS',
  payload,
});

export const getAllRecommended = payload => ({
  type: 'GET_ALL_RECOMMENDED',
  payload,
});