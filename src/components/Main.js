import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/jim-lopez-about.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What I use</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          {/* TODO: Break this out into a component */}
          {/* TODO: USE THIS:    https://www.iconfinder.com/search/?q=html5 */}
          <div className="skill-row-1">
            <img
              src={
                'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                '	https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                '	https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
          </div>
          <div id="skill-row-two">
            <img
              src={
                'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />

            <img
              src={
                'https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
          </div>
          <div id="skill-row-two">
            <img
              src={
                'https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
            <img
              src={
                'https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white'
              }
              alt=""
              style={{ padding: '5px' }}
            />
          </div>
          {/* <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p> */}
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <p>Deployment Imminent ...</p>
          {/* <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p> */}
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="Jim_Lopez" />
          </span>
          <p>
            I've worked in the information technology field for 16 years now. My
            journey started when I was sent to Network Systems training while
            serving in the Marine Corps. Since, I've built upon that foundation
            through a variety of professional experience. I stubled into web
            development in 2016 and I've spent the last five years slowly
            cutting my teeth picking up programing languages and concepts. In
            2020, I decided that I wanted to dive in to Development head long.
            I've made programming and application development the sole focus in
            my professional life and I'm very excited to see how many awesome
            things I can dream up and build. -- I'm availble to work.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            data-email="jim@pro-tecit.com"
            // Currently redirecting to succes message, Impliment toast and redir to home!
            action={() =>
              (window.top.location =
                'https://script.google.com/macros/s/AKfycbzdiE9DkzsgVbym0MIFtYWV5othL3K8h4tKGQUQ2pD7biXNlFPZcNEW0Hje_-fvN4RuyA/exec')
            }
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/jlo_727" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/jlo727" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
