import "./Body.scss";
import React from 'react';

const Body = props => {
    return (
        <html>
        <body>
            <h1>
                Title Here
            </h1>
            <h3>
                <i>Heading</i> 
            </h3>

            <br/>
            <section className="info">
                <form action="mailto:johnlalalasala@gmail.com" method="post">
                    <span>
                        <label for="body">Name:</label>
                        <input type="text" name="name" placeholder="Your name"/>
                    </span><br/>
                    <span>
                        <label for="email">Email:</label>
                        <input required type="text" name="text" placeholder="Email"/>
                    </span><br/>
                    <span>
                        <label for="body">Quantity:</label>
                        <input type="number" name="name" placeholder="Max: 50"/>
                    </span><br/>
                    <span>
                        <label for="email">Date:</label>
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