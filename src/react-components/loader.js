import React, { Component } from "react";
import PropTypes from "prop-types";
import { IntlProvider, FormattedMessage } from "react-intl";
import { lang, messages } from "../utils/i18n";
import loaderStyles from "../assets/stylesheets/loader.scss";

class Loader extends Component {
  static propTypes = {
    scene: PropTypes.object,
    finished: PropTypes.bool,
    onLoaded: PropTypes.func
  };

  doneWithInitialLoad = false;
  state = {
    loadingNum: 0,
    loadedNum: 0
  };

  componentDidMount() {
    this.props.scene.addEventListener("model-loading", this.onObjectLoading);
    this.props.scene.addEventListener("image-loading", this.onObjectLoading);
    this.props.scene.addEventListener("model-loaded", this.onObjectLoaded);
    this.props.scene.addEventListener("image-loaded", this.onObjectLoaded);
    this.props.scene.addEventListener("model-error", this.onObjectLoaded);
    this.props.scene.addEventListener(
      "environment-scene-loaded",
      () => {
        this.environmentSceneLoaded = true;
        this.tryFinishLoading();
      },
      { once: true }
    );
  }

  componentWillUnmount() {
    this.props.scene.removeEventListener("model-loading", this.onObjectLoading);
    this.props.scene.removeEventListener("image-loading", this.onObjectLoading);
    this.props.scene.removeEventListener("model-loaded", this.onObjectLoaded);
    this.props.scene.removeEventListener("image-loaded", this.onObjectLoaded);
    this.props.scene.removeEventListener("model-error", this.onObjectLoaded);
  }

  onObjectLoading = () => {
    if (!this.doneWithInitialLoad && this.loadingTimeout) {
      window.clearTimeout(this.loadingTimeout);
      this.loadingTimeout = null;
    }

    this.setState(state => {
      return { loadingNum: state.loadingNum + 1 };
    });
  };

  onObjectLoaded = () => {
    this.setState(state => {
      return { loadedNum: state.loadedNum + 1 };
    });

    this.tryFinishLoading();
  };

  tryFinishLoading = () => {
    if (!this.doneWithInitialLoad && this.loadingTimeout) window.clearTimeout(this.loadingTimeout);

    if (this.environmentSceneLoaded) {
      this.loadingTimeout = window.setTimeout(() => {
        this.doneWithInitialLoad = true;
        if (this.props.onLoaded) {
          this.props.onLoaded();
        }
      }, 1500);
    }
  };

  render() {
    const nomore = (
      <h4 className={loaderStyles.loadingText}>
        <FormattedMessage id="loader.entering_lobby" />
      </h4>
    );
    const progress = this.state.loadingNum === 0 ? " " : `${this.state.loadedNum} / ${this.state.loadingNum} `;
    const usual = (
      <h4 className={loaderStyles.loadingText}>
        <FormattedMessage id="loader.loading" />
        {progress}
        <FormattedMessage id={this.state.loadingNum !== 1 ? "loader.objects" : "loader.object"} />
        ...
      </h4>
    );
    return (
      <IntlProvider locale={lang} messages={messages}>
        <div className="loading-panel">
          <img className="loading-panel__logo" style={{height: 150, width: 150}} src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/54268481_418828918875645_3756046202836090880_n.jpg?_nc_cat=105&_nc_ht=scontent-lax3-2.xx&oh=565c73168d488999f10fe235c26e504b&oe=5D5DE7BB" />

          {this.props.finished ? nomore : usual}

          <div className="loader-wrap loader-bottom">
            <div className="loader">
              <div className="loader-center" />
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default Loader;
