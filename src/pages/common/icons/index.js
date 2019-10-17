// Libs
import React from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import { Caption, Figure, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import metrics32x32PNGSource from './images/metrics-32x32.png'
import iconLayoutPNGSource from './images/icon-layout.png'
import strokeRadiiAddPNGSource from './images/stroke-radii-add.png'
import strokeRadiiHeadphonePNGSource from './images/stroke-radii-headphone.png'
import keylinePNGSource from './images/keyline.png'
import squarePNGSource from './images/square.png'
import circlePNGSource from './images/circle.png'
import verticalRectanglePNGSource from './images/vertical-rectangle.png'
import horizontalRectanglePNGSource from './images/horizontal-rectangle.png'

import './_style.scss'

const Grid = ({ children, className }) => (
  <ul className={`icons-page__grid ${className}`}>{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="icons-page__grid-item">{children}</li>
)

const IconsPage = () => (
  <article className="icons-page">

    <Heading1>Icons</Heading1>

    <Section>
      <Heading2>Basic Icons</Heading2>
      <Grid>
        <GridItem><Icon name="browse" /><Caption>Browse</Caption></GridItem>
        <GridItem><Icon name="check" /><Caption>Check</Caption></GridItem>
        <GridItem><Icon name="chevron-down" /><Caption>Chevron Down</Caption></GridItem>
        <GridItem><Icon name="chevron-left" /><Caption>Chevron Left</Caption></GridItem>
        <GridItem><Icon name="chevron-right" /><Caption>Chevron Right</Caption></GridItem>
        <GridItem><Icon name="chevron-up" /><Caption>Chevron Up</Caption></GridItem>
        <GridItem><Icon name="swap" /><Caption>Swap</Caption></GridItem>
        <GridItem><Icon name="close" /><Caption>Close</Caption></GridItem>
        <GridItem><Icon name="change" /><Caption>Change</Caption></GridItem>
        <GridItem><Icon name="filter" /><Caption>Filter</Caption></GridItem>
        <GridItem><Icon name="menu" /><Caption>Menu</Caption></GridItem>
        <GridItem><Icon name="minus" /><Caption>Minus</Caption></GridItem>
        <GridItem><Icon name="more-actions" /><Caption>More Actions</Caption></GridItem>
        <GridItem><Icon name="plus" /><Caption>Plus</Caption></GridItem>
        <GridItem><Icon name="zoom" /><Caption>Zoom</Caption></GridItem>
        <GridItem><Icon name="search" /><Caption>Search</Caption></GridItem>
        <GridItem><Icon name="sort" /><Caption>Sort</Caption></GridItem>
        <GridItem><Icon name="caret-down" /><Caption>Caret Down</Caption></GridItem>
        <GridItem><Icon name="caret-up" /><Caption>Caret Up</Caption></GridItem>
        <GridItem><Icon name="reload" /><Caption>Reload</Caption></GridItem>
        <GridItem><Icon name="pause" /><Caption>Pause</Caption></GridItem>
        <GridItem><Icon name="play" /><Caption>Play</Caption></GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Circular</Heading2>
      <Grid>
        <GridItem><Icon name="circle-minus" /><Caption>Circle Minus</Caption></GridItem>
        <GridItem><Icon name="circle-plus" /><Caption>Circle Plus</Caption></GridItem>
        <GridItem><Icon name="clock" /><Caption>Clock</Caption></GridItem>
        <GridItem><Icon name="facebook" /><Caption>Facebook</Caption></GridItem>
        <GridItem><Icon name="help" /><Caption>Help</Caption></GridItem>
        <GridItem><Icon name="info" /><Caption>Info</Caption></GridItem>
        <GridItem><Icon name="offer" /><Caption>Offer</Caption></GridItem>
        <GridItem><Icon name="price" /><Caption>Price</Caption></GridItem>
        <GridItem><Icon name="twitter" /><Caption>Twitter</Caption></GridItem>
        <GridItem><Icon name="unavailable" /><Caption>Unavailable</Caption></GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>System</Heading2>
      <Grid>
        <GridItem><Icon name="add-to-list" /><Caption>Add to List</Caption></GridItem>
        <GridItem><Icon name="address" /><Caption>Address</Caption></GridItem>
        <GridItem><Icon name="alert" /><Caption>Alert</Caption></GridItem>
        <GridItem><Icon name="bag" /><Caption>Bag</Caption></GridItem>
        <GridItem><Icon name="barcode" /><Caption>Barcode</Caption></GridItem>
        <GridItem><Icon name="calendar" /><Caption>Calendar</Caption></GridItem>
        <GridItem><Icon name="camera" /><Caption>Camera</Caption></GridItem>
        <GridItem><Icon name="delivery-pass" /><Caption>Delivery Pass</Caption></GridItem>
        <GridItem><Icon name="events" /><Caption>Events</Caption></GridItem>
        <GridItem><Icon name="feedback" /><Caption>Feedback</Caption></GridItem>
        <GridItem><Icon name="groceries" /><Caption>Groceries</Caption></GridItem>
        <GridItem><Icon name="home" /><Caption>Home</Caption></GridItem>
        <GridItem><Icon name="list" /><Caption>List</Caption></GridItem>
        <GridItem><Icon name="lock" /><Caption>Lock</Caption></GridItem>
        <GridItem><Icon name="mail" /><Caption>Mail</Caption></GridItem>
        <GridItem><Icon name="mic" /><Caption>Mic</Caption></GridItem>
        <GridItem><Icon name="orders" /><Caption>Orders</Caption></GridItem>
        <GridItem><Icon name="payment" /><Caption>Payment</Caption></GridItem>
        <GridItem><Icon name="petrol" /><Caption>Petrol</Caption></GridItem>
        <GridItem><Icon name="preferences" /><Caption>Preferences</Caption></GridItem>
        <GridItem><Icon name="print" /><Caption>Print</Caption></GridItem>
        <GridItem><Icon name="recipes" /><Caption>Recipes</Caption></GridItem>
        <GridItem><Icon name="star-outlined" /><Caption>Star Outlined</Caption></GridItem>
        <GridItem><Icon name="star-filled" /><Caption>Star Filled</Caption></GridItem>
        <GridItem><Icon name="trash" /><Caption>Trash</Caption></GridItem>
        <GridItem><Icon name="trolley" /><Caption>Trolley</Caption></GridItem>
        <GridItem><Icon name="truck" /><Caption>Truck</Caption></GridItem>
        <GridItem><Icon name="cloud" /><Caption>Cloud</Caption></GridItem>
        <GridItem><Icon name="voucher" /><Caption>Voucher</Caption></GridItem>
        <GridItem><Icon name="map-pin-outlined" /><Caption>Map Pin Outlined</Caption></GridItem>
        <GridItem><Icon name="map-pin-filled" /><Caption>Map Pin Filled</Caption></GridItem>
        <GridItem><Icon name="map-pin-checked" /><Caption>Map Pin Checked</Caption></GridItem>
        <GridItem><Icon name="map-pin-express" /><Caption>Map Pin Express</Caption></GridItem>
        <GridItem><Icon name="heart-outlined" /><Caption>Heart Outlined</Caption></GridItem>
        <GridItem><Icon name="heart-filled" /><Caption>Heart Filled</Caption></GridItem>
        <GridItem><Icon name="thumbs-up-outlined" /><Caption>Thumbs Up Outlined</Caption></GridItem>
        <GridItem><Icon name="thumbs-down-outlined" /><Caption>Thumbs Down Outlined</Caption></GridItem>
        <GridItem><Icon name="thumbs-up-filled" /><Caption>Thumbs Up Filled</Caption></GridItem>
        <GridItem><Icon name="thumbs-down-filled" /><Caption>Thumbs Down Filled</Caption></GridItem>
        <GridItem><Icon name="map" /><Caption>Map</Caption></GridItem>
        <GridItem><Icon name="conversation" /><Caption>Conversation</Caption></GridItem>
        <GridItem><Icon name="near-me-outlined" /><Caption>Near Me Outlined</Caption></GridItem>
        <GridItem><Icon name="near-me" /><Caption>Near Me</Caption></GridItem>
        <GridItem><Icon name="click-collect" /><Caption>Click & Collect</Caption></GridItem>
        <GridItem><Icon name="lockers" /><Caption>Lockers</Caption></GridItem>
        <GridItem><Icon name="show" /><Caption>Show</Caption></GridItem>
        <GridItem><Icon name="pizza" /><Caption>Pizza</Caption></GridItem>
        <GridItem><Icon name="support" /><Caption>Support</Caption></GridItem>
        <GridItem><Icon name="account" /><Caption>Account</Caption></GridItem>
        <GridItem><Icon name="settings" /><Caption>Settings</Caption></GridItem>
        <GridItem><Icon name="summer" /><Caption>Summer</Caption></GridItem>
        <GridItem><Icon name="tube" /><Caption>Tube</Caption></GridItem>
        <GridItem><Icon name="automated-collection" /><Caption>Automated Collection</Caption></GridItem>
        <GridItem><Icon name="park-ride" /><Caption>Park & Ride</Caption></GridItem>
        <GridItem><Icon name="market" /><Caption>Market</Caption></GridItem>
        <GridItem><Icon name="internal-collection" /><Caption>Internal Collection</Caption></GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Icon size and layout</Heading2>
      <Paragraph>
        Icons are created on a 32px by 32px grid. Create icons for viewing at
        100% scale for pixel perfect accuracy. The icons can be scaled to smaller
        and larger sizes based on the context and usage.
      </Paragraph>
      <Figure
        src={metrics32x32PNGSource}
        caption="32 x 32 (100% Scale)"
      />
      <Figure
        src={iconLayoutPNGSource}
        caption="Icon layout (400% scale)"
        noMargin
      />
    </Section>

    <Section>
      <Heading2>Keyline and basic shapes</Heading2>
      <Paragraph>
        Specific keylines are present for certain shapes: circle, square,
        rectangle, orthogonals, and diagonals. These basic shapes help in
        creating consistent icons and regulate their placement on the icon grid.
      </Paragraph>
      <Grid className="icons-page__grid-basic-shapes">
        <GridItem>
          <Figure
            src={keylinePNGSource}
            caption="Keyline (400% scale)"
            noMargin
          />
        </GridItem>
        <GridItem>
          <Figure
            src={squarePNGSource}
            caption="Square (400% scale)"
            noMargin
          />
        </GridItem>
        <GridItem>
          <Figure
            src={circlePNGSource}
            caption="Circle (400% scale)"
            noMargin
          />
        </GridItem>
        <GridItem>
          <Figure
            src={verticalRectanglePNGSource}
            caption="Vertical Rectangle (400% scale)"
            noMargin
          />
        </GridItem>
        <GridItem>
          <Figure
            src={horizontalRectanglePNGSource}
            caption="Horizontal Rectangle (400% scale)"
            noMargin
          />
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Icon stroke and radii</Heading2>
      <Paragraph>
        Icons use a consistent stroke width of 2px, including curves, angles,
        and both interior and exterior strokes. The radii for outer edges is 2px
        and 0.5px for inner edges.
      </Paragraph>
      <Paragraph>
        For icons where outer radii of 2px is not appropriate, apply 0.5px on
        the outer edge while leaving the inner edge without radii.
      </Paragraph>

      <Grid className="icons-page__grid-icon-stroke">
        <GridItem>
          <Figure src={strokeRadiiAddPNGSource} noMargin />
        </GridItem>
        <GridItem>
          <Figure src={strokeRadiiHeadphonePNGSource} noMargin />
        </GridItem>
      </Grid>
    </Section>
  </article>
)

export default IconsPage