export default (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
};