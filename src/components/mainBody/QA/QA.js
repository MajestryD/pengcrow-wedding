import './QA.css';


function QA() {

    return (
        <div id="Q/A" className="QA">

            <div className='qAMessage'>
                <span className='Title'> Q&A </span>
                <p className='RSVPFYI'><strong>Some answers to your questions~</strong><br />Events are confusing and you probably have questions.</p>

                <div className='QAContainer'>
                    <div className="QAColumn">
                        <div className='QAItem'>
                            <span className='Question'>When is the last day for RSVP?</span>
                            <p className='Answer'>Ideally kindly RSVP as soon as possible but the deadline would be June 30<sup>th</sup>.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Do we have a theme for the wedding?</span>
                            <p className='Answer'>Nope, but kindly be in semi-formal wear. Would wouldn't wish for you to go out of your way to tailor specifically for the wedding.</p>
                        </div>


                        <div className='QAItem'>
                            <span className='Question'>Will there be dinner options to select?</span>
                            <p className='Answer'>The Manor has the same set dinner course for everyone. Currently the menu protien is set to be Atlantic Salmon and Veal tenderloin for the main course.</p>
                        </div>


                        <div className='QAItem'>
                            <span className='Question'>What should I do if I can't make it?</span>
                            <p className='Answer'>You will be missed! If you can not make it to the wedding, please let us know as soon as possible and RSVP “no,” in the RSVP form so we can plan accordingly.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Is this the wedding-wedding?</span>
                            <p className='Answer'>I am just as shocked as you are. Yes, this is the wedding-wedding. I GUESS WE ARE HAVING A WEDDING!</p>
                        </div>
                    </div>
                    <div className="QAColumn">
                        <div className='QAItem'>
                            <span className='Question'>Will there be parking?</span>
                            <p className='Answer'>Yes! The Manor is beautiful but is far and in the middle of nowhere. The most convinient method to reach venue would be by car.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Can I wear white?</span>
                            <p className='Answer'>The brides requests that you avoid wearing white, but you are welcome to wear white decals or decorations, as long as the outfit is not completely white.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Are children welcome?</span>
                            <p className='Answer'>We love the little ones! Kindly add your kids in the RSVP list and please be mindful of them during the ceremony.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Will there be any special diet options for dinner?</span>
                            <p className='Answer'>Some examples of special diet options are Halal and Vegetarian options. Kindly state your dietary restrictions and allergies in the RSVP form and we will accomodate the best that we can.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Will there be an open bar?</span>
                            <p className='Answer'>Yes! The drink are included. You may drink to your hearts desire be it alchohol or juice or water for the boring ones. But please find yourself a DD (designated driver) and drink responsibly. </p>
                        </div>
                    </div>

                    <div className="QAColumn">
                        <div className='QAItem'>
                            <span className='Question'>What time should I arrive? </span>
                            <p className='Answer'>The arrival time is 5 PM. But since we are doing a week day wedding, we will be the only event there. You can aim to arrive at 4:45 PM to keep things lively.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Can I bring a plus one?</span>
                            <p className='Answer'>Our wedding is strictly RSVP only. We will only be able to accomodate those with an invitation. But kindly send Chloe or Daniel a message if you have any questions!</p>
                        </div>
                        <div className='QAItem'>
                            <span className='Question'>Do you have a wedding registry?</span>
                            <p className='Answer'> We're so thankful that you were all able to make it to our big day. If you'd like to contribute to our Japanese honeymoon adventure we'd be incredibly grateful. </p>
                        </div>
                        <div className='QAItem'>
                            <span className='Question'>Can I take and post pictures of your wedding on social media?</span>
                            <p className='Answer'>Yes! Infact please do and tag us via #pengcrow. That way we will be able to view all your lovely pictures afterwards.</p>
                        </div>

                        <div className='QAItem'>
                            <span className='Question'>Will the cats be there?</span>
                            <p className='Answer'>As much as we would like them to be there. They would steal the show.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default QA;
