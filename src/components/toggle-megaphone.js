import { SOUND_TOGGLE_MIC } from "../systems/sound-effects-system";

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
 * Toggles the microphone on the current network connection based on the given events.
 * @namespace network
 * @component toggle-megaphone
 */
AFRAME.registerComponent("toggle-megaphone", {
  schema: {
    eventSrc: { type: "selectorAll" },
    toggleEvents: { type: "array" },
    enableEvents: { type: "array" },
    disableEvents: { type: "array" }
  },
  init: function() {
    this.onToggle = this.onToggle.bind(this);
    this.onEnable = this.onEnable.bind(this);
    this.onDisable = this.onDisable.bind(this);
  },

  play: function() {
    const { eventSrc, toggleEvents, enableEvents, disableEvents } = this.data;
    bindAllEvents(eventSrc, toggleEvents, this.onToggle);
    bindAllEvents(eventSrc, enableEvents, this.onEnable);
    bindAllEvents(eventSrc, disableEvents, this.onDisable);
  },

  pause: function() {
const { eventSrc, toggleEvents, enableEvents, disableEvents } = this.data;
    unbindAllEvents(eventSrc, toggleEvents, this.onToggle);
    unbindAllEvents(eventSrc, enableEvents, this.onEnable);
    unbindAllEvents(eventSrc, disableEvents, this.onDisable);
  },

  onToggle: function() {
    if (!NAF.connection.adapter) return;
    if (!this.el.sceneEl.is("entered")) return;

    this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_TOGGLE_MIC);
    if (this.el.is("megaphoneEnabled")) {
      // NAF.connection.adapter.enableMegaphone(true);
      this.el.removeState("megaphoneEnabled");
    } else {
      // NAF.connection.adapter.enableMegaphone(false);
      this.el.addState("megaphoneEnabled");
    }
  },

  onEnable: function() {
    if (!NAF.connection.adapter) return;
    if (!this.el.is("megaphoneEnabled")) {
      // NAF.connection.adapter.enableMegaphone(false);
      this.el.addState("megaphoneEnabled");
    }
  },

  onDisable: function() {
    if (this.el.is("megaphoneEnabled")) {
      // NAF.connection.adapter.enableMegaphone(true);
      this.el.removeState("megaphoneEnabled");
    }
  }
});
