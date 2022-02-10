import { EventAction, EventActionEnums, EventState } from './types';

const initialState: EventState = {
  events: [],
  guests: [],
};

export default function EventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionEnums.SET_EVENTS:
      return { ...state, events: action.payload };
    case EventActionEnums.SET_GUESTS:
      return { ...state, guests: action.payload };
    default:
      return state;
  }
}
