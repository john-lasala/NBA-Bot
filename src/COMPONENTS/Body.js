import "./Body.scss";
import React from 'react';

const Body = props => {
    return (
        <html>
        <body>
            <section>
            <h1>
                Title Here
            </h1>
            <h3>
                Heading
            </h3>
            </section>
            <br/>
            <section className="info">
                <form action="mailto:johnlalalasala@gmail.com" method="post">
                    <span>
                        <input type="text" name="name" placeholder="Your name"/>
                    </span><br/>
                    <span>
                        <input required type="text" name="text" placeholder="Email"/>
                    </span><br/>
                    <span>
                        <input type="number" name="name" placeholder="Max: 50"/>
                    </span><br/>
                    <span>
                    <input required type="date" name="text" placeholder="(012)-345-6789"/>
                    </span><br/>
                    <button type="submit">Submit</button>
                    <button type="Reset">Reset</button>
                </form> 
            </section>
        </body>
        </html>
    );
};

export default Body;