/* Main functionality */

// Typing race
function race(timeoutValue) {
  const main = document.querySelector('.inputPanel').children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]

  const input = document.querySelector('.txtInput')

  const txtAll = main.textContent

  const txtArr = txtAll.split(' ')

  const text = txtArr.map((e) => e + ' ')

  for (let i = 0; i < text.length; i++) {
    (ind => {
      setTimeout(() => {
        (() => {
          input.value = text[i]

          const keyboardEvent = document.createEvent('KeyboardEvent')
          const initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent'

          keyboardEvent[initMethod](
            'keydown',
            true,
            true,
            window,
            false,
            false,
            false,
            false,
            40,
            0
          )

          input.dispatchEvent(keyboardEvent)
        })()
      }, 1000 + (timeoutValue * ind))
    })(i)
  }
};

/* -- Additional functionality -- */

// Challange after race
function challange(timeoutValue) {
  const input = document.querySelector('.challengeTextArea')

  const submit = document.querySelector('.gwt-Button')

  const txtAll = 'HERE SHOULD BE TEXT TAKEN FROM IMAGE'

  const txtArr = txtAll.split(' ')

  const text = txtArr.map((e) => e + ' ')

  for (let i = 0; i < text.length; i++) {
    (ind => {
      setTimeout(() => {
        (() => {
          input.value += text[i]

          const keyboardEvent = document.createEvent('KeyboardEvent')
          const initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent'

          keyboardEvent[initMethod](
            'keydown',
            true,
            true,
            window,
            false,
            false,
            false,
            false,
            40,
            0
          )

          input.dispatchEvent(keyboardEvent)

          if (i === text.length - 1) {
            submit.click()
          };
        })()
      }, 1000 + (timeoutValue * ind))
    })(i)
  }
};
