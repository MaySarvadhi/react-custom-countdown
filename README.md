# Getting Started with React Custom Countdown

A customizable countdown component for React.

## Getting Started

You can install the module via npm or yarn:


`npm install react-custom-countdown --save`

`yarn add react-custom-countdown`

## How to Use?

import { Countdown } from "react-custom-countdown";

const timeTillDate = "08 05 2021, 11:15 am";
const DATE_FORMAT = "MM DD YYYY, h:mm a"; //Date must be same as Date format ;

you can achieve same date which one require in this component by this formula => moment(new Date()).format(DATE_FORMAT);

```
const App = () => {
  return(
    <Countdown
      timeTillDate={timeTillDate}
      timeFormat={DATE_FORMAT}
    />
  )
}

