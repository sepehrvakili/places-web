export function loadDisplayPlaces(places, userId) {
  // Initial loader action to filter out users own places
  return {
    type: 'LOAD_DISPLAY_PLACES',
    places, userId,
  };
}

export function updateDisplayPlaces(places, filter) {
  return { type: 'FILTER_PLACES', places, filter };
}

export function updateShowing(index) {
  return { type: 'UPDATE_SHOWING', index };
}

export function hideAll() {
  return { type: 'HIDE_ALL' };
}