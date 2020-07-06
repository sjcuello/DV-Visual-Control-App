const reducer = (state, action) =>{
  switch (action.type) {
    case 'GET_VIDEO_SOURCE':
      console.log('state.videos: ', state.videos);
      return {
        ...state,
        playing: state.videos.find(item => item.id === Number(action.payload)) || []
      }
    case 'SET_ALL_VIDEOS':
      return {
        ...state,
        videos: action.payload || []
      }
    case 'GER_ALL_RECOMMENDED':
      return {
        ...state,
        recommended: state.videos.filter(item => item.id !== Number(action.payload)) || []
      }
    default:
      return state;
  }
}

export default reducer;