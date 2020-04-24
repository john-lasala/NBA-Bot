
import 'bulma/css/bulma.css'
import "./Bodyy.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Body = props => {
    return (
        <body className='home'>
            <section className='t'>
            <div class="box">
                Boston Whaler Supervisor Support Tool
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email"/>
                        <span class="icon is-small is-left">
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i><FontAwesomeIcon icon={faCheck} /></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password"/>
                        <span class="icon is-small is-left">
                            <i><FontAwesomeIcon icon={faLock} /></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                            Login
                        </button>
                    </p>
                </div>
                </div>
            </section>
        </body>
    );
};

export default Body;