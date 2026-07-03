describe('Lekker Melodies web app', () => {
  it('1. loads the home page and displays all sound cards', () => {
    cy.visit('/');

    cy.get('main h2').should('contain', 'Lekker Melodies');
    cy.get('main').contains('Your Ambient Sonic Sanctuary').should('be.visible');
    cy.get('[data-cy="sound-card"]').should('have.length', 12);
  });

  it('2. navigates to every main page from the navbar', () => {
    cy.visit('/');

    const pages = [
      { link: 'Overview', path: '/overview', heading: 'Overview' },
      { link: 'Blog', path: '/blog', heading: 'Lekker Melodies' },
      { link: 'Privacy', path: '/privacy', heading: 'Privacy Policy' },
      { link: 'About', path: '/about', heading: 'Lekker Melodies' },
      { link: 'Home', path: '/', heading: 'Lekker Melodies' },
    ];

    pages.forEach(({ link, path, heading }) => {
      cy.get('header').contains('a', link).click();
      cy.location('hash').should('eq', `#${path}`);
      cy.get('h1, h2, .text-4xl').should('contain', heading);
    });
  });

  it('3. plays an ambient sound', () => {
    let paused = true;

    cy.visit('/', {
      onBeforeLoad(win) {
        Object.defineProperty(win.HTMLMediaElement.prototype, 'paused', {
          configurable: true,
          get: () => paused,
        });
        cy.stub(win.HTMLMediaElement.prototype, 'play')
          .callsFake(() => {
            paused = false;
            return Promise.resolve();
          })
          .as('play');
      },
    });

    cy.get('button[aria-label="Play Evening Birds"]').click();
    cy.get('@play').should('have.been.calledOnce');
    cy.get('button[aria-label="Pause Evening Birds"]').should('be.visible');
  });

  it('4. pauses a playing sound and resets it', () => {
    let paused = true;

    cy.visit('/', {
      onBeforeLoad(win) {
        Object.defineProperty(win.HTMLMediaElement.prototype, 'paused', {
          configurable: true,
          get: () => paused,
        });
        cy.stub(win.HTMLMediaElement.prototype, 'play').callsFake(() => {
          paused = false;
          return Promise.resolve();
        });
        cy.stub(win.HTMLMediaElement.prototype, 'pause')
          .callsFake(() => {
            paused = true;
          })
          .as('pause');
      },
    });

    cy.get('button[aria-label="Play Evening Birds"]').click();
    cy.get('audio[aria-label="Evening Birds audio"]').then(($audio) => {
      $audio[0].currentTime = 10;
    });
    cy.get('button[aria-label="Pause Evening Birds"]').click();

    cy.get('@pause').should('have.been.calledOnce');
    cy.get('audio[aria-label="Evening Birds audio"]')
      .should(($audio) => expect($audio[0].currentTime).to.equal(0));
    cy.get('button[aria-label="Play Evening Birds"]').should('be.visible');
  });

  it('5. changes one sound volume without changing another', () => {
    cy.visit('/');

    cy.get('input[aria-label="Evening Birds volume"]')
      .should('have.value', '0.5')
      .then(($slider) => {
        const slider = $slider[0];
        const valueSetter = Object.getOwnPropertyDescriptor(
          slider.ownerDocument.defaultView.HTMLInputElement.prototype,
          'value',
        ).set;

        valueSetter.call(slider, '0.8');
        const InputEvent = slider.ownerDocument.defaultView.Event;
        slider.dispatchEvent(new InputEvent('input', { bubbles: true }));
      })
      .get('input[aria-label="Evening Birds volume"]')
      .should('have.value', '0.8');

    cy.get('audio[aria-label="Evening Birds audio"]')
      .should(($audio) => expect($audio[0].volume).to.equal(0.8));
    cy.get('input[aria-label="Campfire Crackling volume"]')
      .should('have.value', '0.5');
  });

  it('6. displays the complete blog listing', () => {
    cy.visit('/#/blog');

    cy.get('[data-cy="blog-post"]').should('have.length', 5);
    cy.get('[data-cy="blog-post"]').first().within(() => {
      cy.contains('Can Listening to Nature Sounds Improve Mental Performance?').should('be.visible');
      cy.get('time').should('contain', 'Mar 16, 2023');
      cy.get('img').should('be.visible');
      cy.contains('a', 'Read more').should('be.visible');
    });
  });

  it('7. opens a blog post and returns to the blog', () => {
    cy.visit('/#/blog');

    cy.get('[data-cy="blog-post"]').first().contains('a', 'Read more').click();
    cy.location('hash').should('eq', '#/blog/1');
    cy.get('h1').should('contain', 'Can Listening to Nature Sounds Improve Mental Performance?');
    cy.contains('By Mitchell Mutandah').should('be.visible');

    cy.contains('a', 'Back').click();
    cy.location('hash').should('eq', '#/blog');
  });

  it('8. handles an invalid blog post', () => {
    cy.visit('/#/blog/999');

    cy.get('h1').should('contain', 'OOPS!');
    cy.get('img[alt="Post not found"]').should('be.visible');
    cy.contains('a', 'Back').click();
    cy.location('hash').should('eq', '#/blog');
  });

  it('9. displays the custom page for an unknown route', () => {
    cy.visit('/#/something-invalid');

    cy.get('h1').should('contain', 'OOPS!');
    cy.get('img[alt="Page not found"]').should('be.visible');
  });

  it('10. keeps the home page within an iPhone-sized viewport', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    cy.get('[data-cy="sound-card"]').should('have.length', 12);
    cy.document().then((document) => {
      expect(document.documentElement.scrollWidth).to.be.at.most(
        document.documentElement.clientWidth,
      );
    });
  });
});
