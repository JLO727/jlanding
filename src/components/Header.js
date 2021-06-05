import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  //TODO: Upgrade Font awesome or put custom logo

  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-bug"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Jim Lopez</h1>
        <p>
          Making connections from stack to shining stack.
          <br />
          Making Magik day after day
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {/* working links needed + resume download */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Tech
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
