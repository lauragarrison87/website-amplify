import React, { Component } from 'react';

class Microscale extends Component {
    render() {
        return (
            <div className="Header">
                <br/>
                <h1 className="display-3">Microscale Asset Gallery</h1>
                <p>
                    We are currently looking for participants for our survey on visualization of selected topics in the microscale environment. In this survey we will ask you to compare the different ways that we represent two physiological phenomena associated with the cellular and molecular environment: signal transduction and constitutive activation (a type of overactivation).
                </p>

                    <p>
                        We will present you with two task-based scenarios, (1) expert and (2) general audience, and ask you to identify the (1) most and (2) least effective visual representations for each scenario's communication objective for both signal transduction and constitutive activation, respectively. We will furthermore ask you to provide some basic ratings and keywords for your choices. We will use these data to analyze and develop a set of recommendations for more effective physiology representation methods driven by audience and task. Following the conclusion of this study we plan to make these results and visual assets available to the broader research community.
                    </p>

                    <p>
                        In compliance with European Union GDPR regulations, we will not collect or store any personally identifying information unless you choose to provide it. We will keep private any personal information that you provide (i.e., profession, age, gender, email), and only use this to identify possible demographic-related patterns in perception, or for follow-up questions we may have. Your data will be stored on Typeform's secure servers with multi-factor authentication (for more information, click here) and, following the completion of this study, will be moved to a secure server at University of Bergen. We will only use your responses for the purposes of this research and our stated aims.
                    </p>

                    <p>
                        If you would like to participate, please contact us (<strong>laura [dot] garrison [at] uib [dot] no</strong>) at any time. This survey should take around 30 minutes.
                </p>

            </div>
        );
    }
}
export default Microscale;
