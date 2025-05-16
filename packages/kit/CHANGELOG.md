# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.12.1-alpha.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.12.0...v2.12.1-alpha.0) (2025-05-16)

### Bug Fixes

- update typo in variant size variable ([#723](https://github.com/washingtonpost/wpds-ui-kit/issues/723)) ([8cd80c7](https://github.com/washingtonpost/wpds-ui-kit/commit/8cd80c7264a42b84d7fa329c06b498ca7b377ad5))

### Features

- add pagination component [CFE-452] ([1ddc620](https://github.com/washingtonpost/wpds-ui-kit/commit/1ddc620487a76656e07a67cef91bc3280afe33c8))
- adding context [WE-84] ([307563f](https://github.com/washingtonpost/wpds-ui-kit/commit/307563fdd66501b0ce6ec3054a0e77bb6e70ec62))
- adding key and fixing prop ([e9f8d27](https://github.com/washingtonpost/wpds-ui-kit/commit/e9f8d2743a2d78a0c7ca350ba7efac1284a21c04))
- adding showitems for itemrangeindicator ([8c12ae3](https://github.com/washingtonpost/wpds-ui-kit/commit/8c12ae3bb90192760aaabbb157d25c86e4b852b3))
- adding transition to minimize flickering between button changes [WE-84] ([c6df9a9](https://github.com/washingtonpost/wpds-ui-kit/commit/c6df9a9cca889b721a71b00dbb616f7384e2fc76))
- addressing ts errors in buttons [WE-84] ([4b4e994](https://github.com/washingtonpost/wpds-ui-kit/commit/4b4e99408e47ebcd2224dc90ccc5136bf0ecd423))
- compact at small and endless pagination ([85ee889](https://github.com/washingtonpost/wpds-ui-kit/commit/85ee889ba4b55b14198d0d0846787e4ba1453629))
- fix button transitions with theme transitions in out token [WE-84] ([81f038c](https://github.com/washingtonpost/wpds-ui-kit/commit/81f038cded15d14b84ecb9008901722eeecd4724))
- fixing css ([daa7e85](https://github.com/washingtonpost/wpds-ui-kit/commit/daa7e8565eed8c75bbee2e2d39bb12e2dbe1088e))
- fixing page overflow buttons conditions [WE-84] ([1e5c638](https://github.com/washingtonpost/wpds-ui-kit/commit/1e5c638cf1b20f0ee69f374a634e31541e75f162))
- fixing prev and next button widths [WE-84] ([0ccad42](https://github.com/washingtonpost/wpds-ui-kit/commit/0ccad4236d7714d007226a849052201b7517094e))
- fixing tests [WE-84] ([c856b7b](https://github.com/washingtonpost/wpds-ui-kit/commit/c856b7bd1f96b1fb2c94601a2f50760f9675177d))
- minimize background color from selected state on previously selected buttons [WE-84] ([93a8ff7](https://github.com/washingtonpost/wpds-ui-kit/commit/93a8ff753c89fc46e0b6587897891896c945c99c))
- no renderer ([a8e5bae](https://github.com/washingtonpost/wpds-ui-kit/commit/a8e5bae3127ba5b51c806493a36c4fbd46b55433))
- pagination [WE-84] ([453aed9](https://github.com/washingtonpost/wpds-ui-kit/commit/453aed9b38e8a156637a9da637f25c0325fbc07c))
- resolving slug possibly being undefined [WE-84] ([36f2ed6](https://github.com/washingtonpost/wpds-ui-kit/commit/36f2ed6a04311a0a7f12b071b4cd0708454d02f6))
- surface as background color on pagination light theme storybook docs [WE-84] ([5792613](https://github.com/washingtonpost/wpds-ui-kit/commit/57926137c41db99d5623712822a0055ad12dbc5c))
- switch to pnpm ([#724](https://github.com/washingtonpost/wpds-ui-kit/issues/724)) ([3d51235](https://github.com/washingtonpost/wpds-ui-kit/commit/3d51235fb70be5ababccdc235c3d339876e0e6af))
- temporary ignores to see if build site looks good [WE-84] ([f42d5c8](https://github.com/washingtonpost/wpds-ui-kit/commit/f42d5c8285a22d11c69938e2a9a0f1fe95151996))
- updating storybook, build pages, tests [WE-84] ([a612565](https://github.com/washingtonpost/wpds-ui-kit/commit/a612565620998be4f5e10a07dd80be98d2e0ec7b))

# [2.12.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.11.1...v2.12.0) (2025-04-02)

### Bug Fixes

- prettify ([#713](https://github.com/washingtonpost/wpds-ui-kit/issues/713)) ([2340650](https://github.com/washingtonpost/wpds-ui-kit/commit/2340650b07a46e3c09020cb598001050e72028ef))
- typescript issues ([4332f42](https://github.com/washingtonpost/wpds-ui-kit/commit/4332f429cb8d8f0c78d6d0164df082a14a6c130c))

## [2.11.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.11.0...v2.11.1) (2025-03-12)

### Bug Fixes

- touch scrolling on mobile web not working ([#700](https://github.com/washingtonpost/wpds-ui-kit/issues/700)) ([23cc9fd](https://github.com/washingtonpost/wpds-ui-kit/commit/23cc9fda4f6e6c9a935040688d6db230ad10ad66))

# [2.11.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.10.1...v2.11.0) (2025-01-23)

### Features

- new alpha-invert tokens [CFE-275] ([#687](https://github.com/washingtonpost/wpds-ui-kit/issues/687)) ([3a91a23](https://github.com/washingtonpost/wpds-ui-kit/commit/3a91a239c278f8494862d8088cc773e7452bda79))

## [2.10.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.10.0...v2.10.1) (2024-12-20)

### Bug Fixes

- allow for reselecting the last selection of InputSearch if cleared. Trigger InputSearch onSelect callback when selection is cleared. ([#682](https://github.com/washingtonpost/wpds-ui-kit/issues/682)) ([ae793dd](https://github.com/washingtonpost/wpds-ui-kit/commit/ae793ddf5b9af0f68606e2d777833b90fd49690a))

# [2.10.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.9.0...v2.10.0) (2024-12-11)

### Bug Fixes

- allow controlled InputSearch to be cleared by passing empty string ([f874afd](https://github.com/washingtonpost/wpds-ui-kit/commit/f874afd58dba13d242e2d38330b4d7ffe6d0ef5a))
- allow props on InputSearch ListItem to pass through for custom styling ([07b7bdc](https://github.com/washingtonpost/wpds-ui-kit/commit/07b7bdc23eb7e05d1e80465bfba1fc2189d6f70b))
- honor disabled prop in InputSearch list item ([62f88ec](https://github.com/washingtonpost/wpds-ui-kit/commit/62f88ecfd087f02e5373b89c36a59a367c9536bc))
- safely escape strings passed to RegExp in InputSearch ([66fc814](https://github.com/washingtonpost/wpds-ui-kit/commit/66fc8143dc4c43aa555b718b507c50f017b90b44))

### Features

- update wpds-assets ([#676](https://github.com/washingtonpost/wpds-ui-kit/issues/676)) ([0cb0ae6](https://github.com/washingtonpost/wpds-ui-kit/commit/0cb0ae65bcc9faac805f5ec295a6fe3548636278))

# [2.9.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.8.1...v2.9.0) (2024-12-09)

### Features

- remove unicoderange from our font faces ([#675](https://github.com/washingtonpost/wpds-ui-kit/issues/675)) ([74e8ffe](https://github.com/washingtonpost/wpds-ui-kit/commit/74e8ffeb847fd04e5faca584f21110f99f5945ae))

## [2.8.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.8.0...v2.8.1) (2024-10-24)

### Bug Fixes

- make lockScroll property work ([#670](https://github.com/washingtonpost/wpds-ui-kit/issues/670)) ([a1d41fa](https://github.com/washingtonpost/wpds-ui-kit/commit/a1d41fa3293d996b5dd2451192aa8bbeea5aa3dc))

# [2.8.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.7.0...v2.8.0) (2024-10-10)

### Features

- Adding new spark color tokens and opinions theme ([#665](https://github.com/washingtonpost/wpds-ui-kit/issues/665)) ([148cb4d](https://github.com/washingtonpost/wpds-ui-kit/commit/148cb4dd89e1212be5f166f11810f95e5d71ad51))

# [2.7.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.6.0...v2.7.0) (2024-09-12)

### Bug Fixes

- prevent frozen InputSearch after text editing ([#658](https://github.com/washingtonpost/wpds-ui-kit/issues/658)) ([b3efa3e](https://github.com/washingtonpost/wpds-ui-kit/commit/b3efa3e6e9b67d230104ac1d4031df076c8eea12))

### Features

- add light theme to override dark theme ([1a872ca](https://github.com/washingtonpost/wpds-ui-kit/commit/1a872ca70284c0597e51b1069623d461fd10331f))

# [2.6.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.5.0...v2.6.0) (2024-08-06)

### Bug Fixes

- allow controlled InputSearch to update onChange handler with temp text value ([#654](https://github.com/washingtonpost/wpds-ui-kit/issues/654)) ([3884839](https://github.com/washingtonpost/wpds-ui-kit/commit/3884839890d5582f61ee8f56d85ea0b570aa8f23))

### Features

- update wam ([#652](https://github.com/washingtonpost/wpds-ui-kit/issues/652)) ([8f1f97b](https://github.com/washingtonpost/wpds-ui-kit/commit/8f1f97b1f1de484b6418187032da892fb0edd947))

# [2.5.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.4.0...v2.5.0) (2024-07-22)

### Bug Fixes

- **kit:** replace all instances of legacy faint, subtle tokens with outline token ([133153d](https://github.com/washingtonpost/wpds-ui-kit/commit/133153dcfb1906b7ceb2c7998a08e61749be4eaa))
- remove reach dependency in InputSearch for React 18 compatibility ([#645](https://github.com/washingtonpost/wpds-ui-kit/issues/645)) ([7634780](https://github.com/washingtonpost/wpds-ui-kit/commit/7634780f253192ee630609216e32c59db146bc03))

### Features

- update wam ([#651](https://github.com/washingtonpost/wpds-ui-kit/issues/651)) ([938399f](https://github.com/washingtonpost/wpds-ui-kit/commit/938399f8dd987d1056c4b02bc143dbeb917acb06))

# [2.4.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.3.2...v2.4.0) (2024-06-28)

### Features

- switch to font display swap ([#641](https://github.com/washingtonpost/wpds-ui-kit/issues/641)) ([bb1f5df](https://github.com/washingtonpost/wpds-ui-kit/commit/bb1f5dfda779d7b29127be0d51e11607a63942a8))

## [2.3.2](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.3.1...v2.3.2) (2024-06-25)

### Bug Fixes

- remove extra css color for data-active style in nav menu link ([#646](https://github.com/washingtonpost/wpds-ui-kit/issues/646)) ([7d150f9](https://github.com/washingtonpost/wpds-ui-kit/commit/7d150f9dbd03d3af6fee0ec25e304b8aad76dbb0))

## [2.3.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.3.0...v2.3.1) (2024-06-12)

### Bug Fixes

- added compiler options to react-docgen-typescript for doc site api tables ([#635](https://github.com/washingtonpost/wpds-ui-kit/issues/635)) ([5cd9ce5](https://github.com/washingtonpost/wpds-ui-kit/commit/5cd9ce55dfb5f752b387d7c6caa2abd70fae4487))
- display Select API docs ([#637](https://github.com/washingtonpost/wpds-ui-kit/issues/637)) ([c164aa1](https://github.com/washingtonpost/wpds-ui-kit/commit/c164aa1833756b7f18bf6b3749e23223d46ff4fb))
- improve INP for drawer content opening and closing ([#642](https://github.com/washingtonpost/wpds-ui-kit/issues/642)) ([8f6de93](https://github.com/washingtonpost/wpds-ui-kit/commit/8f6de93ac8095f317f810f7a0160d17dcb443d54))

# [2.3.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.2.0...v2.3.0) (2024-05-14)

### Features

- adding vertical dots [STRY-301] ([#626](https://github.com/washingtonpost/wpds-ui-kit/issues/626)) ([438a90b](https://github.com/washingtonpost/wpds-ui-kit/commit/438a90b7615d63415233ec37b0302bbdb7f36e10))

# [2.2.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.1.2...v2.2.0) (2024-05-08)

### Features

- add tokens to export config ([#627](https://github.com/washingtonpost/wpds-ui-kit/issues/627)) ([2a68e98](https://github.com/washingtonpost/wpds-ui-kit/commit/2a68e983be8d0ecd8fedb36079eda4f9d84d938d))

## [2.1.2](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.1.1...v2.1.2) (2024-05-07)

### Bug Fixes

- use regular build script ([61919a8](https://github.com/washingtonpost/wpds-ui-kit/commit/61919a8084aac465d56e0da816ff51ccf1d69fcd))

## [2.1.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.1.0...v2.1.1) (2024-05-07)

### Bug Fixes

- fix build issue with tokens & front-end test apps ([#625](https://github.com/washingtonpost/wpds-ui-kit/issues/625)) ([e8e622b](https://github.com/washingtonpost/wpds-ui-kit/commit/e8e622b33956e2c0d370bc3201c02667adb54f4e))

# [2.1.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0...v2.1.0) (2024-05-06)

### Features

- use treeshaking from tsup ([#624](https://github.com/washingtonpost/wpds-ui-kit/issues/624)) ([f3da010](https://github.com/washingtonpost/wpds-ui-kit/commit/f3da01063f4f326d5045e48c63e4ae9ea8e39aa1))

# [2.0.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v1.24.0...v2.0.0) (2024-04-24)

### Features

- v2.0.0 ([#542](https://github.com/washingtonpost/wpds-ui-kit/issues/542)) ([d429cfa](https://github.com/washingtonpost/wpds-ui-kit/commit/d429cfabb7489a2548ffad5c3d945145824d4a22)), closes [#544](https://github.com/washingtonpost/wpds-ui-kit/issues/544) [#552](https://github.com/washingtonpost/wpds-ui-kit/issues/552) [#555](https://github.com/washingtonpost/wpds-ui-kit/issues/555) [#560](https://github.com/washingtonpost/wpds-ui-kit/issues/560) [#562](https://github.com/washingtonpost/wpds-ui-kit/issues/562) [#564](https://github.com/washingtonpost/wpds-ui-kit/issues/564) [#565](https://github.com/washingtonpost/wpds-ui-kit/issues/565) [#574](https://github.com/washingtonpost/wpds-ui-kit/issues/574) [#570](https://github.com/washingtonpost/wpds-ui-kit/issues/570) [#579](https://github.com/washingtonpost/wpds-ui-kit/issues/579) [#578](https://github.com/washingtonpost/wpds-ui-kit/issues/578) [#580](https://github.com/washingtonpost/wpds-ui-kit/issues/580) [#579](https://github.com/washingtonpost/wpds-ui-kit/issues/579)

# [2.0.0-alpha.12](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2024-04-10)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit

# [2.0.0-alpha.11](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2024-04-09)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit

# [2.0.0-alpha.10](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.7...v2.0.0-alpha.10) (2024-04-09)

### Bug Fixes

- add tokens specifier to exports ([#616](https://github.com/washingtonpost/wpds-ui-kit/issues/616)) ([261c231](https://github.com/washingtonpost/wpds-ui-kit/commit/261c2317d9f34c20da55afaa8d9012d45677ca52))
- new colors are not showing up ([#614](https://github.com/washingtonpost/wpds-ui-kit/issues/614)) ([9e9b975](https://github.com/washingtonpost/wpds-ui-kit/commit/9e9b9755f70bcd70ebde30501515f31269efaf7d))

# [2.0.0-alpha.9](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.7...v2.0.0-alpha.9) (2024-04-09)

### Bug Fixes

- add tokens specifier to exports ([#616](https://github.com/washingtonpost/wpds-ui-kit/issues/616)) ([261c231](https://github.com/washingtonpost/wpds-ui-kit/commit/261c2317d9f34c20da55afaa8d9012d45677ca52))
- new colors are not showing up ([#614](https://github.com/washingtonpost/wpds-ui-kit/issues/614)) ([9e9b975](https://github.com/washingtonpost/wpds-ui-kit/commit/9e9b9755f70bcd70ebde30501515f31269efaf7d))

# [2.0.0-alpha.8](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2024-04-04)

### Bug Fixes

- new colors are not showing up ([#614](https://github.com/washingtonpost/wpds-ui-kit/issues/614)) ([9e9b975](https://github.com/washingtonpost/wpds-ui-kit/commit/9e9b9755f70bcd70ebde30501515f31269efaf7d))

# [2.0.0-alpha.7](https://github.com/washingtonpost/wpds-ui-kit/compare/v1.22.6...v2.0.0-alpha.7) (2024-04-02)

### Bug Fixes

- add nanoid back ([#607](https://github.com/washingtonpost/wpds-ui-kit/issues/607)) ([d862816](https://github.com/washingtonpost/wpds-ui-kit/commit/d862816e85c3f667b1bd5be1f253b7920261f01b))
- make input helper and error block level elements to preserve formatting ([20a9455](https://github.com/washingtonpost/wpds-ui-kit/commit/20a9455cd8a72f1c9c7521e5ced97f09e8b59604))
- transform Select arrow on open ([#597](https://github.com/washingtonpost/wpds-ui-kit/issues/597)) ([b0e77be](https://github.com/washingtonpost/wpds-ui-kit/commit/b0e77be13ee0e5989d81c976e2b5eb9f5a41a060))

# [2.0.0-alpha.2](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-03-14)

# [2.0.0-alpha.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2024-03-14)

# [2.0.0-alpha.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.1.0-experimental.0...v2.0.0-alpha.0) (2024-03-14)

# [2.1.0-experimental.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v1.22.0...v2.1.0-experimental.0) (2024-03-13)

### Bug Fixes

- merging main and resolving conflicts ([#585](https://github.com/washingtonpost/wpds-ui-kit/issues/585)) ([253effe](https://github.com/washingtonpost/wpds-ui-kit/commit/253effebcc310c6ceee9efbed2e346d7b3132691))

### Features

- card ([#564](https://github.com/washingtonpost/wpds-ui-kit/issues/564)) ([ce0b9db](https://github.com/washingtonpost/wpds-ui-kit/commit/ce0b9db6985f44d848b0bf38c259f04107f03344))
- move Button, Icon, theme, and VisuallyHidden to v2 package ([#562](https://github.com/washingtonpost/wpds-ui-kit/issues/562)) ([be3524d](https://github.com/washingtonpost/wpds-ui-kit/commit/be3524d388e177023b9c476a68020a478a893f50))
- update Accordion to React 18 ([#565](https://github.com/washingtonpost/wpds-ui-kit/issues/565)) ([672e239](https://github.com/washingtonpost/wpds-ui-kit/commit/672e23918d9989de9d1a8702d3880b3f4f0ac38f))
- v2 mass components upgrade/migration ([#578](https://github.com/washingtonpost/wpds-ui-kit/issues/578)) ([5e0394b](https://github.com/washingtonpost/wpds-ui-kit/commit/5e0394b4e6747bfd9fee1dc0bcd82d1dcb6cd9b6)), closes [#580](https://github.com/washingtonpost/wpds-ui-kit/issues/580) [#579](https://github.com/washingtonpost/wpds-ui-kit/issues/579)

# [2.0.0-alpha.6](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2024-03-15)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit

# [2.0.0-alpha.5](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2024-03-15)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit

# [2.0.0-alpha.4](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2024-03-15)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit

# [2.0.0-alpha.3](https://github.com/washingtonpost/wpds-ui-kit/compare/v1.22.6...v2.0.0-alpha.3) (2024-03-14)

# [2.0.0-alpha.2](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-03-14)

# [2.0.0-alpha.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2024-03-14)

# [2.0.0-alpha.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.1.0-experimental.1...v2.0.0-alpha.0) (2024-03-14)

# [2.1.0-experimental.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.1.0-experimental.0...v2.1.0-experimental.1) (2024-03-13)

# [2.1.0-experimental.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v1.22.0...v2.1.0-experimental.0) (2024-03-13)

### Bug Fixes

- merging main and resolving conflicts ([#585](https://github.com/washingtonpost/wpds-ui-kit/issues/585)) ([253effe](https://github.com/washingtonpost/wpds-ui-kit/commit/253effebcc310c6ceee9efbed2e346d7b3132691))

### Features

- card ([#564](https://github.com/washingtonpost/wpds-ui-kit/issues/564)) ([ce0b9db](https://github.com/washingtonpost/wpds-ui-kit/commit/ce0b9db6985f44d848b0bf38c259f04107f03344))
- move Button, Icon, theme, and VisuallyHidden to v2 package ([#562](https://github.com/washingtonpost/wpds-ui-kit/issues/562)) ([be3524d](https://github.com/washingtonpost/wpds-ui-kit/commit/be3524d388e177023b9c476a68020a478a893f50))
- update Accordion to React 18 ([#565](https://github.com/washingtonpost/wpds-ui-kit/issues/565)) ([672e239](https://github.com/washingtonpost/wpds-ui-kit/commit/672e23918d9989de9d1a8702d3880b3f4f0ac38f))
- v2 mass components upgrade/migration ([#578](https://github.com/washingtonpost/wpds-ui-kit/issues/578)) ([5e0394b](https://github.com/washingtonpost/wpds-ui-kit/commit/5e0394b4e6747bfd9fee1dc0bcd82d1dcb6cd9b6)), closes [#580](https://github.com/washingtonpost/wpds-ui-kit/issues/580) [#579](https://github.com/washingtonpost/wpds-ui-kit/issues/579)

# [2.0.0-alpha.2](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-03-14)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit

# [2.0.0-alpha.1](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2024-03-14)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit

# [2.0.0-alpha.0](https://github.com/washingtonpost/wpds-ui-kit/compare/v2.1.0-experimental.0...v2.0.0-alpha.0) (2024-03-14)

**Note:** Version bump only for package @washingtonpost/wpds-ui-kit
