import { SOUND_TOGGLE_FLYING } from "../systems/sound-effects-system";

const bindAllEvents = function(elements, events, f) {
  if (!elements || !elements.length) return;
  for (const el of elements) {
    events.length &&
      events.forEach(e => {
        el.addEventListener(e, f);
      });
  }
};
const unbindAllEvents = function(elements, events, f) {
  if (!elements || !elements.length) return;
  for (const el of elements) {
    events.length &&
      events.forEach(e => {
        el.removeEventListener(e, f);
      });
  }
};

/**
 * Toggles flying.
 * @namespace network
 * @component toggle-flying
 */
AFRAME.registerComponent("toggle-flying", {
  schema: {
    eventSrc: { type: "selectorAll" },
    toggleEvents: { type: "array" },
    // flyingEvents: { type: "array" },
  },
  init: function() {
    this.onToggle = this.onToggle.bind(this);
    // this.onFlying = this.onFlying.bind(this);
  },

  play: function() {
    const { eventSrc, toggleEvents } = this.data;
    bindAllEvents(eventSrc, toggleEvents, this.onToggle);
   // bindAllEvents(eventSrc, flyingEvents, this.onFlying);
    
  },

  pause: function() {
    const { eventSrc, toggleEvents } = this.data;
    unbindAllEvents(eventSrc, toggleEvents, this.onToggle);
    // unbindAllEvents(eventSrc, flyingEvents, this.onFlying);
  },

  onToggle: function() {
    if (!this.el.sceneEl.is("entered")) return;

    // this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_TOGGLE_MIC);
    if (this.el.is("flying")) {
      this.el.removeState("flying");
    } else {
      this.el.addState("flying");
    }
  },

  // onFlying: function() {
  //   if (!this.el.is("flying")) {  
  //     this.el.addState("flying");
  //   } else {
  //     this.el.removeState("flying");
  //   }
  // },
});
