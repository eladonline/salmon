import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'src/components/fixed/navbar/';
import { Parallax, ParallaxLayer } from 'react-spring';
import resetAnimation from 'src/components/helpers/resetAnimation';
import Bullets from 'src/components/bullets/Bullets';
import FirstSection from 'src/components/sections/first/First';
import SecondSection from 'src/components/sections/second/Second';
import ThirdSection from 'src/components/sections/third/Third';
import SideImgThird from 'src/components/sections/third/SideImg';
import ForthSection from 'src/components/sections/forth/Forth';
import FifthSection from 'src/components/sections/fifth/Fifth';
import SixthSection from 'src/components/sections/sixth/Sixth';
import SeventhSection from 'src/components/sections/seventh/Seventh';
import JoinUs from 'src/components/sections/joinUs/JoinUs';
import JoinUsBackground from 'src/components/sections/joinUs/joinUsBackground';
import JuLayer from 'src/components/sections/joinUs/JuLayer';
import Promo from 'src/components/sections/first/Promo';
import Observer from 'react-intersection-observer';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      canScroll: true,
      browserWidth: window.screen.width
    };
    this.lastPage = 0.7;
    this.overallPages = 7 + this.lastPage;
    this.lastScrollPos = 0;
    this.scrollLockTime = 1000; // 1s
    this.scrollUnlock = this.scrollUnlock.bind(this);
    this.scrollLock = this.scrollLock.bind(this);
    this.handleBulletClick = this.handleBulletClick.bind(this);
    this.handleBulletLabelFocus = this.handleBulletLabelFocus.bind(this);
  }
  /**
   * @callback componentDidMount
   * @listens scroll - if you find parallax within the DOM add listener -
   * @param e - the element scrolled -- parallax
   * @summary lock the scroll for some time for the parallax scroll to finish
   */
  componentDidMount() {
    if (window) {
      const overallPages = this.overallPages - this.lastPage;
      // eslint-disable-line
      const paralax = ReactDOM.findDOMNode(this.parallax); // eslint-disable-line
      this.parallaxNode = paralax;
      this.setState({ parallax: paralax });

      paralax.addEventListener('wheel', e => {
        const scrollDirection = e.deltaY > 0; // true down false up
        let endRound = false;

        if (
          !endRound &&
          scrollDirection &&
          this.state.canScroll &&
          this.state.offset < overallPages - 1
        ) {
          const offset = Math.min(this.state.offset + 1, overallPages);
          resetAnimation(offset, paralax);
          this.handleBulletLabelFocus(offset);
          if (offset < overallPages) this.parallax.scrollTo(offset);
          this.setState({ offset });
          this.scrollLock();
          this.scrollUnlock();
          endRound = true;
        } else if (
          !endRound &&
          !scrollDirection &&
          this.state.canScroll &&
          this.state.offset !== this.overallPages
        ) {
          const offset = Math.max(this.state.offset - 1, 0);
          resetAnimation(offset, paralax);
          this.handleBulletLabelFocus(offset);
          if (offset < overallPages + 1) this.parallax.scrollTo(offset);
          if (offset > 5) {
            const bullets = document.querySelector('.bulletsMain');
            bullets.style.display = 'flex';
          }
          this.parallax.scrollTo(offset);
          this.setState({ offset });
          this.scrollLock();
          this.scrollUnlock();
          endRound = true;
        } else if (!endRound && this.state.offset === overallPages - 1 && scrollDirection) {
          const bullets = document.querySelector('.bulletsMain');
          bullets.style.display = 'none';
          this.setState({ offset: this.overallPages });
          paralax.style.overflowY = 'scroll';
          endRound = true;
        } else if (!endRound && this.state.offset === this.overallPages && !scrollDirection) {
          this.setState({ offset: overallPages });
          this.handleBulletLabelFocus(overallPages);
          this.parallax.scrollTo(overallPages - 1);
          paralax.style.overflowY = 'hidden';
          endRound = true;
        }
      });
    }
    if (window && !this.browserSize) {
      window.addEventListener('resize', e => {
        this.setState({ browserWidth: e.target.window.innerWidth });
      });
    }
  }

  /**
   *
   * @param {number} scrollPos - scroll from top
   * @summary disable scrolling by setting state to false
   *  remember last scroll from top number
   */
  scrollLock() {
    this.setState({ canScroll: false });
  }
  /**
   * @function scrollUnlock
   * @summary setTimeout to enable scroll
   */
  scrollUnlock(time = 0) {
    setTimeout(() => {
      this.setState({ canScroll: true });
    }, time || this.scrollLockTime);
  }
  handleScroll(offset) {
    offset = Math.max(offset, 1) - 1;
    resetAnimation(offset, this.parallaxNode);
  }
  handleBulletClick(offset, element) {
    if (this.state.offset !== offset) {
      this.scrollLock();
      this.setState({ offset });
      resetAnimation(offset, this.parallaxNode);
      this.parallax.scrollTo(offset);
      this.scrollUnlock();
    }
  }
  handleBulletLabelFocus(offset) {
    const target = document.querySelector(`#bullet_${offset}`);

    if (target !== null) {
      target.click();
      setTimeout(() => {
        target.click();
      }, 950);
    }
  }
  /**
   *
   * @param {component} children
   * @param {number} offset
   * @param {float, number} speed
   * @param {number} zIndex
   * @returns [{component}] [component wrapped by parallax layer]
   */
  page(component, offset, speed, zIndex = 0, style, factor) {
    return (
      <ParallaxLayer
        offset={offset}
        speed={speed}
        style={{ zIndex: zIndex, ...style }}
        factor={factor}
      >
        {/*Observer is for tracking if component is in view (mobile mode) */}
        <Observer className="observer-con">
          {({ inView, ref }) => {
            if (inView) this.handleScroll(offset);
            return (
              <div className="observer-con-child" ref={ref}>
                {component}
              </div>
            );
          }}
        </Observer>
      </ParallaxLayer>
    );
  }
  render() {
    const desktops = this.state.browserWidth < 600;
    return (
      <React.Fragment>
        <Navbar offset={this.state.offset} />
        {!desktops && (
          <Bullets
            id="mainBullets"
            pages={this.overallPages - this.lastPage}
            handleBulletClick={this.handleBulletClick}
            offset={this.state.offset}
          />
        )}
        <Parallax
          className="container-parallax"
          ref={ref => (this.parallax = ref)}
          pages={this.overallPages}
          scrolling={desktops}
          config={{
            tension: 15,
            friction: 9,
            velocity: 0.2,
            overshootClamping: true,
            restSpeedThreshold: 0.9,
            restDisplacementThreshold: 0.9
          }}
        >
          {!desktops &&
            this.page(
              <Bullets
                id="customBullets"
                pages={this.overallPages - this.lastPage}
                handleBulletClick={this.handleBulletClick}
                offset={this.state.offset}
              />,
              6,
              0,
              111
            )}
          <React.Fragment>
            {this.page(<Promo />, 0, 0, 1)}
            {this.page(<FirstSection />, 0, 0.3, 1)}
            {this.page(
              <SecondSection
                parallax={this.state.parallax}
                browserWidth={this.state.browserWidth}
              />,
              1,
              0,
              1
            )}
            {/* ThirdSection */}
            {this.page(<ThirdSection />, 2, 0, 1)}
            {this.page(<SideImgThird />, 2, 0, 0)}
            {/* {this.page(<SideImgThird />, 2, 0, 0)} */}
            {/* ThirdSection end */}
            {this.page(<ForthSection />, 3, 0, 1)}
            {this.page(<FifthSection />, 4, 0, 1)}
            {this.page(<SixthSection />, 5, 0, 1)}
            {this.page(<SeventhSection />, 6, 0, 2)}
            {/* join us page*/}
            {this.page(<JoinUs />, 7, 0, 2)}
            {this.page(<JuLayer />, 7, 0, 1)}
            {this.page(<JoinUsBackground />, 7, 0.3, 1)}
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
