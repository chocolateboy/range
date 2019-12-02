import range from '.'
import test  from 'ava'

test('Array.from(range(low, high))', t => {
    t.deepEqual(Array.from(range(1, 5)), [1, 2, 3, 4, 5])
})

test('Array.from(range(low, high, step))', t => {
    t.deepEqual(Array.from(range(1, 10, 3)), [1, 4, 7, 10])
})

test('Array.from(range(high, low))', t => {
    t.deepEqual(Array.from(range(5, 1)), [5, 4, 3, 2, 1])
})

test('Array.from(range(high, low, step))', t => {
    t.deepEqual(Array.from(range(10, 1, 3)), [10, 7, 4, 1])
})

test('range()', t => {
    const result = []

    for (const value of range()) {
        if (value > 5) break
        result.push(value)
    }

    t.deepEqual(result, [1, 2, 3, 4, 5])
})

test('range(start)', t => {
    const result = []

    for (const value of range(10)) {
        if (value > 15) break
        result.push(value)
    }

    t.deepEqual(result, [10, 11, 12, 13, 14, 15])
})

test('range(low, high)', t => {
    const result = []

    for (const value of range(1, 5)) {
        result.push(value)
    }

    t.deepEqual(result, [1, 2, 3, 4, 5])
})

test('range(high, low)', t => {
    const result = []

    for (const value of range(5, 1)) {
        result.push(value)
    }

    t.deepEqual(result, [5, 4, 3, 2, 1])
})

test('range(low, high, step)', t => {
    const result = []

    for (const value of range(1, 10, 3)) {
        result.push(value)
    }

    t.deepEqual(result, [1, 4, 7, 10])
})

test('range(high, low, step)', t => {
    const result = []

    for (const value of range(10, 1, 3)) {
        result.push(value)
    }

    t.deepEqual(result, [10, 7, 4, 1])
})
