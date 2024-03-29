// Libs
import React from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import Button from '@asda/button'
import StatusLabel from '@asda/brand/status-label'
import {
  Heading1,
  Heading2,
  Paragraph,
  Section,
} from '@sg/sg-layout'
import Recommendation, { RecommendationStatus } from '@sg/sg-recommendation'

// Assets
// import samplePNGSource from './images/sample.png'
import './_style.scss'

const Container = ({ children }) => (
  <div className="content-formatting-page__container">{children}</div>
)

const ContentFormattingPage = () => (
  <article className="content-formatting-page">

    <Heading1>Formatting</Heading1>

    <Section>
      <Heading2>Sentence case</Heading2>
      <Paragraph>
        Use sentence case as default formatting option. It is modern, fresh and
        easier to read.
        <Container>
          <Recommendation>
            <RecommendationStatus recommended />
            <div className="content-formatting-page__button-container">
              <Button category="secondary">Shop now</Button>
            </div>
          </Recommendation>
          <Recommendation>
            <RecommendationStatus />
            <div className="content-formatting-page__button-container">
              <Button category="secondary">Shop Now</Button>
              <Button category="secondary">SHOP NOW</Button>
              <Button category="secondary">ShOp NoW</Button>
            </div>
          </Recommendation>
        </Container>
      </Paragraph>

      <Paragraph noMargin>
        Only exception is the order status labels, which use all caps.
        <Container>
          <Recommendation>
            <RecommendationStatus recommended />
            <div className="content-formatting-page__label-container">
              <StatusLabel status="progress" className="content-formatting-page__status-label">Order placed</StatusLabel>
              <StatusLabel status="completed">Order delivered</StatusLabel>
            </div>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Title case</Heading2>
      <Paragraph>
        Use for top nav, product names, company, place names, postcodes and abbreviations.
      </Paragraph>
      <Paragraph noMargin>
        Use for navigation and links
        <Container>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus recommended />
            <ul className="content-formatting-page__menu">
              <li className="content-formatting-page__menu-item">
                Vegetables & Potatoes
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-formatting-page__menu-item">
                Salads & Stir Fry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-formatting-page__menu-item">
                Meat & Poultry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
            </ul>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus />
            <ul className="content-formatting-page__menu">
              <li className="content-formatting-page__menu-item">
                Vegetables and potatoes
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-formatting-page__menu-item">
                Salads and stir fry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-formatting-page__menu-item">
                Meat and poultry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
            </ul>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-formatting-page__recommendation__paragraph">
              Meanwood Supermarket,<br />
              Leeds, LS6 4JP
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-formatting-page__recommendation__paragraph">
              Meanwood supermarket,<br />
              leeds, ls6 4jp
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Bold and Semibold</Heading2>
      <Paragraph noMargin>
        Avoid use of bold. To highlight an element, reduce the clutter around it and use semibold.
        <Container>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus recommended />
            <div className="content-formatting-page__recommendation__paragraph">
              <Icon name="lock" />
              <span className="content-formatting-page__text-icon content-formatting-page--semibold">
                Checkout - Summary
              </span>
            </div>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus />
            <div className="content-formatting-page__recommendation__paragraph">
              <Icon name="lock" />
              <span className="content-formatting-page__text-icon">
                <strong>Checkout - Summary</strong>
              </span>
            </div>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Italics</Heading2>
      <Paragraph noMargin>
        Avoid use of italics as they are substantially harder to read.
        <Container>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus recommended />
            <div className="content-formatting-page__recommendation__paragraph">
              <Icon name="lock" />
              <span className="content-formatting-page__text-icon content-formatting-page--semibold">
                Checkout - Summary
              </span>
            </div>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus />
            <div className="content-formatting-page__recommendation__paragraph">
              <Icon name="lock" />
              <span className="content-formatting-page__text-icon">
                <em>Checkout - Summary</em>
              </span>
            </div>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Underline</Heading2>
      <Paragraph noMargin>
        Do not use underline as this makes the text look like a link.
        <Container>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus recommended />
            <div className="content-formatting-page__recommendation__paragraph">
              <Icon name="lock" />
              <span className="content-formatting-page__text-icon content-formatting-page--semibold">
                Checkout - Summary
              </span>
            </div>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus />
            <div className="content-formatting-page__recommendation__paragraph">
              <Icon name="lock" />
              <span className="content-formatting-page__text-icon content-formatting-page--underline">
                Checkout - Summary
              </span>
            </div>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-formatting-page__recommendation__paragraph content-formatting-page--small">
              If you{'\''}d like to get in touch, please call our customer services team on{' '}
              <span className="content-formatting-page--semibold">
                0800 952 6060
              </span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-formatting-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-formatting-page__recommendation__paragraph content-formatting-page--small">
              If you{'\''}d like to get in touch, please call our customer services team on{' '}
              <span className="content-formatting-page--underline">
                0800 952 6060
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

  </article>
)

export default ContentFormattingPage
