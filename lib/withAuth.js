import React from 'react';
import PropTypes from 'prop-types';

let globalUser = null;

function withAuth(BaseComponent) {
    class App extends React.Component {
        // specify propTypes and defaultProps

        static async getInitialProps(ctx) {
            const isFromServer = !!ctx.req;
            const user = ctx.req ? ctx.req.user && ctx.req.user.toObject() : globalUser;

            if (isFromServer && user) {
                user._id = user._id.toString();
            }

            const props = { user, isFromServer };

            // Call child component's getInitialProps, if it is defined
            if (BaseComponent.getInitialProps) {
                Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
            }

            return props;
        }

        componentDidMount() {
            const { user, isFromServer } = this.props;

            if (isFromServer) {
                globalUser = user;
            }
        }

        render() {
            return <BaseComponent {...this.props} />;
        }
    }

    return App;
}

export default withAuth;