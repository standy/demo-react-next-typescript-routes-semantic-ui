import React from 'react';

export default ({myOpen = false, theme = {defaultPadding: '10px'}}) => (
    <div style={{display: myOpen ? null : 'none'}}>
        OPENED!

        <style jsx>{`			
			div {
				padding: ${theme.defaultPadding} 0;
            }
		`}</style>
    </div>
);

