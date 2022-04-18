const test = require('ava')

const geom3 = require('../geometries/geom3')

const { cylinderElliptic } = require('./index')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('cylinderElliptic (defaults)', (t) => {
  const obs = cylinderElliptic()
  const pts = geom3.toPoints(obs)

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 96)
})

test('cylinderElliptic (options)', (t) => {
  // test height
  let obs = cylinderElliptic({ height: 10, segments: 12 })
  let pts = geom3.toPoints(obs)
  let exp = [
    [[0, 0, -5], [0.8660254037844387, 0.49999999999999994, -5], [1, 0, -5]],
    [[0.8660254037844387, 0.49999999999999994, -5], [0.8660254037844387, 0.49999999999999994, 5],
      [1, 0, 5], [1, 0, -5]],
    [[0, 0, 5], [1, 0, 5], [0.8660254037844387, 0.49999999999999994, 5]],
    [[0, 0, -5], [0.5000000000000001, 0.8660254037844386, -5], [0.8660254037844387, 0.49999999999999994, -5]],
    [[0.5000000000000001, 0.8660254037844386, -5], [0.5000000000000001, 0.8660254037844386, 5],
      [0.8660254037844387, 0.49999999999999994, 5], [0.8660254037844387, 0.49999999999999994, -5]],
    [[0, 0, 5], [0.8660254037844387, 0.49999999999999994, 5], [0.5000000000000001, 0.8660254037844386, 5]],
    [[0, 0, -5], [0, 1, -5], [0.5000000000000001, 0.8660254037844386, -5]],
    [[0, 1, -5], [0, 1, 5],
      [0.5000000000000001, 0.8660254037844386, 5], [0.5000000000000001, 0.8660254037844386, -5]],
    [[0, 0, 5], [0.5000000000000001, 0.8660254037844386, 5], [0, 1, 5]],
    [[0, 0, -5], [-0.4999999999999998, 0.8660254037844387, -5], [0, 1, -5]],
    [[-0.4999999999999998, 0.8660254037844387, -5], [-0.4999999999999998, 0.8660254037844387, 5],
      [0, 1, 5], [0, 1, -5]],
    [[0, 0, 5], [0, 1, 5], [-0.4999999999999998, 0.8660254037844387, 5]],
    [[0, 0, -5], [-0.8660254037844387, 0.49999999999999994, -5], [-0.4999999999999998, 0.8660254037844387, -5]],
    [[-0.8660254037844387, 0.49999999999999994, -5], [-0.8660254037844387, 0.49999999999999994, 5],
      [-0.4999999999999998, 0.8660254037844387, 5], [-0.4999999999999998, 0.8660254037844387, -5]],
    [[0, 0, 5], [-0.4999999999999998, 0.8660254037844387, 5], [-0.8660254037844387, 0.49999999999999994, 5]],
    [[0, 0, -5], [-1, 0, -5], [-0.8660254037844387, 0.49999999999999994, -5]],
    [[-1, 0, -5], [-1, 0, 5],
      [-0.8660254037844387, 0.49999999999999994, 5], [-0.8660254037844387, 0.49999999999999994, -5]],
    [[0, 0, 5], [-0.8660254037844387, 0.49999999999999994, 5], [-1, 0, 5]],
    [[0, 0, -5], [-0.8660254037844386, -0.5000000000000001, -5], [-1, 0, -5]],
    [[-0.8660254037844386, -0.5000000000000001, -5], [-0.8660254037844386, -0.5000000000000001, 5],
      [-1, 0, 5], [-1, 0, -5]],
    [[0, 0, 5], [-1, 0, 5], [-0.8660254037844386, -0.5000000000000001, 5]],
    [[0, 0, -5], [-0.5000000000000004, -0.8660254037844385, -5], [-0.8660254037844386, -0.5000000000000001, -5]],
    [[-0.5000000000000004, -0.8660254037844385, -5], [-0.5000000000000004, -0.8660254037844385, 5],
      [-0.8660254037844386, -0.5000000000000001, 5], [-0.8660254037844386, -0.5000000000000001, -5]],
    [[0, 0, 5], [-0.8660254037844386, -0.5000000000000001, 5], [-0.5000000000000004, -0.8660254037844385, 5]],
    [[0, 0, -5], [0, -1, -5], [-0.5000000000000004, -0.8660254037844385, -5]],
    [[0, -1, -5], [0, -1, 5],
      [-0.5000000000000004, -0.8660254037844385, 5], [-0.5000000000000004, -0.8660254037844385, -5]],
    [[0, 0, 5], [-0.5000000000000004, -0.8660254037844385, 5], [0, -1, 5]],
    [[0, 0, -5], [0.5000000000000001, -0.8660254037844386, -5], [0, -1, -5]],
    [[0.5000000000000001, -0.8660254037844386, -5], [0.5000000000000001, -0.8660254037844386, 5],
      [0, -1, 5], [0, -1, -5]],
    [[0, 0, 5], [0, -1, 5], [0.5000000000000001, -0.8660254037844386, 5]],
    [[0, 0, -5], [0.8660254037844384, -0.5000000000000004, -5], [0.5000000000000001, -0.8660254037844386, -5]],
    [[0.8660254037844384, -0.5000000000000004, -5], [0.8660254037844384, -0.5000000000000004, 5],
      [0.5000000000000001, -0.8660254037844386, 5], [0.5000000000000001, -0.8660254037844386, -5]],
    [[0, 0, 5], [0.5000000000000001, -0.8660254037844386, 5], [0.8660254037844384, -0.5000000000000004, 5]],
    [[0, 0, -5], [1, 0, -5], [0.8660254037844384, -0.5000000000000004, -5]],
    [[1, 0, -5], [1, 0, 5], [0.8660254037844384, -0.5000000000000004, 5],
      [0.8660254037844384, -0.5000000000000004, -5]],
    [[0, 0, 5], [0.8660254037844384, -0.5000000000000004, 5], [1, 0, 5]]
  ]

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 36)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test startRadius and endRadius
  obs = cylinderElliptic({ startRadius: [1, 2], endRadius: [2, 1], segments: 12 })
  pts = geom3.toPoints(obs)
  exp = [
    [[0, 0, -1], [0.8660254037844387, 0.9999999999999999, -1], [1, 0, -1]],
    [[1, 0, -1], [0.8660254037844387, 0.9999999999999999, -1], [2, 0, 1]],
    [[0, 0, 1], [2, 0, 1], [1.7320508075688774, 0.49999999999999994, 1]],
    [[2, 0, 1], [0.8660254037844387, 0.9999999999999999, -1], [1.7320508075688774, 0.49999999999999994, 1]],
    [[0, 0, -1], [0.5000000000000001, 1.7320508075688772, -1], [0.8660254037844387, 0.9999999999999999, -1]],
    [[0.8660254037844387, 0.9999999999999999, -1], [0.5000000000000001, 1.7320508075688772, -1], [1.7320508075688774, 0.49999999999999994, 1]],
    [[0, 0, 1], [1.7320508075688774, 0.49999999999999994, 1], [1.0000000000000002, 0.8660254037844386, 1]],
    [[1.7320508075688774, 0.49999999999999994, 1], [0.5000000000000001, 1.7320508075688772, -1], [1.0000000000000002, 0.8660254037844386, 1]],
    [[0, 0, -1], [0, 2, -1], [0.5000000000000001, 1.7320508075688772, -1]],
    [[0.5000000000000001, 1.7320508075688772, -1], [0, 2, -1], [1.0000000000000002, 0.8660254037844386, 1]],
    [[0, 0, 1], [1.0000000000000002, 0.8660254037844386, 1], [0, 1, 1]],
    [[1.0000000000000002, 0.8660254037844386, 1], [0, 2, -1], [0, 1, 1]],
    [[0, 0, -1], [-0.4999999999999998, 1.7320508075688774, -1], [0, 2, -1]],
    [[0, 2, -1], [-0.4999999999999998, 1.7320508075688774, -1], [0, 1, 1]],
    [[0, 0, 1], [0, 1, 1], [-0.9999999999999996, 0.8660254037844387, 1]],
    [[0, 1, 1], [-0.4999999999999998, 1.7320508075688774, -1], [-0.9999999999999996, 0.8660254037844387, 1]],
    [[0, 0, -1], [-0.8660254037844387, 0.9999999999999999, -1], [-0.4999999999999998, 1.7320508075688774, -1]],
    [[-0.4999999999999998, 1.7320508075688774, -1], [-0.8660254037844387, 0.9999999999999999, -1], [-0.9999999999999996, 0.8660254037844387, 1]],
    [[0, 0, 1], [-0.9999999999999996, 0.8660254037844387, 1], [-1.7320508075688774, 0.49999999999999994, 1]],
    [[-0.9999999999999996, 0.8660254037844387, 1], [-0.8660254037844387, 0.9999999999999999, -1], [-1.7320508075688774, 0.49999999999999994, 1]],
    [[0, 0, -1], [-1, 0, -1], [-0.8660254037844387, 0.9999999999999999, -1]],
    [[-0.8660254037844387, 0.9999999999999999, -1], [-1, 0, -1], [-1.7320508075688774, 0.49999999999999994, 1]],
    [[0, 0, 1], [-1.7320508075688774, 0.49999999999999994, 1], [-2, 0, 1]],
    [[-1.7320508075688774, 0.49999999999999994, 1], [-1, 0, -1], [-2, 0, 1]],
    [[0, 0, -1], [-0.8660254037844386, -1.0000000000000002, -1], [-1, 0, -1]],
    [[-1, 0, -1], [-0.8660254037844386, -1.0000000000000002, -1], [-2, 0, 1]],
    [[0, 0, 1], [-2, 0, 1], [-1.7320508075688772, -0.5000000000000001, 1]],
    [[-2, 0, 1], [-0.8660254037844386, -1.0000000000000002, -1], [-1.7320508075688772, -0.5000000000000001, 1]],
    [[0, 0, -1], [-0.5000000000000004, -1.732050807568877, -1], [-0.8660254037844386, -1.0000000000000002, -1]],
    [[-0.8660254037844386, -1.0000000000000002, -1], [-0.5000000000000004, -1.732050807568877, -1], [-1.7320508075688772, -0.5000000000000001, 1]],
    [[0, 0, 1], [-1.7320508075688772, -0.5000000000000001, 1], [-1.0000000000000009, -0.8660254037844385, 1]],
    [[-1.7320508075688772, -0.5000000000000001, 1], [-0.5000000000000004, -1.732050807568877, -1], [-1.0000000000000009, -0.8660254037844385, 1]],
    [[0, 0, -1], [0, -2, -1], [-0.5000000000000004, -1.732050807568877, -1]],
    [[-0.5000000000000004, -1.732050807568877, -1], [0, -2, -1], [-1.0000000000000009, -0.8660254037844385, 1]],
    [[0, 0, 1], [-1.0000000000000009, -0.8660254037844385, 1], [0, -1, 1]],
    [[-1.0000000000000009, -0.8660254037844385, 1], [0, -2, -1], [0, -1, 1]],
    [[0, 0, -1], [0.5000000000000001, -1.7320508075688772, -1], [0, -2, -1]],
    [[0, -2, -1], [0.5000000000000001, -1.7320508075688772, -1], [0, -1, 1]],
    [[0, 0, 1], [0, -1, 1], [1.0000000000000002, -0.8660254037844386, 1]],
    [[0, -1, 1], [0.5000000000000001, -1.7320508075688772, -1], [1.0000000000000002, -0.8660254037844386, 1]],
    [[0, 0, -1], [0.8660254037844384, -1.0000000000000009, -1], [0.5000000000000001, -1.7320508075688772, -1]],
    [[0.5000000000000001, -1.7320508075688772, -1], [0.8660254037844384, -1.0000000000000009, -1], [1.0000000000000002, -0.8660254037844386, 1]],
    [[0, 0, 1], [1.0000000000000002, -0.8660254037844386, 1], [1.7320508075688767, -0.5000000000000004, 1]],
    [[1.0000000000000002, -0.8660254037844386, 1], [0.8660254037844384, -1.0000000000000009, -1], [1.7320508075688767, -0.5000000000000004, 1]],
    [[0, 0, -1], [1, 0, -1], [0.8660254037844384, -1.0000000000000009, -1]],
    [[0.8660254037844384, -1.0000000000000009, -1], [1, 0, -1], [1.7320508075688767, -0.5000000000000004, 1]],
    [[0, 0, 1], [1.7320508075688767, -0.5000000000000004, 1], [2, 0, 1]],
    [[1.7320508075688767, -0.5000000000000004, 1], [1, 0, -1], [2, 0, 1]]
  ]

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 48)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test startAngle and endAngle
  obs = cylinderElliptic({ startRadius: [1, 2], endRadius: [2, 1], startAngle: Math.PI / 2, endAngle: Math.PI * 2 * 0.75, segments: 12 })
  pts = geom3.toPoints(obs)

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 28)
  // t.true(comparePolygonsAsPoints(pts, exp))

  // test segments
  obs = cylinderElliptic({ segments: 8 })
  pts = geom3.toPoints(obs)

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 24)

  // test center
  obs = cylinderElliptic({ center: [-5, -5, -5], height: 3, segments: 8 })
  pts = geom3.toPoints(obs)
  exp = [
    [[-5, -5, -6.5], [-4.292893218813452, -4.292893218813452, -6.5], [-4, -5, -6.5]],
    [[-4.292893218813452, -4.292893218813452, -6.5], [-4.292893218813452, -4.292893218813452, -3.5],
      [-4, -5, -3.5], [-4, -5, -6.5]],
    [[-5, -5, -3.5], [-4, -5, -3.5], [-4.292893218813452, -4.292893218813452, -3.5]],
    [[-5, -5, -6.5], [-5, -4, -6.5], [-4.292893218813452, -4.292893218813452, -6.5]],
    [[-5, -4, -6.5], [-5, -4, -3.5],
      [-4.292893218813452, -4.292893218813452, -3.5], [-4.292893218813452, -4.292893218813452, -6.5]],
    [[-5, -5, -3.5], [-4.292893218813452, -4.292893218813452, -3.5], [-5, -4, -3.5]],
    [[-5, -5, -6.5], [-5.707106781186548, -4.292893218813452, -6.5], [-5, -4, -6.5]],
    [[-5.707106781186548, -4.292893218813452, -6.5], [-5.707106781186548, -4.292893218813452, -3.5],
      [-5, -4, -3.5], [-5, -4, -6.5]],
    [[-5, -5, -3.5], [-5, -4, -3.5], [-5.707106781186548, -4.292893218813452, -3.5]],
    [[-5, -5, -6.5], [-6, -5, -6.5], [-5.707106781186548, -4.292893218813452, -6.5]],
    [[-6, -5, -6.5], [-6, -5, -3.5],
      [-5.707106781186548, -4.292893218813452, -3.5], [-5.707106781186548, -4.292893218813452, -6.5]],
    [[-5, -5, -3.5], [-5.707106781186548, -4.292893218813452, -3.5], [-6, -5, -3.5]],
    [[-5, -5, -6.5], [-5.707106781186548, -5.707106781186548, -6.5], [-6, -5, -6.5]],
    [[-5.707106781186548, -5.707106781186548, -6.5], [-5.707106781186548, -5.707106781186548, -3.5],
      [-6, -5, -3.5], [-6, -5, -6.5]],
    [[-5, -5, -3.5], [-6, -5, -3.5], [-5.707106781186548, -5.707106781186548, -3.5]],
    [[-5, -5, -6.5], [-5, -6, -6.5], [-5.707106781186548, -5.707106781186548, -6.5]],
    [[-5, -6, -6.5], [-5, -6, -3.5],
      [-5.707106781186548, -5.707106781186548, -3.5], [-5.707106781186548, -5.707106781186548, -6.5]],
    [[-5, -5, -3.5], [-5.707106781186548, -5.707106781186548, -3.5], [-5, -6, -3.5]],
    [[-5, -5, -6.5], [-4.292893218813453, -5.707106781186548, -6.5], [-5, -6, -6.5]],
    [[-4.292893218813453, -5.707106781186548, -6.5], [-4.292893218813453, -5.707106781186548, -3.5],
      [-5, -6, -3.5], [-5, -6, -6.5]],
    [[-5, -5, -3.5], [-5, -6, -3.5], [-4.292893218813453, -5.707106781186548, -3.5]],
    [[-5, -5, -6.5], [-4, -5, -6.5], [-4.292893218813453, -5.707106781186548, -6.5]],
    [[-4, -5, -6.5], [-4, -5, -3.5],
      [-4.292893218813453, -5.707106781186548, -3.5], [-4.292893218813453, -5.707106781186548, -6.5]],
    [[-5, -5, -3.5], [-4.292893218813453, -5.707106781186548, -3.5], [-4, -5, -3.5]]
  ]

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 24)
  t.true(comparePolygonsAsPoints(pts, exp))
})

test('cylinderElliptic (cone)', (t) => {
  const obs = cylinderElliptic({ endRadius: [0, 0] })
  const pts = geom3.toPoints(obs)

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 64)
})

test('cylinderElliptic (squished)', (t) => {
  const obs = cylinderElliptic({ startRadius: [1, 0], endRadius: [0, 1], segments: 4 })
  const pts = geom3.toPoints(obs)

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 8)
})
