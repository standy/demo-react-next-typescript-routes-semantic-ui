import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';

export default ({ item }) => (
    <Segment>
        <pre>
            {JSON.stringify(item, null, 2)}
        </pre>
    </Segment>
);
