import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ContentFrame from "./content-frame";

import {
  getStyleSheet as getMainStyleSheet,
  palette as mainPalette,
  getProportionApplier
} from "./devices-stylesheet";

import { StyleSheet, css } from "aphrodite";

const palette = {
  transparent: "rgba(255, 255, 255, 0.1)"
};

const getStyleSheet = (proportion = 1, color = "black") => {
  const applyProportion = getProportionApplier(proportion);
  const shades = mainPalette[color];
  return StyleSheet.create({
    ipad: {
      width: applyProportion(576),
      height: applyProportion(768),
      padding: `${applyProportion(90)}px ${applyProportion(25)}px`,
      borderRadius: applyProportion(44),
      background: shades[3],
      ":before": {
        width: `calc(100% - ${applyProportion(8)}px)`,
        height: `calc(100% - ${applyProportion(8)}px)`,
        content: "''",
        position: "absolute",
        display: "block",
        top: applyProportion(4),
        left: applyProportion(4),
        borderRadius: applyProportion(40),
        background: shades[2]
      }
    },
    camera: {
      background: shades[4],
      width: applyProportion(10),
      height: applyProportion(10),
      position: "absolute",
      top: applyProportion(44),
      left: "50%",
      marginLeft: applyProportion(-5),
      borderRadius: "100%"
    },
    background: {
      background: "#0d3477",
      background:
        "-webkit-gradient(linear, left top, left bottom, from(#0d3477), to(#adf3de))",
      background: "linear-gradient(to bottom, #0d3477 0%, #adf3de 100%)"
    },
    home: {
      background: shades[3],
      borderRadius: applyProportion(36),
      width: applyProportion(50),
      height: applyProportion(50),
      position: "absolute",
      left: "50%",
      marginLeft: applyProportion(-25),
      bottom: applyProportion(22),
      ":after": {
        width: applyProportion(15),
        height: applyProportion(15),
        marginTop: applyProportion(-8),
        marginLeft: applyProportion(-8),
        border: `${applyProportion(1)}px solid ${palette.transparent}`,
        borderRadius: applyProportion(4),
        position: "absolute",
        display: "block",
        content: "''",
        top: "50%",
        left: "50%"
      }
    }
  });
};

export default class Ipad extends PureComponent {
  render() {
    const { proportion = 1, color } = this.props;
    const sheet = getStyleSheet(proportion, color);
    const mainSheet = getMainStyleSheet(proportion, color);
    return (
      <div className={css(mainSheet.marvelDevice, sheet.ipad)}>
        <div className={css(sheet.camera)} />
        <div className={css(mainSheet.screen, sheet.background)}>
          <ContentFrame {...this.props} />
        </div>
        <div className={css(sheet.home)} />
      </div>
    );
  }
}

Ipad.propTypes = {
  color: PropTypes.string,

  orientation: PropTypes.string,
  proportion: PropTypes.number,
  site: PropTypes.string
};
