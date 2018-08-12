import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'src/components/fixed/navbar/';
import { Parallax, ParallaxLayer } from 'react-spring';
import resetAnimation from 'src/components/helpers/resetAnimation';
import Bullets from 'src/components/bullets/Bullets';
import FirstSection from 'src/components/sections/first/First';
import SecondSection from 'src/components/sections/second/Second';
import ThirdSection from 'src/components/sections/third/Third';
import { SideImgThird } from 'src/components/sections/third/SideImg';
import ForthSection from 'src/components/sections/forth/Forth';
import FifthSection from 'src/components/sections/fifth/Fifth';
import SixthSection from 'src/components/sections/sixth/Sixth';
import SeventhSection from 'src/components/sections/seventh/Seventh';
import JoinUs from 'src/components/sections/joinUs/JoinUs';
import JoinUsBackground from 'src/components/sections/joinUs/joinUsBackground';
import JuLayer from 'src/components/sections/joinUs/JuLayer';
import Promo from 'src/components/sections/first/Promo';
import Observer from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';

/**
 * @summary good to know
 * when document says "full page"
 * it means every page that linked to a bullet
 * means every page thats in the limit of the auto scroll
 */

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      canScroll: true,
      browserWidth: window.screen.width
    };
    this.lastPage = 0.9;
    this.overallPages = 7 + this.lastPage;
    this.lastScrollPos = 0;
    this.scrollLockTime = 1100; // 1s
    this.scrollUnlock = this.scrollUnlock.bind(this);
    this.scrollLock = this.scrollLock.bind(this);
    this.handleBulletClick = this.handleBulletClick.bind(this);
    this.handleBulletLabelFocus = this.handleBulletLabelFocus.bind(this);
  }

  componentDidMount() {
    if (window) {
      const overallPages = this.overallPages - this.lastPage;
      const LastFullPage = overallPages - 1;
      // eslint-disable-line
      const paralax = ReactDOM.findDOMNode(this.parallax); // eslint-disable-line
      this.parallaxNode = paralax;
      this.setState({ parallax: paralax });
      if (!isMobile) {
        /**
         * @event addEventListener
         * @listens wheel
         * @callback ()=>
         * @param {object} e
         * @summary detect scrolling direction of the wheel and auto scroll this direction
         */
        paralax.addEventListener('wheel', e => {
          const scrollDirection = e.deltaY > 0; // true down false up
          let endRound = false;
          // scroll down and its in the limit of full pages
          if (
            !endRound &&
            scrollDirection &&
            this.state.canScroll &&
            this.state.offset < LastFullPage
          ) {
            const offset = Math.min(this.state.offset + 1, LastFullPage);
            resetAnimation(offset, paralax);
            this.handleBulletLabelFocus(offset);
            this.parallax.scrollTo(offset);
            if (offset === LastFullPage) {
              setTimeout(() => {
                paralax.style.overflowY = 'scroll';
              }, 950);
              this.BulletsANavbarDipslay('none');
            }
            this.setState({ offset });
            this.scrollLock();
            this.scrollUnlock();
            endRound = true;
            // scroll up and its in the limit of full pages
          } else if (
            !endRound &&
            !scrollDirection &&
            this.state.canScroll &&
            this.state.offset !== this.overallPages
          ) {
            const offset = Math.max(this.state.offset - 1, 0);
            resetAnimation(offset, paralax);

            offset < overallPages && this.parallax.scrollTo(offset);
            this.state.offset > overallPages - 2 && this.BulletsANavbarDipslay('flex');

            // solve problem of executing bullet click(), before the bullet changes style from none to flex
            // and being aborted
            this.state.offset === LastFullPage
              ? setTimeout(() => {
                this.handleBulletLabelFocus(overallPages - 2);
              }, 30)
              : this.handleBulletLabelFocus(offset);
            if (paralax.style.overflow !== 'hidden') paralax.style.overflow = 'hidden';
            if (this.state.offset === overallPages || offset === overallPages) {
              this.BulletsANavbarDipslay('none');
            }
            this.parallax.scrollTo(offset);
            this.setState({ offset });
            this.scrollLock();
            this.scrollUnlock();
            endRound = true;
            // if view last full page and scroll down
          } else if (!endRound && this.state.offset === LastFullPage && scrollDirection) {
            this.BulletsANavbarDipslay('none');
            this.setState({ offset: this.overallPages });
            setTimeout(() => {
              paralax.style.overflowY = 'scroll';
            }, 450);
            endRound = true;
            // if view last page and scroll up
          } else if (!endRound && this.state.offset === this.overallPages && !scrollDirection) {
            if (this.state.offset === overallPages) {
              this.BulletsANavbarDipslay('none');
            }
            paralax.style.overflowY = 'hidden';
            this.parallax.scrollTo(LastFullPage);
            this.setState({ offset: LastFullPage });
            this.scrollLock();
            this.scrollUnlock(650);

            endRound = true;
          }
        });
      }
    }
    if (window && !this.browserSize) {
      window.addEventListener('resize', e => {
        this.setState({ browserWidth: e.target.window.innerWidth });
      });
    }
  }

  /**
   * @function scrollLock
   * @summary disable scrolling by setting state to false
   */
  scrollLock() {
    this.setState({ canScroll: false });
  }
  /**
   * @function scrollUnlock
   * @param {number} time -- optional
   * @summary setTimeout to enable scroll
   */
  scrollUnlock(time = 0) {
    setTimeout(() => {
      this.setState({ canScroll: true });
    }, time || this.scrollLockTime);
  }
  /**
   * @function handleScrollAnimation
   * @param {number} offset -the page the browser display in this moment
   * @summary start animation on the page that is in view
   */
  handleScrollAnimation(offset) {
    offset = Math.max(offset, 1) - 1;
    resetAnimation(offset, this.parallaxNode);
  }
  /**
   * @function handleBulletClick
   * @param {number} offset -the page the browser display in this moment
   * @summary handle the scroll, animation, bullets display, offset state
   */
  /**
   * @function BulletsANavbarDipslay
   * @param {string} display - flex/none
   */
  BulletsANavbarDipslay(display) {
    const bullets = document.querySelector('.bulletsMain');
    const navbar = document.querySelector('#mainNavbar');

    bullets.style.display = display;
    navbar.style.display = display;
  }
  handleBulletClick(offset) {
    // if page *in view, big or equeal to the page *to view
    if (this.state.offset >= offset && offset >= this.overallPages - this.lastPage - 1) return '';
    const overallPages = this.overallPages - this.lastPage - 1;
    // hide scroll if page to view < last full page to view
    if (offset < overallPages) {
      this.parallaxNode.style.overflow = 'hidden';
    }
    // bullet pressed
    if (offset <= overallPages) {
      // if static bullets are hidden -- because its the last full size page (SeventhSection)
      // then show them.
      if (offset < overallPages) {
        this.BulletsANavbarDipslay('flex');
        // if the last bullet pressed, hide the bullets
      } else if (offset + 1 === this.overallPages - this.lastPage) {
        this.BulletsANavbarDipslay('none');
      }
      this.scrollLock();
      this.setState({ offset });
      resetAnimation(offset, this.parallaxNode);
      this.parallax.scrollTo(offset);

      this.scrollUnlock();
    }
    // activate scroll if its last full size page
    if (offset === overallPages) {
      setTimeout(() => {
        if (this.parallaxNode.style.overflowY !== 'scroll') {
          this.parallaxNode.style.overflowY = 'scroll';
        }
      }, 980);
    }
  }
  /**
   * @function handleBulletLabelFocus
   * @param {number} offset -the page the browser display in this moment
   * @summary display the label of the page (linked to the bullet)
   * @fires click - display the label
   * @fires setTimeout -hide the label
   */
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
            if (inView) this.handleScrollAnimation(offset);
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
    const mobile = isMobile;
    return (
      <React.Fragment>
        <Navbar offset={this.state.offset} />
        {!mobile && (
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
          scrolling={mobile}
          config={{
            tension: 15,
            friction: 7,
            velocity: 0.2,
            overshootClamping: true,
            restSpeedThreshold: 0.9,
            restDisplacementThreshold: 0.9
          }}
        >
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
            {/* ThirdSection end */}

            {this.page(<ForthSection />, 3, 0, 1)}
            {this.page(<FifthSection />, 4, 0, 1)}
            {this.page(<SixthSection />, 5, 0, 1)}

            {/*seventh section*/}
            {this.page(<Navbar offset={this.state.offset} />, 6, 0, 2, { height: '70px' })}

            {!mobile &&
              this.page(
                <Bullets
                  id="customBullets"
                  pages={this.overallPages - this.lastPage}
                  handleBulletClick={this.handleBulletClick}
                  offset={this.state.offset}
                />,
                6,
                0,
                2,
                { width: '10px', right: '0' }
              )}
            {this.page(<SeventhSection />, 6, 0, 1)}
            {/*seventhSection end*/}

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
