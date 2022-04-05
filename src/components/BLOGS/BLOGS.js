import React from 'react';

import './BLOGS.css';

const BLOGS = () => {
    
    

    return (
        <div >
            <div className='blogs'>
            <h1 className='question-one'>What is Context Api?</h1>
           <p>Context API is used as an alternative to <span className='props-drilling'>props drilling</span>. When a data has to be passed from root node or component to leaf node or component, then data has to be passed to the component after root node or component.  This is how data is passed from root to leaf component.  Passing data in this way is called <span className='props-drilling'>props drilling</span>.  This way it becomes very difficult to pass data, when there are many more nested components. So to solve this problem <span className='context-api'>context api is used</span>.  So that we can easily pass data from any component.</p> 

           <h1 className='question-one'>Difference between inline, inline-block and block element.</h1>
           <p><spnan className='inline-element'>Inline:</spnan> Inline element We can not set height width. The elements in the inline will be side by side.  Extra no space will not occupy all the space of a row.Inline element does not block the whole row. </p>

           <p><spnan className='inline-element'>Inline-blok:</spnan> Inline block element We can set height width.  We can also use top bottom margins paddings in the inline block element. The elements in the inline block will be side by side.  Extra no space will not occupy all the space of a row.</p>

           <p><spnan className='inline-element'>Block:</spnan> Block element We can  set height width. We can also use top bottom margins paddings in the block element. Block level element occupies all the places in a row which means it blocks the whole row.  The elements do not coexist.  There is another under one.</p>


           </div>

             
        </div>
    );
};

export default BLOGS;