import { reactive } from "vue";
import { seedData } from "./seed";

export const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay() {
    return this.state.data.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.data.map((dayObj) => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    const newEvent = { details: eventDetails, edit: false };
    activeDay.events.push(newEvent);
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const dayObj = this.state.data.find((day) => dayId === day.id);
    const eventObj = dayObj.events.find(
      (event) => event.details === eventDetails
    );
    eventObj.edit = true;
  },
  resetEditOfAllEvents() {
    this.state.data.map((dayObj) =>
      dayObj.events.map((event) => {
        event.edit = false;
      })
    );
  },
};
