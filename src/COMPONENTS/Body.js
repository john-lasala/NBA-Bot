import "./Body.scss";
import React from 'react';

const Body = props => {
    return (
        <body>
            <main>
                <h1>
                    Please fill this out if you like big ol, sloppy horsecock.
                </h1>
                <h3>
                   <i>Looking for that handsome stallion?</i> 
                </h3>
                <section className="info">
                    <div>
                        What is horsecock.io? IF YOU ARE ASKING, THEN THIS ISNT 
                        THE PLACE FOR YOU! LEAVE!
                    </div>
                </section>
                <br/>
                <section className="info">
                    <form action="mailto:johnlalalasala@gmail.com" method="post">
                    <label for="body">Name:</label>
                        <input type="text" name="name" placeholder="Your name.."/>
                        <br/>
                        <label for="email">Email:</label>
                        <input required type="text" name="text" placeholder="Email"/>
                        <br/>
                        <label for="body">Name:</label>
                        <input type="text" name="name" placeholder="Your name.."/>
                        <br/>
                        <label for="email">Email:</label>
                        <input required type="text" name="text" placeholder="Email"/>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
        </body>
    );
};

export default Body;