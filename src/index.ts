export default function* range (start = 1, end = Infinity, step = 1) {
    if (start <= end) {
        for (let i = start; i <= end; i += step) yield i
    } else {
        for (let i = start; i >= end; i -= step) yield i
    }
}
