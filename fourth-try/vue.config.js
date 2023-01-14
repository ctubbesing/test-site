module.exports = {
    // publicPath: process.env.BASE_ENV === "https://ctubbesing.github.io" ? "/test-site/" : "/"
    // publicPath: window.location.origin === "https://ctubbesing.github.io" ? "/test-site/" : "/"
    // publicPath: "/"
    publicPath: process.env.NODE_ENV === "production" ? "/test-site/" : "/"
}