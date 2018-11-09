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
  grey: ["#bebebe", "#aaa", "#F0F0F0"],
  transparent: "rgba(34, 34, 34, 0.6)"
};

const getStyleSheet = (proportion = 1, color = "black") => {
  const applyProportion = getProportionApplier(proportion);
  const shades = mainPalette[color];
  return StyleSheet.create({
    macbookpro: {
      width: applyProportion(960),
      height: applyProportion(600),
      padding: `${applyProportion(44)}px ${applyProportion(
        44
      )}px ${applyProportion(76)}px`,
      margin: "0 auto",
      background: "#BEBEBE",
      borderRadius: applyProportion(34),
      ":before": {
        width: `calc(100% - ${applyProportion(8)}px)`,
        height: `calc(100% - ${applyProportion(8)}px)`,
        content: "''",
        position: "absolute",
        display: "block",
        top: applyProportion(4),
        left: applyProportion(4),
        borderRadius: applyProportion(30),
        background: shades[2]
      }
    },
    topBar: {
      width: `calc(100% + 2 * ${applyProportion(70)}px)`,
      height: applyProportion(40),
      position: "absolute",
      content: "''",
      display: "block",
      top: applyProportion(680),
      left: applyProportion(-70),
      borderBottomLeftRadius: `${applyProportion(90)}px ${applyProportion(
        18
      )}px`,
      borderBottomRightRadius: `${applyProportion(90)}px ${applyProportion(
        18
      )}px`,
      background: "#BEBEBE",
      boxShadow: `inset 0px ${applyProportion(-4)}px ${applyProportion(
        13
      )}px ${applyProportion(3)}px ${palette.transparent}`,
      ":before": {
        width: "100%",
        height: applyProportion(24),
        content: "''",
        display: "block",
        top: applyProportion(0),
        left: applyProportion(0),
        background: "#f0f0f0",
        borderBottom: `${applyProportion(2)}px solid #aaa`,
        borderRadius: applyProportion(5),
        position: "relative"
      },
      ":after": {
        width: "16%",
        height: applyProportion(14),
        content: "''",
        display: "block",
        top: 0,
        background: "#ddd",
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        borderRadius: `0 0 ${applyProportion(20)}px ${applyProportion(20)}px`,
        boxShadow: `inset 0px ${applyProportion(-3)}px ${applyProportion(
          10
        )}px #999`
      }
    },
    bottomBar: {
      background: "transparent",
      width: `calc(100% + 2 * ${applyProportion(70)}px)`,
      height: applyProportion(26),
      position: "absolute",
      content: "''",
      display: "block",
      top: applyProportion(680),
      left: applyProportion(-70),
      ":after": {
        height: `calc(100% - ${applyProportion(2)}px)`,
        width: applyProportion(80),
        content: "''",
        display: "block",
        top: 0,
        position: "absolute",
        right: 0,
        background: "#f0f0f0",
        background:
          "-webkit-gradient(linear, left top, right top, from(#f0f0f0), color-stop(0%, #f0f0f0), color-stop(20%, #f0f0f0), color-stop(59%, #979797), color-stop(86%, #ebebeb), color-stop(95%, #c3c3c3), to(#747474))",
        background:
          "linear-gradient(to right, #f0f0f0 0%, #f0f0f0 0%, #f0f0f0 20%, #979797 59%, #ebebeb 86%, #c3c3c3 95%, #747474 100%)"
      },
      ":before": {
        height: `calc(100% - ${applyProportion(2)}px)`,
        width: applyProportion(80),
        content: "''",
        display: "block",
        top: 0,
        position: "absolute",
        left: 0,
        background: "#f0f0f0",
        background:
          "-webkit-gradient(linear, left top, right top, from(#747474), color-stop(5%, #c3c3c3), color-stop(14%, #ebebeb), color-stop(41%, #979797), color-stop(80%, #f0f0f0), color-stop(100%, #f0f0f0), to(#f0f0f0))",
        background:
          "linear-gradient(to right, #747474 0%, #c3c3c3 5%, #ebebeb 14%, #979797 41%, #f0f0f0 80%, #f0f0f0 100%, #f0f0f0 100%)"
      }
    },
    camera: {
      background: "#3c3d3d",
      width: applyProportion(10),
      height: applyProportion(10),
      position: "absolute",
      top: applyProportion(20),
      left: "50%",
      marginLeft: applyProportion(-5),
      borderRadius: "100%"
    },
    background: {
      background: "#f16046",
      background:
        "-webkit-gradient(linear, left top, left bottom, from(#f16046), to(#395f84))",
      background: "linear-gradient(to bottom, #f16046 0%, #395f84 100%)"
    }
  });
};

export default class Macbookpro extends PureComponent {
  render() {
    const { proportion = 1, color } = this.props;
    const sheet = getStyleSheet(proportion, color);
    const mainSheet = getMainStyleSheet(proportion, color);
    return (
      <div className={css(mainSheet.marvelDevice, sheet.macbookpro)}>
        <div className={css(mainSheet.bars, sheet.topBar)} />
        <div className={css(sheet.camera)} />
        <div className={css(mainSheet.screen, sheet.background)}>
          <ContentFrame {...this.props} />
        </div>
        <div className={css(mainSheet.bars, sheet.bottomBar)} />
      </div>
    );
  }
}

Macbookpro.propTypes = {
  color: PropTypes.string,
  orientation: PropTypes.string,
  proportion: PropTypes.number,
  site: PropTypes.string
};
