(function () {
  const navigator = document.getElementById('marchers-navigation')
  if (!navigator) return

  const nodes = Array.from(navigator.children)
  const prevArrow = nodes.shift()
  const nextArrow = nodes.pop()
  const selectedNode = nodes.findIndex(function (el) {
    return el.classList.contains('active')
  })

  const maxIndex = nodes.length - 1
  let firstToShow = selectedNode - 2
  let lastToShow = selectedNode + 2
  configure()

  nodes.forEach(function (node, index) {
    if (index < firstToShow ||
        index > lastToShow) {
      node.style.display = 'none'
    }
  })

  function onClickPrev () {
    nodes[lastToShow].style.display = 'none'
    firstToShow--
    lastToShow--
    nodes[firstToShow].style.display = ''
    configure()
  }

  function onClickNext () {
    nodes[firstToShow].style.display = 'none'
    firstToShow++
    lastToShow++
    nodes[lastToShow].style.display = ''
    configure()
  }

  function configure () {
    if (firstToShow <= 0) {
      firstToShow = 0
      lastToShow = Math.min(firstToShow + 4, maxIndex)
      prevArrow.onclick = undefined
      prevArrow.style.visibility = 'hidden'
    } else {
      prevArrow.onclick = onClickPrev
      prevArrow.style.visibility = 'visible'
    }

    if (lastToShow >= maxIndex) {
      lastToShow = maxIndex
      firstToShow = Math.max(lastToShow - 4, 0)
      nextArrow.onclick = undefined
      nextArrow.style.visibility = 'hidden'
    } else {
      nextArrow.onclick = onClickNext
      nextArrow.style.visibility = 'visible'
    }
  }
})()
