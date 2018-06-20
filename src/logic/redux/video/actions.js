import types from './types';

// handle the id of the channel/video selected
export const handleVideoSelect = data => ({
  type: types.VIDEO_ID,
  payload: data,
});
