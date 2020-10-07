import React from 'react';
import 'App.css';
import Resume from "Resume";

export default class App extends React.Component<any, any> {

  render() {
    return <div>
      <div className="text-center text-3xl font-medium mt-10">Site is getting a makeover. Check back soon!</div>
      <div className="text-center text-lg my-8">Take a look at my resume in the meantime</div>
      <Resume/>
      <div className="text-center mt-8">--</div>
    </div>
  }

}