import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='question-1'>
                <h1 className='text-4xl font-bold'>Q1.What is Contect API?</h1>
                <p className='text-2xl'>Proper drilling is no longer a problem with this new API. It's likely happened to you if you've worked on a React.js app, even if you're unfamiliar with the word. Prop drilling is the process of transferring data from component A to component Z through various layers of React components. The component will receive props indirectly, and it will be up to you, the React Developer, to make sure everything works well.For a more detailed explanation, it allows you to make certain data available to all components throughout the component tree, regardless of how deeply nested they are.</p>

            </div>

            <div className='question-2'>
                <h1 className='text-4xl font-bold'>Q2.What is Semantic tag?</h1>
                <p className='text-2xl'>Semantic HTML elements are those that express their meaning in a way that is both human and machine readable. Header, footer, and article elements are all deemed semantic since they accurately explain the element's purpose and the sort of material it contains.Header, nav, section, article, aside, and footer elements behave similarly to div elements. They divide the page into parts by grouping other items together. Whereas a div tag can include any type of data, it's simple to figure out what goes in a semantic header section. </p>
            </div>
        </div>
    );
};

export default Blogs;