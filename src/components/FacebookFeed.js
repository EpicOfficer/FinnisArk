import * as React from "react";

const FacebookFeed = React.memo(({
                             title = "Finni's Ark",
                             pageName = "FinnisArk",
                             width = "500",
                             height = "600",
                             adaptWidth = true,
                             smallHeader = false,
                             hideCover = false,
                             showFaces = true
                         }) => {
    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <React.Fragment>
            <div id="fb-root"></div>
            <div
                className="fb-page"
                data-href={`https://www.facebook.com/${pageName}/`}
                data-tabs="timeline"
                data-width={width}
                data-height={height}
                data-small-header={smallHeader}
                data-adapt-container-width={adaptWidth}
                data-hide-cover={hideCover}
                data-show-facepile={showFaces}
            >
                <blockquote
                    cite={`https://www.facebook.com/${pageName}/`}
                    className="fb-xfbml-parse-ignore"
                >
                    <a href={`https://www.facebook.com/${pageName}/`}>{title}</a>
                </blockquote>
            </div>
        </React.Fragment>
    );
});const Feed = React.memo(({
                                      title = "Finni's Ark",
                                      pageName = "FinnisArk",
                                      width = "500",
                                      height = "",
                                      adaptWidth = true,
                                      smallHeader = false,
                                      hideCover = false,
                                      showFaces = true
                                  }) => {
    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <React.Fragment>
            <div id="fb-root"></div>
            <div
                className="fb-page"
                data-href={`https://www.facebook.com/${pageName}/`}
                data-tabs="timeline"
                data-width={width}
                data-height={height}
                data-small-header={smallHeader}
                data-adapt-container-width={adaptWidth}
                data-hide-cover={hideCover}
                data-show-facepile={showFaces}
            >
                <blockquote
                    cite={`https://www.facebook.com/${pageName}/`}
                    className="fb-xfbml-parse-ignore"
                >
                    <a href={`https://www.facebook.com/${pageName}/`}>{title}</a>
                </blockquote>
            </div>
        </React.Fragment>
    );
});

export default FacebookFeed;