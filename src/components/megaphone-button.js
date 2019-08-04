AFRAME.registerComponent("megaphone-button", {
  init() {
    this.onClick = () => {
      this.megaphone(this.owner);
    };
    NAF.utils.getNetworkedEntity(this.el).then(networkedEl => {
      this.owner = networkedEl.components.networked.data.owner;
    });
  },

  play() {
    this.el.object3D.addEventListener("interact", this.onClick);
  },

  pause() {
    this.el.object3D.removeEventListener("interact", this.onClick);
  },

  async megaphone(clientId) {
    this.el.sceneEl.emit("action_megaphone_client", { clientId });
  }
});
