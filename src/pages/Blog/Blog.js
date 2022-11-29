import React from "react";

const Blog = () => {

    return (
        <div>
            <h3 className="text-5xl text-base-500 text-center my-3 mb-5">Frequently Asked Questions</h3>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20"
            >
                <div className="collapse-title  text-xl font-medium mx-20">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content mx-20">
                    <p>
                        There are four ways to manage a state in a React Application <br />
                        1.URL <br />
                        2.Web Storage <br />
                        3.Local State <br />
                        4.Derived State
                    </p>
                </div>
            </div>

            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20"
            >
                <div className="collapse-title text-xl font-medium mx-20">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content mx-20">
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>

            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20"
            >
                <div className="collapse-title text-xl font-medium mx-20">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content mx-20">
                    <p>
                        The main objective of unit testing is to isolate written code to
                        test and determine if it works as intended. Unit testing is an
                        important step in the development process, because if done
                        correctly, it can help detect early flaws in code which may be more
                        difficult to find in later testing stages.
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20"
            >
                <div className="collapse-title text-xl font-medium mx-20">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content mx-20">
                    <p>
                        Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js. Vue provides higher customizability and hence is easier to learn
                        than Angular or React. Further, Vue has an overlap with Angular and
                        React with respect to their functionality like the use of
                        components. Hence, the transition to Vue from either of the two is
                        an easy option.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
