import React from 'react';
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const About = () => {
    return (
        <section className="about" id="about">
            <div className="container-about">
                <div className="heading-about">

                    <h2 className='about-h2 text-center'>Weather
                        <span>App</span></h2>
                    <p className='about-p text-center'> One of the most important reasons you should use a to do list is that it will help you stay organised.
                        <br />
                        When you write all your tasks in a list, they seem more manageable.
                    </p>

                </div>
                <div className="">
                    <center>
                    <div className="col-lg-4">
                       <img src="https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?b=1&k=20&m=1285308242&s=170667a&w=0&h=K-UO77yYEQAKjRNLhgXADlyRIqrPkB8sC-4mKcyMgC4=" alt="about" className="img-fluid" width="80%" height="70%" />
                    </div>
                    </center>
                    
                    <div className="col-lg-13 m-5">
                        <br/>
                        <h3 className='about2-h3'>What ia Weather App ? </h3>
                        <p className='about-p'>Weather App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.
                         It is helpful in planning our daily schedules.</p>
                        <p className='about-p' >Weather lists have reportedly been around since the early twentieth century, when they were introduced as a way to improve productivity. The vast majority of people would probably admit to using them at least from time to time as a way of managing their workload and flow.

Somehow, though, some people seem to use them much more efficiently than others.

This page provides some advice to help improve your Weather list writing, and ensure that your efficiency increases.</p>
                       

<h3 className='about2-h3'>Why do Weather Lists Help?</h3>

<p className='about-p'>Tricking Your Brain Weather lists work for one main reason:</p>


<p className='about-p'>Our brains like things to be finished off and tidy, 
which means that we worry about things that need doing. That ought to mean that making 
a list of things to do makes us more worried, but it turns out that it actually tricks 
the brain into thinking that the task has been done.</p>

<p className='about-p'>In other words, writing things down on a to-do list means that you stop worrying, and actually have time to prioritise and then complete your tasks.
</p>

<h3 className='about2-h3'>1. Keep your daily or weekly lists manageable</h3>
<p className='about-p'>If you are the kind of person that cannot remember things if they are not written down, then it is worth having two (or more) lists:</p>

<p className='about-p'>The ongoing list of ‘things that need doing at some stage, when I have time’, which can get as long as you like or need; and
The list of tasks that you need to complete within a defined period (today, or this week, for example), which needs to remain short and manageable.
Both of these are Weather lists, of a sort, but with different purposes.</p>

<p className='about-p'>The first is a reminder of everything that needs doing at some stage. It is helpful if you can read everything on it at once, so keeping it to one page of a notebook or on screen is good.</p>

<p className='about-p'>The second is a way of prioritising and focusing your attention, so that you do the things that matter most when you have most energy.</p>

<p className='about-p'>The things from the first list—if they are important enough—should eventually make it onto the second list. If they turn out not to be important enough, then you can delete them.</p>



<h3 className='about2-h3'>3.Keep your daily or weekly lists manageable</h3>
<p className='about-p'>One of the biggest problems with Weather lists is not being able to tick things off, because even when you do something, the task is still not finished. This leads to a sense of frustration, because you keep adding things to your list, but never ticking them off.

Research also shows that vague tasks make us more likely to procrastinate.

It is therefore important to be as precise as possible, and break tasks down into smaller steps, especially in your daily or weekly list.

You should also focus on the things that you need to do, rather than where someone else is currently responsible.

For example, instead of saying “Sort tax return”, break it down further. Start with “Gather together information needed for tax return”, then move on to “Check online access”, “Complete all personal information on tax return form”, and/or “Send information to accountant”. Because these are easier to manage, you are more likely to do them.
</p>

<h3 className='about2-h3'>4. Keep your list up to date</h3>
<p className='about-p'>One of the most important tasks each day or week is to think about what you need to do in the next period. Taking time to plan, and particularly to review your overall list and make sure that you move jobs from there to your daily or weekly list as they become urgent, means that you will not forget to do anything on the overall list.

<p className='about-p'>The time you take to do this need not be more than about five minutes each day, if that.
</p>
<p className='about-p'>You should also check your overall list and remove anything that you realise that you have no intention of doing. This might be because you no longer want to do it, or because the time is past.</p>
</p>
   </div>
                </div>
            </div>
        </section>

    )
}

export default About;