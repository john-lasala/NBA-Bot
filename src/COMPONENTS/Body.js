import "./Body.scss";
import React from 'react';

const Body = props => {
    return (
        <body>
            <main>
                <h1>
                    Form
                </h1>
                <h3>
                   <i>Looking for that handsome stallion?</i> 
                </h3>
                <section className="info">
                    <form method="post">
                        <ul>
                            <li>
                                <label for="name">Name:</label>
                                <input type="text" name="firstname" placeholder="Your name.."></input>
                            </li>
                            <li>
                                <label for="email">Email:</label>
                                <input type="text" id="fname" name="firstname" placeholder="Email"></input>
                            </li>
                            <li class="button">
                                <button type="submit">Submit</button>
                            </li>
                        </ul>
                    </form>
                </section>
            </main>
        </body>
    );
};

export default Body;