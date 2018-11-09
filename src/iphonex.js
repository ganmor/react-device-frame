import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentFrame from "./content-frame";

import {
  getStyleSheet as getMainStyleSheet,
  palette as mainPalette,
  getProportionApplier
} from "./devices-stylesheet";

import { StyleSheet, css } from "aphrodite";

const getStyleSheet = (proportion = 1, color = "black") => {
  const applyProportion = getProportionApplier(proportion);
  const shades = mainPalette[color];
  return StyleSheet.create({
    iphonex: {
      width: applyProportion(375),
      height: applyProportion(812),
      padding: applyProportion(26),
      background: "#fdfdfd",
      boxShadow: `inset 0 0 ${applyProportion(11)}px 0 ${shades[0]}`,
      borderRadius: applyProportion(66),
      ":before": {
        width: `calc(100% - ${applyProportion(10)}px)`,
        height: `calc(100% - ${applyProportion(10)}px)`,
        position: "absolute",
        top: applyProportion(5),
        content: "''",
        left: applyProportion(5),
        borderRadius: applyProportion(61),
        background: shades[0],
        zIndex: 1
      }
    },
    overflow: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: applyProportion(66),
      overflow: "hidden"
    },
    shadow: {
      borderRadius: "100%",
      width: applyProportion(90),
      height: applyProportion(90),
      position: "absolute",
      background:
        "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 60%)"
    },
    shadowTL: {
      top: applyProportion(-20),
      left: applyProportion(-20)
    },
    shadowTR: {
      top: applyProportion(-20),
      right: applyProportion(-20)
    },
    shadowBL: {
      bottom: applyProportion(-20),
      left: applyProportion(-20)
    },
    shadowBR: {
      bottom: applyProportion(-20),
      right: applyProportion(-20)
    },
    innerShadow: {
      width: `calc(100% - ${applyProportion(20)}px)`,
      height: `calc(100% - ${applyProportion(20)}px)`,
      position: "absolute",
      top: applyProportion(10),
      overflow: "hidden",
      left: applyProportion(10),
      borderRadius: applyProportion(56),
      boxShadow: `inset 0 0 ${applyProportion(
        15
      )}px 0 rgba(255, 255, 255, 0.66)`,
      zIndex: 1,
      ":before": {
        boxShadow: `inset 0 0 ${applyProportion(20)}px 0 #ffffff`,
        width: "100%",
        height: "116%",
        position: "absolute",
        top: "-8%",
        content: "''",
        left: 0,
        borderRadius: 200 / 112,
        zIndex: 2
      }
    },
    screen: {
      borderRadius: applyProportion(40),
      boxShadow: "none"
    },
    topBar: {
      width: "100%",
      position: "absolute",
      height: applyProportion(8),
      background: "rgba(0, 0, 0, 0.1)",
      left: 0,
      top: applyProportion(80)
    },
    bottomBar: {
      width: "100%",
      position: "absolute",
      height: applyProportion(8),
      background: "rgba(0, 0, 0, 0.1)",
      left: 0,
      bottom: applyProportion(80)
    },
    volume: {
      width: applyProportion(3),
      background: "#b5b5b5",
      position: "absolute",
      left: applyProportion(-3),
      top: applyProportion(116),
      height: applyProportion(32),
      ":before": {
        width: applyProportion(3),
        background: "#b5b5b5",
        position: "absolute",
        height: applyProportion(62),
        top: applyProportion(62),
        content: "''",
        left: 0
      },
      ":after": {
        width: applyProportion(3),
        background: "#b5b5b5",
        position: "absolute",
        height: applyProportion(62),
        top: applyProportion(140),
        content: "''",
        left: 0
      }
    },
    sleep: {
      width: applyProportion(3),
      background: "#b5b5b5",
      position: "absolute",
      height: applyProportion(96),
      top: applyProportion(200),
      right: applyProportion(-3)
    },
    camera: {
      width: applyProportion(6),
      height: applyProportion(6),
      top: applyProportion(9),
      borderRadius: "100%",
      position: "absolute",
      left: applyProportion(154),
      background: "#0d4d71"
    },
    speaker: {
      height: applyProportion(6),
      width: applyProportion(60),
      left: "50%",
      position: "absolute",
      top: applyProportion(9),
      marginLeft: applyProportion(-30),
      background: "#171818",
      borderRadius: applyProportion(6)
    },
    notch: {
      position: "absolute",
      width: applyProportion(210),
      height: applyProportion(30),
      top: applyProportion(26),
      left: applyProportion(108),
      zIndex: 4,
      background: shades[0],
      borderBottomLeftRadius: applyProportion(24),
      borderBottomRightRadius: applyProportion(24),
      ":before": {
        content: "''",
        height: applyProportion(8),
        position: "absolute",
        top: 0,
        width: applyProportion(8),
        background:
          "radial-gradient(circle at bottom right, transparent 0, transparent 70%, black 70%, black 100%)",
        right: applyProportion(-8)
      },
      ":after": {
        content: "''",
        height: applyProportion(8),
        position: "absolute",
        top: 0,
        width: applyProportion(8),
        background:
          "radial-gradient(circle at bottom left, transparent 0, transparent 70%, black 70%, black 100%)",
        left: applyProportion(-8)
      }
    },
    background: {
      background: "#ff268e",
      background:
        "-webkit-gradient(linear, left top, left bottom, from(#ff268e), to(#ff694f))",
      background: "linear-gradient(to bottom, #ff268e 0%, #ff694f 100%)"
    }
  });
};

export default class Iphonex extends Component {
  render() {
    const { proportion = 1, color } = this.props;
    const sheet = getStyleSheet(proportion, color);
    const mainSheet = getMainStyleSheet(proportion, color);
    return (
      <div className={css(mainSheet.marvelDevice, sheet.iphonex)}>
        <div className={css(sheet.notch)}>
          <div className={css(sheet.camera)} />
          <div className={css(sheet.screen)} />
        </div>
        <div className={css(mainSheet.bars, sheet.topBar)} />
        <div className={css(sheet.sleep)} />
        <div className={css(mainSheet.bars, sheet.bottomBar)} />
        <div className={css(sheet.volume)} />
        <div className={css(sheet.overflow)}>
          <div className={css(sheet.shadowTR)} />
          <div className={css(sheet.shadowTL)} />
          <div className={css(sheet.shadowBR)} />
          <div className={css(sheet.shadowBL)} />
        </div>
        <div className={css(sheet.innerShadow)} />
        <div className={css(mainSheet.screen, sheet.screen, sheet.background)}>
          <ContentFrame {...this.props} />
        </div>
      </div>
    );
  }
}

Iphonex.propTypes = {
  color: PropTypes.string,
  site: PropTypes.string,
  orientation: PropTypes.string
};
