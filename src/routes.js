import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostDetail from './components/post_detail';
const Greeting = () => {
    return <div>Hello you</div>;
}
export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex}/>
        <Route path="greeting" component={Greeting}/>
        <Route path="posts/new" component={PostsNew}/>
        <Route path="posts/:id" component={PostDetail} />
    </Route>
);
