import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  // --FONT-- //

  --font-size-14    : 14px;
  --font-size-15    : 15px;
  --font-size-18    : 18px;
  --font-size-24    : 24px;
  --font-size-32    : 32px;
  --font-size-48    : 48px;
  --font-size-64    : 64px;
  --font-weight-500 : 500;
  --font-weight-700 : 700;

  // --COLOR-- //

  --black : #292929;
  --grey-1: #eeeeee;
  --grey-2: #9fa0a1;
  --grey-3: #f5f5f5;
  --grey-4: #9f9f9f;
  --pink  : #ff757c;
  --white : #ffffff;

  // --SPACING-- //

  --spacing-xxs : 4px;
  --spacing-xs  : 8px;
  --spacing-sm  : 12px;
  --spacing-md  : 20px;
  --spacing-lg  : 32px;
  --spacing-xl  : 52px;

  --layout-xs   : 8px;
  --layout-sm   : 16px;
  --layout-md   : 24px;
  --layout-lg   : 40px;
  --layout-xl   : 64px;
  --layout-xxl  : 104px;

}

a {
  text-decoration: none;
  color: inherit;
}

a:focus {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

a:visited {
  text-decoration: none;
  color: inherit;
}

body {
  background-color: var(--grey-1);
}

button {
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  color: inherit;
  padding: 0;
  margin: 0;
  font-size: auto;
}

button:focus {
  outline: none !important;
}

///////////////
// --FONT-- //
/////////////

.text-small {
  font-size: var(--font-size-14);
}

.text-medium {
  font-size: var(--font-size-15);
  font-weight: var(--font-weight-500)
}

.bold {
  font-weight: var(--font-weight-700)
}

////////////////
// --COLOR-- //
//////////////

.black {
  color: var(--black)
}

.tab-grey {
  color: var(--grey-2)
}

/////////////////
// --MARGIN-- //
///////////////

.margin-0 {
  margin: 0px !important;
}
.margin-xs {
  margin: var(--layout-xs);
}
.margin-sm {
  margin: var(--layout-sm);
}
.margin-md {
  margin: var(--layout-md);
}
.margin-lg {
  margin: var(--layout-lg);
}
.margin-xl {
  margin: var(--layout-xl);
}
.margin-xxl {
  margin: var(--layout-xxl);
}

///////////////
// MARGIN TOP
//////////////

.margin-top-0 {
  margin-top: 0 !important;
}
.margin-top-xs {
  margin-top: var(--layout-xs);
}
.margin-top-sm {
  margin-top: var(--layout-sm);
}
.margin-top-md {
  margin-top: var(--layout-md);
}

.margin-top-lg {
  margin-top: var(--layout-lg);
}

.margin-top-xl {
  margin-top: var(--layout-xl);
}

.margin-top-xxl {
  margin-top: var(--layout-xxl);
}

//////////////////
// MARGIN BOTTOM
/////////////////

.margin-bottom-0 {
  margin-bottom: 0 !important;
}
.margin-bottom-xs {
  margin-bottom: var(--layout-xs);
}
.margin-bottom-sm {
  margin-bottom: var(--layout-sm);
}
.margin-bottom-md {
  margin-bottom: var(--layout-md);
}
.margin-bottom-lg {
  margin-bottom: var(--layout-lg);
}
.margin-bottom-xl {
  margin-bottom: var(--layout-xl);
}
.margin-bottom-xxl {
  margin-bottom: var(--layout-xxl);
}

//////////////////
// MARGIN LEFT
/////////////////

.margin-left-0 {
  margin-left: 0 !important;
}
.margin-left-xs {
  margin-left: var(--layout-xs);
}
.margin-left-sm {
  margin-left: var(--layout-sm);
}
.margin-left-md {
  margin-left: var(--layout-md);
}
.margin-left-lg {
  margin-left: var(--layout-lg);
}
.margin-left-xl {
  margin-left: var(--layout-xl);
}
.margin-left-xxl {
  margin-left: var(--layout-xxl);
}

//////////////////
// MARGIN RIGHT
/////////////////

.margin-right-0 {
  margin-right: 0 !important;
}
.margin-right-xs {
  margin-right: var(--layout-xs);
}
.margin-right-sm {
  margin-right: var(--layout-sm);
}
.margin-right-md {
  margin-right: var(--layout-md);
}
.margin-right-lg {
  margin-right: var(--layout-lg);
}
.margin-right-xl {
  margin-right: var(--layout-xl);
}
.margin-right-xxl {
  margin-right: var(--layout-xxl);
}

//////////////////
// --SPACING-- //
////////////////

.padding-0 {
  padding: 0px !important;
}
.padding-xxs {
  padding: var(--spacing-xxs);
}
.padding-xs {
  padding: var(--spacing-xs);
}
.padding-sm {
  padding: var(--spacing-sm);
}
.padding-md {
  padding: var(--spacing-md);
}
.padding-lg {
  padding: var(--spacing-lg);
}
.padding-xl {
  padding: var(--spacing-xl);
}

//////////////////
// PADDING TOP
/////////////////

.padding-top-0 {
  padding-top: 0 !important;
}
.padding-top-xxs {
  padding-top: var(--spacing-xxs);
}
.padding-top-xs {
  padding-top: var(--spacing-xs);
}
.padding-top-sm {
  padding-top: var(--spacing-sm);
}
.padding-top-md {
  padding-top: var(--spacing-md);
}
.padding-top-lg {
  padding-top: var(--spacing-lg);
}
.padding-top-xl {
  padding-top: var(--spacing-xl);
}

//////////////////
// PADDING BOTTOM
/////////////////

.padding-bottom-0 {
  padding-bottom: 0 !important;
}
.padding-bottom-xxs {
  padding-bottom: var(--spacing-xxs);
}
.padding-bottom-xs {
  padding-bottom: var(--spacing-xs);
}
.padding-bottom-sm {
  padding-bottom: var(--spacing-sm);
}
.padding-bottom-md {
  padding-bottom: var(--spacing-md);
}
.padding-bottom-lg {
  padding-bottom: var(--spacing-lg);
}
.padding-bottom-xl {
  padding-bottom: var(--spacing-xl);
}

//////////////////
// PADDING LEFT
/////////////////

.padding-left-0 {
  padding-left: 0 !important;
}
.padding-left-xxs {
  padding-left: var(--spacing-xxs);
}
.padding-left-xs {
  padding-left: var(--spacing-xs);
}
.padding-left-sm {
  padding-left: var(--spacing-sm);
}
.padding-left-md {
  padding-left: var(--spacing-md);
}
.padding-left-lg {
  padding-left: var(--spacing-lg);
}
.padding-left-xl {
  padding-left: var(--spacing-xl);
}

//////////////////
// PADDING RIGHT
/////////////////

.padding-right-0 {
  padding-right: 0 !important;
}
.padding-right-xxs {
  padding-right: var(--spacing-xxs);
}
.padding-right-xs {
  padding-right: var(--spacing-xs);
}
.padding-right-sm {
  padding-right: var(--spacing-sm);
}
.padding-right-md {
  padding-right: var(--spacing-md);
}
.padding-right-lg {
  padding-right: var(--spacing-lg);
}
.padding-right-xl {
  padding-right: var(--spacing-xl);
}

.categories-tab {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  height: 48px;
  align-items: center;
  background: var(--white);
  z-index: 100;
}

.content-body {
  min-width: 140px;
  max-width: 768px;
  margin: 0 auto;
}

.header-bar {
  display: flex;
  justify-content: space-between;
}

.header-content {
  padding: var(--spacing-xxs);
  background: var(--white);
}

.login-btn {
  display: flex;
  align-items: center;
}

.main {
  width: 100%;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: 0px;
  margin-right: 0px;
}

// .swiper-container {
//   display: flex;
//   width: calc(100% - 48px);
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   align-items: center;
// }

// .swiper-container {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   background: #fff;

//   /* Center slide text vertically */
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   align-items: center;
// }

.tab-swiper {
  padding-left: var(--spacing-xxs);
  margin: 0;
  overflow: hidden;
  width: calc(100% - 48px);
}

.tab-swiper .swiper-wrapper {
  display: flex;
}

.tab-swiper .selected {
  color: var(--black);
  border-bottom: 2px solid var(--black);
  font-weight: var(--font-weight-700)
}

.tab-item {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: auto;
  // padding: 0 var(--spacing-sm);
  heigth: 48px;
  cursor: pointer;
}

.titlebar-btn {
  display: flex;
  padding: 8px;
  align-items: center;
  height: 40px;
}

.width-auto {
  width: auto !important;
}
`

export default GlobalStyle;