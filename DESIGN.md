---
name: Kopi Jalan
description: A photographic street-coffee poster system for an Indonesian mobile coffee concept.
colors:
  accent: "#a93621"
  ink: "#2a1b16"
  ink-soft: "#755649"
  canvas: "#f5e8cf"
  paper: "#fff8e9"
  sun: "#f5cb4b"
  hairline: "#bcae94"
typography:
  display:
    fontFamily: "Baloo Kopi, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(78px, 7.4vw, 110px)"
    fontWeight: 800
    lineHeight: 0.84
    letterSpacing: "-0.034em"
  headline:
    fontFamily: "Baloo Kopi, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(58px, 5.6vw, 86px)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Baloo Kopi, ui-rounded, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "Jakarta Kopi, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  control: "5px"
  photo: "0px"
spacing:
  tight: "20px"
  regular: "32px"
  wide: "70px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "14px 25px"
  button-red:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "14px 25px"
  button-yellow:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 25px"
  link-text:
    textColor: "{colors.ink}"
    padding: "6px 0"
---

# Design System: Kopi Jalan

## Overview

**Creative North Star: "Poster Jeda di Jalan"**

The site is an art-directed street-coffee poster rather than a café template. A photographic iced-coffee cutout takes the first viewport; bold printed color blocks, open ruled information, and sharp photo crops carry the rest. The visual energy comes from the subject and composition, not decorative badges or floating cards.

**Key Characteristics:**
- The drink is the hero, derived from a real stock photograph and disclosed as illustrative.
- Sun yellow, brick red, warm paper, and roast-brown ink behave like a short-run printed palette.
- Each passage changes image scale or reading direction while retaining the same square-edged, typography-led grammar.

The implemented tokens are in `src/styles/global.css`; `.impeccable/design.json` carries the corresponding panel extensions. The page-specific composition and verification references live in `.impeccable/surfaces/src-pages-index-astro.md`.

## Colors

Sun yellow opens the product scene and the route sheet. Brick red is reserved for action and one decisive event panel; roast-brown ink keeps body copy and dark closure legible. Warm paper supports long-form menu and service information.

### Primary
- **Brick red:** booking panel, featured price strip, action, and important price emphasis.

### Secondary
- **Sun yellow:** product stage, route passage, and the closing action.

### Neutral
- **Roast-brown ink:** display type, dark actions, and closing surface.
- **Soft brown ink:** explanatory copy and disclaimers on light surfaces.
- **Warm paper:** main reading surface, navigation, and photo-adjacent text.
- **Warm canvas:** location and office passages.
- **Hairline brown:** light menu separators.

**The Two-Ink Poster Rule.** Use yellow and red as large, deliberate planes; do not scatter small accent chips across every section.

## Typography

**Display Font:** Baloo Kopi (self-hosted Baloo 2, rounded system fallback).

**Body Font:** Jakarta Kopi (self-hosted Plus Jakarta Sans, system fallback).

Baloo's large, friendly weight makes a locally grounded poster headline. Jakarta Kopi keeps prices, schedules, and instructions clear at smaller sizes.

### Hierarchy
- **Display:** very large heavy type, near-tight line-height; first viewport and closing statement.
- **Headline:** heavy, multi-line, approximately 58–86px on wide screens; section openings.
- **Title:** heavy, roughly 24–37px; menu groups and service names.
- **Body:** generally 14–18px at relaxed line-height; explanations stay within comfortable measures.
- **Label:** 11–14px bold, used for functional navigation, prices, and factual disclosures only.

**The Headline Is the Poster Rule.** Open a passage with its statement, not an ornamental eyebrow or section number.

## Layout

The wide content measure caps at 1320px, with roughly 50px minimum side gutters on desktop. The hero is a 56/44 printed spread with an actual alpha-cut coffee photo crossing the red field; location uses an image-backed column and an open status block. Drinks form a 2.1/.9/1 asymmetric photograph row. The story is a two-image spread with one paper inset. Route information is a yellow/canvas two-column sheet; packages are open ruled columns beneath a photo-and-red service statement. Below 850px, paired sections stack; below 600px the menu's first drink spans the row and all service details become single-column. Every anchor and content collection survives this visual reflow.

## Elevation & Depth

The site is flat at rest. Image overlap and saturated planes provide depth; dark actions gain a soft offset hover shadow, and the coffee cutout has one photographic drop shadow against its printed field.

**The Flat Information Rule.** Status, price, and route content use rules and space rather than generic shadowed cards.

## Shapes

Photography uses squared crops, not rounded card frames. Action links use a restrained 5px corner; the brand-mark circle and the one large printed disk behind the drink are intentional exceptions with distinct roles. Thin dividers organize lists; no enclosing rounded panels are needed.

## Components

### Buttons
- **Shape:** short rectangular control, 5px radius, at least 51px tall on phones.
- **Primary:** roast-brown fill with warm-paper text over yellow or red scenes; red fill with paper text for the light location state; yellow fill with dark text in the closing passage.
- **Hover / Focus:** 3px upward lift and a soft offset shadow on hover; visible accent focus outline; reduced-motion users receive an immediate static state.
- **Text links:** underlined, dark on light and paper on dark, with the same directional SVG.

### Photography
- **Cutout stage:** `public/images/coffee-cup-cutout.webp` is a genuine derived alpha matte of the existing stock `menu-kopisusu.jpg`, separate from UI text and controls; its provenance is recorded beside the asset.
- **Framed passages:** fixed crops and explicit dimensions; the first drink is wider than the two supporting drinks.
- **Disclosure:** stock scenes cannot imply that pictured people, cart, or drink are confirmed Kopi Jalan operations.

### Navigation
- **Desktop:** compact wordmark and inline section links, with a clear location action.
- **Mobile:** visible horizontal section-link row; no menu button without a real menu.

### Location and route
- **Status:** an open, ruled information block with a readable unconfirmed state by default; manual confirmation and matching Jakarta date reveal the confirmed state.
- **Route rows:** day, area, and time arranged in a ruled list; on phones the time moves below the area.

## Do's and Don'ts

### Do:
- **Do** lead with a real coffee or street photograph that earns its space in the composition.
- **Do** keep unconfirmed location, sample prices, and source photography explicitly labeled.
- **Do** let picture scale, paper ground, and poster typography vary the scroll rhythm.

### Don't:
- **Don't** flatten the page into equal cards or repeat the same two-column split in every section.
- **Don't** fabricate operating locations, customer quotes, or verified product photographs.
- **Don't** add decorative status pills, faux paper tears, or shadowed boxes around lists.
