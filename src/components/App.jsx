import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOption/FeedbackOption';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistic/Statistic';

export const App = () => {
  const buttons = ['Good', 'Neutral', 'Bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onIncrementFeedbackStatistic = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttons}
          onLeaveFeedback={onIncrementFeedbackStatistic}
        />
      </Section>

      <Section title="Statistic">
        <>
          {countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </>
      </Section>
    </>
  );
};

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   onIncrementFeedbackStatistic = e => {
//     const buttonName = e.currentTarget.name;

//     this.setState(prevState => ({
//       [buttonName]: prevState[buttonName] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const buttons = ['Good', 'Neutral', 'Bad'];

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={buttons}
//             onLeaveFeedback={this.onIncrementFeedbackStatistic}
//           />
//         </Section>

//         <Section title="Statistic">
//           <>
//             {this.countTotalFeedback() === 0 ? (
//               <Notification />
//             ) : (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//               />
//             )}
//           </>
//         </Section>
//       </>
//     );
//   }
// }
