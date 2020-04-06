import React from 'react'
import {mount} from 'cypress-react-unit-test'
import DemoDesktop from '../../demo/js/DemoDesktop'
import WebampLazy from "../../js/webampLazy";

describe('Webamp', () => {
  it('renders demo desktop', () => {
    const webamp = new WebampLazy({
      initialTracks: [{
        metaData: {
            artist: "DJ Mike Llama",
            title: "Llama Whippin' Intro"
        },
        url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
        duration: 5.322286
      }],
    })
    mount(<DemoDesktop webamp={webamp} />)
      .then(() => {
        webamp.renderWhenReady(document.getElementById("desktop"))
      })
    cy.get('.actions #play').click()
  })
})
