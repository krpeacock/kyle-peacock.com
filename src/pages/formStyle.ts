import { css } from "styled-components";
export const formStyle = css`
  /* $Id: $ */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  caption,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    background-attachment: fixed;
    color: #444444;
    font: 75%/1.3 Arial, Helvetica, sans-serif;
    margin: 0 auto;
  }

  input,
  input[type="text"],
  input[type="search"],
  isindex,
  textarea,
  button {
    outline: none;
    margin: 0 auto;
    padding: 5px 10px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  img,
  a {
    border: 0px;
    outline: none;
    color: #3a6cae;
    text-decoration: none;
  }
  img,
  a:hover {
    text-decoration: underline;
  }
  .zf-flLeft {
    float: left;
  }
  .zf-flRight {
    float: right;
  }
  .zf-clearBoth {
    clear: both;
  }
  ol,
  ul {
    list-style: none outside none;
  }
  .zf-normalText {
    font-size: 13px;
    line-height: 1.5;
  }
  .zf-smallText {
    font-size: 0.9em;
    font-weight: normal;
  }
  .zf-smallHeading {
    font-size: 18px;
  }
  .zf-heading {
    font-size: 2em;
  }
  .zf-subHeading {
    font-size: 1.5em;
  }
  .zf-boldText,
  .zf-boldText a {
    font-weight: bold;
    text-decoration: none;
  }
  .zf-italicText {
    font-style: italic;
  }
  .zf-heading a {
    text-decoration: underline;
  }
  .zf-heading a:hover {
    text-decoration: none;
  }
  .zf-blodText {
    font-weight: bold;
  }
  .zf-overAuto {
    overflow: auto;
  }
  .zf-split {
    color: #8b9193;
    padding: 0 3px;
  }

  .zf-backgroundBg {
    background: #f5f5f5;
  }

  .zf-templateWidth {
    margin: 1% auto;
  }

  .zf-templateWidth {
    width: 800px;
  }

  .zf-templateWrapper {
    background: #fff;
    border: 1px solid #d6d6d6;
    -webkit-box-shadow: 0 0px 3px #e1e1e1;
    -moz-box-shadow: 0 0px 3px #e1e1e1;
    box-shadow: 0 0px 3px #e1e1e1;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .zf-tempContDiv input[type="text"],
  .zf-tempContDiv textarea,
  .zf-tempContDiv .zf-pdfTextArea {
    background: #fff;
    border: 1px solid #e5e5e5;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    padding: 5px;
    font-size: 13px;
  }

  .zf-tempContDiv input[type="text"]:hover,
  .zf-tempContDiv textarea:hover {
    border: 1px solid rgba(157, 157, 157, 0.75) !important;
  }
  .zf-tempContDiv input[type="text"]:focus,
  .zf-tempContDiv textarea:focus {
    border: 1px solid rgba(121, 187, 238, 0.75) !important;
    -webkit-box-shadow: 0 0 5px rgba(82, 168, 236, 0.5) !important;
    -moz-box-shadow: 0 0 5px rgba(82, 168, 236, 0.5) !important;
    box-shadow: 0 0 5px rgba(82, 168, 236, 0.5) !important;
  }

  .zf-tempContDiv textarea {
    height: 75px;
  }
  .arrangeAddress .zf-addrCont span.zf-addtwo {
    width: 99% !important;
    float: none !important;
  }
  /**********Error Message***********/
  .zf-errorMessage {
    font: 12px Arial, Helvetica, sans-serif;
    color: #ff0000;
    padding-top: 5px;
  }

  /**********Mandatory Message***********/
  .zf-important {
    color: #ff0000 !important;
    font-weight: normal;
    margin-left: 0px;
    padding: 0;
    font-size: 13px !important;
  }

  /**********instruction Message***********/
  .zf-instruction {
    color: #939393;
    font-style: italic;
    margin-top: 3px;
    font-size: 12px;
    overflow: visible !important;
    word-break: break-all;
    margin-bottom: 3px;
  }

  .zf-symbols {
    padding: 0 5px;
  }

  .zf-overflow {
    overflow: hidden;
  }

  /*****************template Header Starts Here****************/

  .zf-tempHeadBdr {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .zf-tempHeadContBdr {
    background: #494949;
    border-bottom: 1px solid #eaeaea;
    margin: 0;
    padding: 10px 25px;
    -webkit-border-radius: 2px 2px 0 0;
    -moz-border-radius: 2px 2px 0 0;
    border-radius: 2px 2px 0 0;
  }
  .zf-tempHeadContBdr .zf-frmTitle {
    color: #ffffff;
    margin: 0;
    padding: 0;
    font-size: 2em;
  }
  .zf-tempHeadContBdr .zf-frmDesc {
    color: #dddddd;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  /****************template Header Ends Here****************/

  .zf-subContWrap {
    padding: 0;
    margin: 10px;
    margin-bottom: 0;
  }

  .zf-tempFrmWrapper {
    padding: 10px 15px;
    margin: 1px 0;
  }

  .zf-tempFrmWrapper .zf-tempContDiv {
    margin: 0;
    padding: 0;
  }

  .zf-tempFrmWrapper .zf-labelName {
    font-weight: bold;
    font-size: 13px;
    color: #444;
  }

  .zf-form-sBox {
    padding: 4px;
    border: 1px solid #e5e5e5;
    font-size: 13px;
  }

  .zf-name .zf-tempContDiv span,
  .zf-phone .zf-tempContDiv span,
  .zf-time .zf-tempContDiv span {
    float: left;
    display: block;
  }

  .zf-name .zf-tempContDiv span {
    margin-bottom: 5px;
    margin-left: 4%;
  }
  .zf-name .zf-tempContDiv span.last {
    margin-right: 0;
  }
  .zf-name .zf-tempContDiv span label {
    display: block;
    padding-top: 3px;
  }
  .zf-name .zf-tempContDiv input[type="text"] {
    width: 100%;
  }

  .zf-phone .zf-tempContDiv span label,
  .zf-date .zf-tempContDiv span label,
  .zf-time .zf-tempContDiv span label,
  .zf-address .zf-tempContDiv span label,
  .zf-geolocation .zf-tempContDiv span label,
  .zf-name .zf-tempContDiv span label {
    font-size: 11px;
    padding-top: 3px;
  }
  .zf-phone .zf-tempContDiv label,
  .zf-date .zf-tempContDiv label,
  .zf-time .zf-tempContDiv label,
  .zf-address .zf-tempContDiv label,
  .zf-name .zf-tempContDiv span label {
    color: #888888;
  }
  .zf-phone .zf-tempContDiv span label {
    display: block;
    padding-top: 3px;
    text-align: center;
  }
  .zf-phone .zf-tempContDiv .zf-symbols {
    padding-top: 5px;
  }

  .zf-currency .zf-tempContDiv span {
    display: inline-block;
  }
  .zf-currency .zf-tempContDiv span label {
    display: block;
    padding-top: 3px;
  }
  .zf-currency .zf-tempContDiv .zf-symbol {
    font-size: 14px;
    margin-left: 5px;
    margin-top: 4px;
    width: auto;
    font-weight: bold;
  }

  .zf-decesion .zf-tempContDiv {
    width: 100% !important;
    margin-top: 4px;
  }
  .zf-decesion input[type="checkbox"] {
    display: block;
    height: 13px;
    margin: 0;
    padding: 0;
    width: 13px;
    float: left;
    margin-top: 4px;
  }
  .zf-decesion label {
    display: block;
    line-height: 21px;
    margin: 0px 0 0 25px !important;
    padding-bottom: 0 !important;
    width: 95% !important;
    float: none !important;
    line-height: 21px !important;
    text-align: left !important;
  }

  .zf-tempContDiv input[type="file"] {
    outline: none;
    border: 1px solid #ccc;
    margin: 0 auto;
    padding: 5px;
    width: auto;
  }

  .zf-address .zf-tempContDiv span,
  .zf-geolocation .zf-tempContDiv span {
    display: block;
    padding-bottom: 15px;
    margin-right: 2%;
  }

  .zf-address .zf-tempContDiv span label,
  .zf-geolocation .zf-tempContDiv span label {
    display: block;
    padding-top: 3px;
  }

  .zf-address .zf-tempContDiv .zf-addOne,
  .zf-geolocation .zf-tempContDiv .zf-addOne {
    float: none;
    padding-bottom: 15px;
    margin-right: 0;
  }

  .zf-address .zf-tempContDiv .zf-addOne input,
  .zf-geolocation .zf-tempContDiv .zf-addOne input {
    width: 98%;
  }
  .zf-address .zf-tempContDiv span.zf-addtwo,
  .zf-geolocation .zf-tempContDiv span.zf-addtwo {
    width: 48%;
  }
  .zf-address .zf-tempContDiv span.zf-addtwo input,
  .zf-geolocation .zf-tempContDiv span.zf-addtwo input {
    width: 99%;
  }
  .zf-address .zf-tempContDiv span.zf-addtwo .zf-form-sBox {
    width: 100%;
  }

  .zf-signContainer {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .zf-signContainer canvas {
    cursor: crosshair;
    border: 1px solid #ccc;
    background: #fff;
  }
  .zf-signContainer a {
    font-size: 11px;
    text-decoration: underline;
  }

  .zf-section h2 {
    border-bottom: 1px solid #d7d7d7;
    font-size: 22px;
    color: #000;
    font-weight: 500;
    font-family: "Open Sans", "Lucida Grande", Arial, Helvetica, sans-serif;
    padding-bottom: 10px;
  }
  .zf-section p {
    color: #847f7f;
    margin-top: 10px;
  }

  .zf-note .zf-labelName {
    padding-top: 7px;
  }
  .zf-templateWrapper .zf-note {
    overflow: hidden;
  }

  .zf-date .zf-tempContDiv span label {
    display: block;
    padding-top: 3px;
    text-align: left;
  }

  .zf-subDate {
    margin-right: 10px;
  }
  .zf-subDate label {
    text-align: left !important;
  }

  .zf-time .zf-tempContDiv span label {
    display: block;
    padding-top: 3px;
    text-align: center;
  }

  .zf-time .zf-tempContDiv .zf-form-sBox {
    min-width: 58px;
  }

  .zf-time .zf-tempContDiv .zf-symbols {
    padding-top: 5px;
  }

  .zf-tempContDiv input[type="checkbox"],
  .zf-tempContDiv input[type="radio"] {
    display: block;
    height: 13px;
    margin: 4px 0 0;
    padding: 0;
    width: 13px;
  }

  .zf-radio .zf-overflow,
  .zf-checkbox .zf-overflow {
    padding-left: 2px !important;
  }

  .zf-sideBySide .zf-tempContDiv span {
    margin: 0 15px 5px 0;
    padding: 0;
    width: auto;
    float: left;
    display: block;
  }
  .zf-sideBySide .zf-tempContDiv span input[type="checkbox"] {
    display: block;
    width: 13px;
    height: 13px;
    padding: 0;
    margin-top: 3px;
    float: left;
  }
  .zf-sideBySide .zf-tempContDiv span input[type="radio"] {
    display: block;
    width: 13px;
    height: 13px;
    margin-top: 4px;
    padding: 0;
    float: left;
  }
  .zf-sideBySide .zf-tempContDiv span label {
    line-height: 21px;
    display: block;
    margin: 0 0 0 20px;
    padding: 0 0 5px;
  }

  .zf-oneColumns .zf-tempContDiv span {
    margin: 0 0 13px 0;
    padding: 0;
    width: 100%;
    display: block;
    clear: both;
  }
  .zf-oneColumns .zf-tempContDiv span:last-child {
    margin-bottom: 0;
  }

  .zf-oneColumns .zf-tempContDiv span input[type="checkbox"] {
    display: block;
    width: 13px;
    height: 13px;
    margin: 0;
    padding: 0;
    margin-top: 3px;
    float: left;
  }
  .zf-oneColumns .zf-tempContDiv span input[type="radio"] {
    display: block;
    width: 13px;
    height: 13px;
    margin-top: 4px;
    padding: 0;
    float: left;
  }
  .zf-oneColumns .zf-tempContDiv span label {
    line-height: 19px;
    display: block;
    margin: 0 0 0 20px;
    padding: 0;
    font-size: 13px;
  }
  .zf-twoColumns .zf-tempContDiv span {
    margin: 0 5px 13px 0;
    width: 48%;
    float: left;
    display: block;
  }
  .zf-twoColumns .zf-tempContDiv span input[type="checkbox"] {
    display: block;
    width: 13px;
    height: 13px;
    margin: 0;
    padding: 0;
    margin-top: 3px;
    float: left;
  }
  .zf-twoColumns .zf-tempContDiv span input[type="radio"] {
    display: block;
    width: 13px;
    height: 13px;
    margin-top: 4px;
    padding: 0;
    float: left;
  }
  .zf-twoColumns .zf-tempContDiv span label {
    line-height: 21px;
    display: block;
    margin: 0 0 0 20px;
    padding: 0 0 5px;
  }
  .zf-threeColumns .zf-tempContDiv span {
    margin: 0 5px 13px 0;
    width: 30%;
    float: left;
  }
  .zf-threeColumns .zf-tempContDiv span input[type="checkbox"] {
    display: block;
    width: 13px;
    height: 13px;
    padding: 0;
    margin-top: 3px;
    float: left;
  }
  .zf-threeColumns .zf-tempContDiv span input[type="radio"] {
    display: block;
    width: 13px;
    height: 13px;
    margin-top: 4px;
    padding: 0;
    float: left;
  }
  .zf-threeColumns .zf-tempContDiv span label {
    line-height: 21px;
    display: block;
    margin: 0 0 0 20px;
    padding: 0 0 5px;
  }

  .zf-mSelect select {
    font-size: 13px;
  }

  .zf-fmFooter {
    margin: 0;
    padding: 25px;
    text-align: center;
  }

  .zf-fmFooter .zf-submitColor {
    font-size: 14px;
    padding: 4px 10px;
  }

  .zf-submitColor {
    color: #fff;
    border: 1px solid;
    border-color: #2f9eec #1988d6 #1988d6;
    background: #2596e6;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#2f9eec),
      to(#1988d6)
    );
    background: -moz-linear-gradient(top, #2f9eec, #1988d6);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2f9eec', endColorstr='#1988d6');
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }

  .zf-submitColor:hover {
    background: #1988d6;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#1988d6),
      to(#1988d6)
    );
    background: -moz-linear-gradient(top, #1988d6, #1988d6);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1988d6', endColorstr='#1988d6');
  }

  /****************Field Small/Medium/Large Starts Here****************/

  .zf-small .zf-tempContDiv input[type="text"],
  .zf-small .zf-tempContDiv textarea,
  .zf-small .zf-mSelect select,
  .zf-small .zf-tempContDiv .zf-sliderCont,
  .zf-small .zf-tempContDiv .zf-pdfTextArea {
    width: 50%;
  }
  .zf-medium .zf-tempContDiv input[type="text"],
  .zf-medium .zf-tempContDiv textarea,
  .zf-medium .zf-mSelect select,
  .zf-medium .zf-tempContDiv .zf-sliderCont,
  .zf-medium .zf-tempContDiv .zf-pdfTextArea {
    width: 75%;
  }
  .zf-large .zf-tempContDiv input[type="text"],
  .zf-large .zf-tempContDiv textarea,
  .zf-large .zf-mSelect select,
  .zf-large .zf-tempContDiv .zf-sliderCont,
  .zf-large .zf-tempContDiv .zf-pdfTextArea {
    width: 100%;
  }

  .zf-small .zf-tempContDiv .zf-form-sBox {
    width: 50%;
  }
  .zf-medium .zf-tempContDiv .zf-form-sBox {
    width: 75%;
  }
  .zf-large .zf-tempContDiv .zf-form-sBox {
    width: 100%;
  }

  .zf-name .zf-tempContDiv .zf-form-sBox {
    width: 100%;
  }

  .zf-namesmall .zf-nameWrapper {
    width: 50%;
  }
  .zf-namesmall .zf-tempContDiv span {
    width: 48%;
  }

  .zf-namesmall .zf-oneType .zf-salutationWrapper span {
    width: 63%;
  }
  .zf-namesmall .zf-oneType .zf-salutationWrapper .zf-salutation {
    width: 33%;
  }

  .zf-namesmall .zf-twoType .zf-salutationWrapper span {
    width: 34%;
    margin-left: 3%;
  }
  .zf-namesmall .zf-twoType .zf-salutationWrapper .zf-salutation {
    width: 26%;
  }

  .zf-namesmall .zf-threeType .zf-nameWrapper span {
    width: 32%;
    margin-left: 2%;
  }

  .zf-namesmall .zf-threeType .zf-salutationWrapper span {
    width: 100%;
    margin-left: 0px;
    float: none;
    margin-left: 0;
  }
  .zf-namesmall .zf-threeType .zf-salutationWrapper .zf-salutation {
    width: 50%;
  }

  .zf-namesmall .zf-tempContDiv span:first-child {
    margin-left: 0;
  }

  .zf-leftAlign .zf-namesmall .zf-threeType .zf-salutationWrapper span,
  .zf-rightAlign .zf-namesmall .zf-threeType .zf-salutationWrapper span {
    width: 100%;
    margin-left: 0px;
    float: none;
    margin-left: 0;
  }
  .zf-leftAlign
    .zf-namesmall
    .zf-threeType
    .zf-salutationWrapper
    .zf-salutation,
  .zf-rightAlign
    .zf-namesmall
    .zf-threeType
    .zf-salutationWrapper
    .zf-salutation {
    width: 50%;
  }

  .zf-namemedium .zf-nameWrapper {
    width: 75%;
  }

  .zf-namemedium .zf-tempContDiv span {
    width: 49%;
    margin-left: 2%;
  }

  .zf-namemedium .zf-oneType .zf-salutationWrapper span {
    width: 73%;
  }
  .zf-namemedium .zf-oneType .zf-salutationWrapper .zf-salutation {
    width: 25%;
  }

  .zf-namemedium .zf-twoType .zf-salutationWrapper span {
    width: 38%;
    margin-left: 2%;
  }
  .zf-namemedium .zf-twoType .zf-salutationWrapper .zf-salutation {
    width: 20%;
  }

  .zf-namemedium .zf-threeType .zf-nameWrapper span {
    width: 32%;
    margin-left: 2%;
  }

  .zf-namemedium .zf-threeType .zf-salutationWrapper span {
    width: 25%;
    margin-left: 2%;
  }

  .zf-namemedium .zf-threeType .zf-salutationWrapper .zf-salutation {
    width: 19%;
  }

  .zf-namemedium .zf-tempContDiv span:first-child {
    margin-left: 0;
  }

  .zf-namelarge .zf-tempContDiv span {
    width: 23.5%;
    margin-left: 2%;
    margin-right: 0;
    margin-bottom: 0;
  }
  .zf-namelarge .zf-twoType .zf-nameWrapper span {
    width: 49%;
    margin-left: 2%;
  }
  .zf-namelarge .zf-threeType .zf-nameWrapper span {
    width: 32%;
    margin-left: 2%;
  }

  .zf-namelarge .zf-twoType .zf-salutationWrapper span {
    width: 40%;
    margin-left: 2%;
  }
  .zf-namelarge .zf-twoType .zf-salutationWrapper .zf-salutation {
    width: 16%;
  }

  .zf-namelarge .zf-threeType .zf-salutationWrapper span {
    width: 26%;
    margin-left: 2%;
  }
  .zf-namelarge .zf-threeType .zf-salutationWrapper .zf-salutation {
    width: 16%;
  }

  .zf-namelarge .zf-oneType .zf-salutationWrapper span {
    width: 73%;
    margin-left: 2%;
  }
  .zf-namelarge .zf-oneType .zf-salutationWrapper .zf-salutation {
    width: 25%;
  }

  .zf-namelarge .zf-tempContDiv span:first-child {
    margin-left: 0 !important;
  }

  .zf-csmall .zf-tempContDiv input[type="text"] {
    width: 43%;
  }
  .zf-cmedium .zf-tempContDiv input[type="text"] {
    width: 67%;
  }
  .zf-clarge .zf-tempContDiv input[type="text"] {
    width: 91%;
  }

  .zf-nsmall .zf-tempContDiv input[type="text"] {
    width: 50%;
  }
  .zf-nmedium .zf-tempContDiv input[type="text"] {
    width: 75%;
  }
  .zf-nlarge .zf-tempContDiv input[type="text"] {
    width: 100%;
  }

  .zf-signSmall .zf-tempContDiv .zf-signContainer .zf-signArea {
    width: 49%;
  }
  .zf-signMedium .zf-tempContDiv .zf-signContainer .zf-signArea {
    width: 60%;
  }
  .zf-signLarge .zf-tempContDiv .zf-signContainer .zf-signArea {
    width: 74%;
  }

  .zf-addrsmall .zf-tempContDiv .zf-addrCont {
    width: 50%;
  }
  .zf-addrmedium .zf-tempContDiv .zf-addrCont {
    width: 75%;
  }
  .zf-addrlarge .zf-tempContDiv .zf-addrCont {
    width: 100%;
  }

  /****************Field Small/Medium/Large Ends Here****************/

  .zf-topAlign .zf-tempFrmWrapper .zf-labelName {
    padding-bottom: 8px;
    display: block;
  }

  .zf-topAlign .zf-threeColumns .zf-labelName,
  .zf-topAlign .zf-twoColumns .zf-labelName,
  .zf-topAlign .zf-oneColumns .zf-labelName,
  .zf-topAlign .zf-sideBySide .zf-labelName {
    padding-bottom: 8px;
  }

  .zf-leftAlign {
    display: block;
  }
  .zf-leftAlign .zf-tempFrmWrapper .zf-labelName {
    float: left;
    width: 30%;
    line-height: 20px;
    margin-right: 15px;
  }
  .zf-leftAlign .zf-tempFrmWrapper .zf-tempContDiv {
    margin-left: 35%;
  }

  .zf-leftAlign .zf-slider .zf-tempContDiv {
    margin-top: 6px;
  }

  .zf-leftAlign .zf-decesion .zf-tempContDiv,
  .zf-rightAlign .zf-decesion .zf-tempContDiv {
    margin-left: 0 !important;
  }

  .zf-rightAlign {
    display: block;
  }
  .zf-rightAlign .zf-tempFrmWrapper .zf-labelName {
    float: left;
    width: 30%;
    line-height: 20px;
    text-align: right;
    margin-right: 15px;
  }
  .zf-rightAlign .zf-tempFrmWrapper .zf-tempContDiv {
    margin-left: 35%;
  }
  .zf-matrixTable {
    font-size: 13px;
    overflow-x: scroll;
    padding-bottom: 15px !important;
  }
  .zf-matrixTable table th,
  .zf-matrixTable table td {
    padding: 10px;
  }
  .zf-matrixTable thead th,
  .zf-matrixTable table td {
    text-align: center;
  }
  .zf-matrixTable table td input[type="radio"],
  .zf-matrixTable table td input[type="checkbox"] {
    display: inline-block;
  }
  .zf-matrixTable tbody th {
    font-weight: normal;
    font-size: 13px;
    text-align: left;
  }
  .zf-matrixTable thead th {
    font-weight: 600;
    font-size: 13px;
  }

  /****************Form Top Align Starts Here****************/

  .zf-termsContainer {
    margin: 0;
    padding: 0;
  }
  .zf-termsContainer .zf-termsMsg {
    border: 1px solid #e1e1e1;
    max-height: 250px;
    min-height: 70px;
    overflow-y: scroll;
    padding: 10px;
    margin-bottom: 6px;
  }
  .zf-termsContainer .zf-termScrollRemove {
    border: 1px solid #e1e1e1;
    padding: 10px;
    margin-bottom: 6px;
  }
  .zf-termsAccept {
    margin-top: 2px !important;
  }
  .zf-termsAccept input[type="checkbox"] {
    margin-top: 2px !important;
    float: left;
  }
  .zf-termsAccept label {
    margin-left: 20px;
    font-size: 13px;
    float: none;
    display: block;
  }

  .zf-termsWrapper .zf-tempContDiv {
    margin-left: 0 !important;
  }
  .zf-termsWrapper .zf-labelName {
    width: 100% !important;
    text-align: left !important;
    padding-bottom: 8px !important;
  }

  .zf-medium .zf-phwrapper {
    width: 75%;
  }
  .zf-phwrapper.zf-phNumber span {
    width: 100% !important;
  }
  .zf-phwrapper span:first-child {
    margin-left: 0;
    width: 22%;
  }
  .zf-phwrapper label {
    display: block;
    color: #888888;
    font-size: 11px;
    margin-top: 2px;
  }
  .zf-medium .zf-phonefld input[type="text"],
  .zf-small .zf-phonefld input[type="text"] {
    width: 100%;
  }
  .zf-small .zf-phwrapper {
    width: 50%;
  }
  .zf-tempFrmWrapper.zf-phone span {
    width: auto;
    margin: inherit;
  }
  .zf-phwrapper span {
    margin-bottom: 10px;
    float: left;
    width: 76%;
    margin-left: 2%;
  }
  .zf-descFld a {
    text-decoration: underline;
  }
  .zf-descFld em {
    font-style: italic;
  }
  .zf-descFld b {
    font-weight: bold;
  }
  .zf-descFld i {
    font-style: italic;
  }
  .zf-descFld u {
    text-decoration: underline;
  }
  .zf-descFld ul {
    margin: auto;
  }
  .zf-descFld ul {
    list-style: disc;
  }
  .zf-descFld ol {
    list-style: decimal;
  }
  .zf-descFld ul,
  .zf-descFld ol {
    margin: 10px 0;
    padding-left: 20px;
  }

  .zf-descFld ol.code {
    list-style-position: outside;
    list-style-type: decimal;
    padding: 0 30px;
  }

  .zf-descFld ol.code li {
    background-color: #f5f5f5;
    border-left: 2px solid #cccccc;
    margin: 1px 0;
    padding: 2px;
  }

  .zf-descFld blockquote.zquote {
    border-left: 3px solid #efefef;
    padding-left: 35px;
  }
  .zf-descFld blockquote.zquote span.txt {
    -moz-user-focus: ignore;
    -moz-user-input: disabled;
    -moz-user-select: none;
    color: #058bc2;
    float: left;
    font: bold 50px Arial, Helvetica, sans-serif;
    margin: -10px 0 0 -30px;
  }
  .zf-descFld blockquote.block_quote {
    border-left: 3px solid #efefef;
    font: 13px/20px georgia, Arial, verdana, Helvetica, sans-serif;
    margin: 15px 3px 15px 15px;
    padding: 10px 10px 10px 40px;
  }
  .zf-descFld body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    margin: 8px;
  }
  .note .noteCont {
    overflow: hidden;
  }
  .note .zf-descFld {
    overflow: hidden;
    font-size: 13px;
  }
`;
