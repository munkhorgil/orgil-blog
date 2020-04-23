import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Munkh-Orgil Myagmarsuren`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Munkh-Orgil Myagmarsuren</strong> Full-Stack Engineer, Digital Nomader <a href="https://erxes.io">@erxes</a> currently lives in Ulaanbaatar, Mongolia
          {' '}<br/>
          <a href="https://github.com/munkhorgil">
            Follow me on Github
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
