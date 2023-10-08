const t = require('tap')
const {
  replaceOccurences,
  countVowels,
  getFirstAndLast,
} = require('./index')
const { get } = require('http')

t.test('[replaceOccurences] should not throw an error if string is empty', t => {
  t.doesNotThrow(() => {
    replaceOccurences('')
  })
  t.end()
})

t.test('[replaceOccurences] should work as expected', t => {
  t.equal(replaceOccurences('the ship is closed', 'i', 'o'), 'the shop os closed')
  t.equal(replaceOccurences('another long example here', 'long', 'great'), 'another great example here')
  t.equal(replaceOccurences('how something is close to the show', 'how', 'well'), 'well something is close to the swell')
  t.end()
})

t.test('[countVowels] should not throw an error if string is empty', t => {
  t.doesNotThrow(() => {
    countVowels('')
  })
  t.end()
})

t.test('[countVowels] should work as expected 1', t => {
  t.equal(countVowels('abracadabra'), 5)
  t.equal(countVowels('something longer than one word'), 9)
  t.end()
})

t.test('[getFirstAndLast] should work as expected', t => {
  t.equal(getFirstAndLast('this should work', 4), 'thiswork')
  t.equal(getFirstAndLast('the cat is under the table', 3), 'theble')
  t.end()
})

t.test('[getFirstAndLast] should not throw an error if string is empty', t => {
  t.doesNotThrow(() => {
    getFirstAndLast('')
  })
  t.end()
})