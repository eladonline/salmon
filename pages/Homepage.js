import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'src/components/fixed/navbar/';
import { Parallax, ParallaxLayer } from 'react-spring';
import resetAnimation from 'src/components/helpers/resetAnimation';

import FirstSection from 'src/components/sections/first/First';
import SecondSection from 'src/components/sections/second/Second';
import ThirdSection from 'src/components/sections/third/Third';
import ForthSection from 'src/components/sections/forth/Forth';
import FifthSection from 'src/components/sections/fifth/Fifth';
import SixthSection from 'src/components/sections/sixth/Sixth';
import SeventhSection from 'src/components/sections/seventh/Seventh';
import JoinUs from 'src/components/sections/joinUs/JoinUs';
import JoinUsBackground from 'src/components/sections/joinUs/joinUsBackground';
import JuLayer from 'src/components/sections/joinUs/JuLayer';
import Promo from 'src/components/sections/first/Promo';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0, canScroll: true };
    this.lastPage = 0.7;
    this.overallPages = 7 + this.lastPage;
    this.lastScrollPos = 0;
    this.ticking = false;
    this.scrollLockTime = 2500; // 3s
    this.scrollUnlock = this.scrollUnlock.bind(this);
    this.scrollLock = this.scrollLock.bind(this);
  }
  /**
   * @callback componentDidMount
   * @listens scroll - if you find parallax within the DOM add listener -
   * @param e - the element scrolled -- parallax
   * @summary lock the scroll for some time for the parallax scroll to finish
   */
  componentDidMount() {
    if (window) {
      // eslint-disable-line
      const paralax = ReactDOM.findDOMNode(this.parallax); // eslint-disable-line
      paralax.onscroll = e => {
        const scrollPos = e.target.scrollTop;
        // **  if user scroll down
        if (scrollPos > this.lastScrollPos + 5 && !this.ticking) {
          const offset = Math.min(this.state.offset + 1, this.overallPages - 1);
          // reset last page animation
          setTimeout(() => {
            resetAnimation(this.state.offset - 1, paralax);
          }, 1500);
          // display next page animation
          resetAnimation(offset, paralax);

          this.parallax.scrollTo(offset);
          this.setState({
            offset: Math.min(
              this.state.offset + 1,
              this.overallPages - this.lastPage
            )
          });
          this.scrollLock(scrollPos);
          this.scrollUnlock();
          // **  if user scroll up and its last page on parallax
          // then scroll to 1 page up
        } else if (
          this.lastScrollPos &&
          scrollPos < this.lastScrollPos &&
          !this.ticking &&
          this.overallPages - this.lastPage < this.state.offset
        ) {
          const offset = this.overallPages - this.lastPage;
          this.parallax.scrollTo(offset);
          this.this.setState({ canScroll: false });
          this.ticking = false;
          // **  if user scroll up
          // then scroll one page up
        } else if (
          this.lastScrollPos &&
          scrollPos < this.lastScrollPos - 5 &&
          !this.ticking
        ) {
          const offset = Math.max(this.state.offset - 1, 0);
          this.parallax.scrollTo(offset);
          // reset next page animation
          resetAnimation(offset, paralax);
          // reset last page animation
          resetAnimation(offset + 1, paralax);
          this.setState({ offset: this.state.offset - 1 });
          this.scrollLock(scrollPos);
          this.scrollUnlock();
        }
        this.lastScrollPos = scrollPos;
      };
    }
  }

  /**
   *
   * @param {number} scrollPos - scroll from top
   * @summary disable scrolling by setting state to false
   *  remember last scroll from top number
   */
  scrollLock(scrollPos) {
    this.ticking = true;
    this.setState({ canScroll: false });
    this.lastScrollPos = scrollPos;
  }
  /**
   * @function scrollUnlock
   * @summary setTimeout to enable scroll
   */
  scrollUnlock() {
    setTimeout(() => {
      this.setState({ canScroll: true });
      this.ticking = false;
    }, this.scrollLockTime);
  }
  /**
   *
   * @param {component} children
   * @param {number} offset
   * @param {float, number} speed
   * @param {number} zIndex
   * @returns [{component}] [component wrapped by parallax layer]
   */
  page(children, offset, speed, zIndex = 0) {
    return (
      <ParallaxLayer offset={offset} speed={speed} style={{ zIndex: zIndex }}>
        {children}
      </ParallaxLayer>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Navbar offset={this.state.offset} />
        <Parallax
          className="container-parallax"
          ref={ref => (this.parallax = ref)}
          pages={this.overallPages}
          scrolling={
            this.state.canScroll ||
            this.state.offset === this.overallPages - this.lastPage
          }
          config={{
            tension: 79,
            friction: 18,
            velocity: 0.3,
            overshootClamping: true,
            restSpeedThreshold: 0.9,
            restDisplacementThreshold: 0.9
          }}
        >
          <React.Fragment>
            {/* {this.page(<Promo />, 0, 0, 1)}
            {this.page(<FirstSection />, 0, 0.3, 1)}
            {this.page(<SecondSection />, 1, 0, 1)}
            {this.page(<ThirdSection />, 2, 0, 1)}
            {this.page(<ForthSection />, 3, 0, 1)}
            {this.page(<FifthSection />, 4, 0, 1)}
            {this.page(<SixthSection />, 5, 0, 1)}
            {this.page(<SeventhSection />, 6, 0, 1)} */}
            {/* join us page*/}
            {this.page(<JoinUs />, 0, 0, 2)}
            {this.page(<JuLayer />, 0, 0, 1)}
            {this.page(<JoinUsBackground />, 0, 0.3, 1)}
            {/*end*/}
          </React.Fragment>
        </Parallax>
      </React.Fragment>
    );
  }
}

/* <ParallaxLayer
              // onScroll={(e)=>{e.stopPropagation()}}
              offset={1}
              speed={0}
              style={{ zIndex: 2, display:'flex', justifyContent:'flex-end', flexDirection:'column' }}
              factor={1}
            > <SecondSection />
             </ParallaxLayer> */
